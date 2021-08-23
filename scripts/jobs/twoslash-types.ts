import { join, resolve } from 'path';

import * as tp from '@saber2pr/ts-compiler';
import { twoslasher } from '@typescript/twoslash';

import { sys } from '../sys';

const matchPattern = (pattern: RegExp, str: string) => {
  const scan = new RegExp(pattern.source, 'g');
  let next = scan.exec(str);
  const result: RegExpExecArray[] = [];
  while (next) {
    result.push(next);
    next = scan.exec(str);
  }
  return result;
};

export const twoslasheTypes = async () => {
  const files = await tp.walkFile(join(__dirname, '../../docs'), entry =>
    /\.en\.md$/.test(entry.path),
  );
  // filter demo files
  const demoFiles = files.reduce((acc, file) => {
    const res = file.content.match(/demo: ([\s\S]*?)\n/);
    if (res && res[1]) {
      const demo = res[1];
      const codes = matchPattern(
        /\`\`\`([\s\S]*?)\n([\s\S]*?)\n\`\`\`/g,
        file.content,
      )
        .filter(item => ['tsx', 'jsx', 'js', 'ts'].includes(item[1].trim()))
        .map(item => item[2])
        .filter(_ => !!_);
      return acc.concat({
        ...file,
        demo,
        codes,
      });
    }
    return acc;
  }, [] as Array<tp.EntryResult & { demo: string; codes: string[] }>);

  const map = demoFiles.reduce((acc, item, i) => {
    console.log(
      `[TypeGen(${Math.round((i * 100) / demoFiles.length)}%)] ${item.demo}`,
    );
    const types = item.codes.map(code => {
      const res = twoslasher(code, 'tsx', {
        defaultOptions: {
          noErrors: true,
        },
      });
      return res.staticQuickInfos.filter(item => item.text !== 'any');
    });
    return {
      ...acc,
      [item.demo]: types,
    };
  }, {});

  const dest = resolve(__dirname, '../../public/types-assets.json');
  await sys.writeFile(dest, JSON.stringify(map));
};
