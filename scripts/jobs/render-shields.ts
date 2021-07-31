import cheerio from 'cheerio';
import { resolve } from 'path';

import { sys } from '../sys';

const parseSvg = async (url: string) => {
  const html = await sys.get(url);
  const $ = cheerio.load(html);
  const label =
    $('svg > g:last-child > text:first-child').text() ||
    $('svg > g:nth-child(4) > text:first-child').text();
  const value =
    $('svg > g:last-child > text:last-child').text() ||
    $('svg > g:nth-child(4) > text:last-child').text();
  return {
    label,
    value,
  };
};


const list = [
  'https://img.shields.io/npm/v/tuya-panel-kit/latest.svg',
  'https://img.shields.io/github/license/tuya/tuya-panel-kit.svg',
  'https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?maxAge=2592000',
  'https://img.shields.io/badge/Conventional%20Commits-1.0.0-brightgreen.svg?maxAge=2592000',
  'https://codecov.io/gh/tuya/tuya-panel-kit/branch/master/graph/badge.svg',
];

const dest = resolve(__dirname, '../../public/shields.json');

const purgeCdn = () => sys.get('https://purge.jsdelivr.net/gh/TuyaInc/tuya-panel-kit-docs@gh-pages/shields.json')

export const renderShields = async () => {
  const result = await Promise.all(list.map(parseSvg));
  sys.log(await purgeCdn())
  await sys.writeFile(
    dest,
    JSON.stringify(
      result.reduce((acc, item) => ({ ...acc, [item.label]: item }), {}),
    ),
  );
}
