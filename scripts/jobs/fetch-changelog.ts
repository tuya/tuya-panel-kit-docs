import { resolve } from 'path';

import { sys } from '../sys';

const changelogHref = 'https://raw.githubusercontent.com/tuya/tuya-panel-kit/main/packages/tuya-panel-kit/CHANGELOG.md'
const changelogPath = resolve(__dirname, '../../docs/docs/getting-started/CHANGELOG')

const replaceContent = async (path: string, replacer: (old: string) => string) => {
  const buf = await sys.readFile(path)
  const content = buf.toString()
  await sys.writeFile(path, replacer(content))
}

// insert changelog
const reg = /<Changelog>[\s\S]*?<\/Changelog>/g
const replaceChangelog = (value: string) => (content: string) => content.replace(reg, `<Changelog>\n\n${value}\n\n</Changelog>`)

const formatChangelog = sys.combineReplacers([
  // clear changelog content
  [/# Change Log[\s\S]*?##/, () => '##'],
  // format no-link date title
  [/##\s*?(\d+\.\d+\.\d+)\s*?\((\d{4}-\d{2}-\d{2})\)/, (_, version, date) => `## [${version}](#) (${date})`],
  // format h level
  [/\n# \[(\d+\.\d+\.\d+\S*?)\]\(/, (_, version) => `\n## [${version}](`],
  // format h levels
  [/####/, () => '##'],
  [/#####/, () => '###'],
  // format no link rc title
  [/# (\d+\.\d+\.\d+-rc\.\d+)\s*?\((\d{4}-\d{2}-\d{2})\)/, (_, version, date) => `## [${version}](#) (${date})`]
])

// job
export const downloadChangelog = async () => {
  const upstreamChangelog = await sys.get(changelogHref)
  const replacer = replaceChangelog(upstreamChangelog)
  const transformer = sys.compose(formatChangelog, replacer)

  await replaceContent(`${changelogPath}.md`, transformer)
  await replaceContent(`${changelogPath}.en.md`, transformer)
}
