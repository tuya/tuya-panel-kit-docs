import { defineConfig, IConfig } from 'dumi';

const isProd =
  process.env.NODE_ENV === 'production' && process.env.PREVIEW_PR !== 'true';

export default defineConfig({
  ssr: isProd ? {} : false,
  exportStatic: isProd ? {} : false,
  title: 'Tuya Design',
  mode: 'site',
  locales: [
    ['zh', '中文'],
    ['en', 'English'],
  ],
  favicon:
    'https://imagesd.tuyaus.com/tyims/rms-static/c118f100-7bd1-11ea-be8a-afe9921c3d8a-1586595140625.ico?tyName=tuya_favicon.ico',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  theme: {
    'primary-color': '#ff4800',
  },
  logo:
    'https://imagesd.tuyaus.com/tyims/rms-static/c118f100-7bd1-11ea-be8a-afe9921c3d8a-1586595140625.ico?tyName=tuya_favicon.ico',
  themeConfig: {
    qrcode:
      'tuyaSmart--addVirtualDev?productId=mvhcrizelobov3dw&token=release_common_component',
    apiData:
      'https://cdn.jsdelivr.net/npm/tuya-panel-kit-props-data/props.json',
    demoUrl:
      process.env.NODE_ENV === 'development'
        ? // ? 'http://localhost:8001'
        'https://tuya.github.io/tuya-panel-kit/'
        : 'https://tuya.github.io/tuya-panel-kit/',
  },
  navs: {
    zh: [
      null,
      {
        title: 'Github',
        path: 'https://github.com/tuya/tuya-panel-kit',
      },
      {
        title: 'Contact Us',
        path: 'https://service.console.tuya.com/8/3/create',
      },
      {
        title: 'More',
        path: 'https://developer.tuya.com/cn/docs/iot/preface?id=K9m1fn6ycetd0',
      },
      //       {
      //         title: '版本',
      //         children: [
      //           {
      //             title: 'v1',
      //           },
      //           {
      //             title: 'v2',
      //           },
      //         ],
      //       },
    ],
    en: [
      null,
      {
        title: 'Github',
        path: 'https://github.com/tuya/tuya-panel-kit',
      },
      {
        title: 'Contact Us',
        path: 'https://service.console.tuya.com/8/3/create',
      },
      {
        title: 'More',
        path: 'https://developer.tuya.com/cn/docs/iot/preface?id=K9m1fn6ycetd0',
      },
      //       {
      //         title: 'Version',
      //         children: [
      //           {
      //             title: 'v1',
      //           },
      //           {
      //             title: 'v2',
      //           },
      //         ],
      //       },
    ],
  },
  resolve: {
    passivePreview: true,
  },
  hash: isProd,
  // base: isProd ? '/tuya-panel-kit-docs' : '/', // router base
  publicPath: isProd
    ? '//cdn.jsdelivr.net/gh/TuyaInc/tuya-panel-kit-docs@gh-pages/'
    : '/',
  // more config: https://d.umijs.org/config
} as IConfig);
