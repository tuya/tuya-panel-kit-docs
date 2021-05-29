# tuya-panel-kit-docs

Docs site for tuya-panel-kit

### Start

```bash
# clone
git clone https://github.com/youngjuning/tuya-panel-kit-docs.git

cd tuya-panel-kit-docs

yarn
# yarn add @tuya/dumi-theme-tuya -D
yarn start
```

### Theme dev

```bash
# clone
git clone https://github.com/youngjuning/tuya-panel-kit-docs.git

cd tuya-panel-kit-docs
# yarn remove @tuya/dumi-theme-tuya -D

# link deps
cd dumi-theme-tuya
yarn unlink dumi-theme-tuya
yarn link
cd ..
yarn link dumi-theme-tuya

yarn
yarn start
```
