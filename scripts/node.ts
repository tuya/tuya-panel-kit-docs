import { readFile, writeFile } from 'fs';
import { promisify } from 'util';

import * as fsWalk from '@nodelib/fs.walk';

export const walkFile = async (path) => {
  const entries = await new Promise<fsWalk.Entry[]>((resolve, reject) => {
    fsWalk.walk(
      path,
      {
        entryFilter: entry => {
          return (
            /\.md$/.test(entry.path) && (!entry.path.includes('getting-started')) && (!entry.path.includes('layout'))
          )
        },
      },
      (error, entries) => {
        if (error) {
          reject(error)
        } else {
          resolve(entries)
        }
      }
    )
  })
  return Promise.all(
    entries.map(node =>
      promisify(readFile)(node.path).then(res => ({
        ...node,
        content: res.toString(),
      }))
    )
  )
}

const markdown_codeblock = /\`\`\`([\s\S]*?)\n([\s\S]*?)\n\`\`\`/g

export const matchPattern = (pattern: RegExp, str: string) => {
  const scan = new RegExp(pattern.source, 'g')
  let next = scan.exec(str)
  const result: RegExpExecArray[] = []
  while (next) {
    result.push(next)
    next = scan.exec(str)
  }
  return result
}

export const getMarkdownCode = (str: string) => {
  const result = matchPattern(markdown_codeblock, str)
  return result.map(item => {
    const lang = item[1]
    const code = item[2]

    return {
      lang,
      code,
      length: item[0].length,
      start: item.index,
    }
  })
}
const badgeScanner = /<Badge>[\s\S].*?<\/Badge>/g;

walkFile('./docs').then(res => {
  res.map(async item => {
    const codes = getMarkdownCode(item.content)
    const compName = item.content.match(/\ntitle:([\s\S]*?)\n/)[1].replace(badgeScanner, '').trim().split(' ')[0]
    const map = {}
    let i = 0
    for (const code of codes) {
      let addImports = [compName]
      let addCode = ''
      const useCX = code.code.includes('cx(')
      if (useCX) {
        addImports.push('Utils')
        addCode += `const { convertX: cx } = Utils.RatioUtils;\n\n`
      }
      const newCode = `\`\`\`${code.lang}\nimport { ${addImports.join(', ')} } from 'tuya-panel-kit'\n\n${addCode}${code.code}\n\`\`\``
      const symbol = `__$$${i}`.padEnd(code.length, '_')
      map[symbol] = newCode
      item.content = item.content.slice(0, code.start) + symbol + item.content.slice(code.start + code.length)
      i++
    }
    for (const key in map) {
      item.content = item.content.replace(key, map[key])
    }
    await promisify(writeFile)(item.path, item.content)
  })
})