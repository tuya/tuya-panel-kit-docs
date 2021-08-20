import fs from 'fs';
import https from 'https';
import { promisify } from 'util';

export namespace sys {
  export const writeFile = promisify(fs.writeFile);
  export const readFile = promisify(fs.readFile);
  const mkdir = promisify(fs.mkdir);

  export const log = console.log;

  export const mkDirPath = async (path: string): Promise<void> => {
    if (fs.existsSync(path)) {
      return;
    } else {
      await mkdir(path);
    }
  };

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

  export const download = async (href: string, dest: string) => {
    const str = await get(href);
    await writeFile(dest, str);
  };

  let stack = 0;
  export async function jobRunner(job: () => any) {
    const runner = async () => {
      try {
        await job();
      } catch (error) {
        if (stack > 10) {
          throw error;
        }
        console.log(`Retry(${stack}), because:`, error);
        stack++;
        await runner();
      }
    };
    await runner();
    stack = 0;
  }

  export async function pipeline(jobs: { [jobName: string]: Function }) {
    const jobNames = Object.keys(jobs);
    const jobCount = jobNames.length;
    console.time('job');
    await jobNames.reduce(
      (prev, key, i) =>
        prev.then(() => {
          console.log(`[${i + 1}/${jobCount}] ${key.toUpperCase()}...`);
          return jobs[key]();
        }),
      Promise.resolve(),
    );
    console.timeEnd('job');
  }

  export const compose = <T>(...fns: Array<(value: T) => T>) =>
    fns.reduce((a, b) => value => a(b(value)));
  export const pipe = <T>(...fns: Array<(value: T) => T>) =>
    compose(...fns.slice().reverse());

  export const combineReplacers = (
    replacers: Array<[RegExp, (substring: string, ...args: any[]) => string]>,
  ) =>
    pipe<string>(
      ...replacers.map(([reg, replacer]) => (str: string) =>
        str.replace(new RegExp(reg.source, 'g'), replacer),
      ),
    );
}
