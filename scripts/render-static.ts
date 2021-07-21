import cheerio from 'cheerio';
import fs from 'fs';
import https from 'https';
import { resolve } from 'path';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);

export function get(url: string): Promise<string> {
  return new Promise((resolve, reject) =>
    https
      .get(url, res => {
        let str = '';
        res.on('data', chunk => (str += chunk));
        res.on('end', () => resolve(str));
      })
      .on('error', err => reject(err)),
  );
}

const parseSvg = async (url: string) => {
  const html = await get(url);
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

const dest = resolve(__dirname, '../dist/shields.json');

let stack = 0;
async function job(list: string[]) {
  try {
    const result = await Promise.all(list.map(parseSvg));

    await writeFile(
      dest,
      JSON.stringify(
        result.reduce((acc, item) => ({ ...acc, [item.label]: item }), {}),
      ),
    );
  } catch (error) {
    if (stack > 10) {
      throw error;
    }
    console.log(`Retry(${stack}), because:`, error);
    await job(list);
  } finally {
    stack++;
  }
}

const list = [
  'https://img.shields.io/npm/v/tuya-panel-kit/latest.svg',
  'https://img.shields.io/github/license/tuya/tuya-panel-kit.svg',
  'https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?maxAge=2592000',
  'https://img.shields.io/badge/Conventional%20Commits-1.0.0-brightgreen.svg?maxAge=2592000',
  'https://codecov.io/gh/tuya/tuya-panel-kit/branch/master/graph/badge.svg',
];

job(list);
