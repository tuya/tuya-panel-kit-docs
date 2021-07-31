import { resolve } from 'path';

import { sys } from '../sys';

const changelogHref = 'https://raw.githubusercontent.com/tuya/tuya-panel-kit/master/packages/tuya-panel-kit/CHANGELOG.md'
const changelogPath = resolve(__dirname, '../../docs/docs/getting-started/CHANGELOG')

const replaceContent = async (path: string, replacer: (old: string) => string) => {
  const buf = await sys.readFile(path)
  const content = buf.toString()
  await sys.writeFile(path, replacer(content))
}

// insert changelog
const reg = /<Changelog>[\s\S]*?<\/Changelog>/g
const replaceChangelog = (content: string, value: string) => content.replace(reg, `<Changelog>\n\n${value}\n\n</Changelog>`)

// clear changelog content
const changeTitle = /# Change Log[\s\S]*?##/g
const clearContent = (content: string) => content.replace(changeTitle, '##')

// format no-link date title
const dateTitle = /##\s*?(\d+\.\d+\.\d+)\s*?\((\d{4}-\d{2}-\d{2})\)/g
const formatErrorDateTitle = (content: string) => content.replace(dateTitle, (_, version, date) => `## [${version}](#) (${date})`)

// format h level
const h1Title = /\n# \[(\d+\.\d+\.\d+\S*?)\]\(/g
const formatH1Title = (content: string) => content.replace(h1Title, (_, version) => `\n## [${version}](`)

// format h levels
const formatHLevels = (content: string) => content.replace('####', '##').replace('#####', '###')

// format no link rc title
const noLinkRcTitle = /# (\d+\.\d+\.\d+-rc\.\d+)\s*?\((\d{4}-\d{2}-\d{2})\)/g
const formatRcTitle = (content: string) => content.replace(noLinkRcTitle, (_, version, date) => `## [${version}](#) (${date})`)

// resolve changelog
const resolveChangelog = sys.compose(clearContent, formatErrorDateTitle, formatH1Title, formatHLevels, formatRcTitle)

// job
export const downloadChangelog = async () => {
  const upstreamChangelog = await sys.get(changelogHref)
  await replaceContent(`${changelogPath}.md`, old => resolveChangelog(replaceChangelog(old, upstreamChangelog)))
  await replaceContent(`${changelogPath}.en.md`, old => resolveChangelog(replaceChangelog(old, upstreamChangelog)))
}