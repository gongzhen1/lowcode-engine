<h1 align="center">LowCodeEngine</h1>

<div align="center">

An enterprise-class low-code technology stack with scale-out design

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-image]][download-url]

[![][issues-helper-image]][issues-helper-url] [![Issues need help][help-wanted-image]][help-wanted-url]

[![codecov][codecov-image-url]][codecov-url] [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/lowcode-workspace/awesome-lowcode-engine)

[npm-image]: https://img.shields.io/npm/v/@felce/lowcode-engine.svg?style=flat-square
[npm-url]: http://npmjs.org/package/@felce/lowcode-engine
[download-image]: https://img.shields.io/npm/dm/@felce/lowcode-engine.svg?style=flat-square
[download-url]: https://npmjs.org/package/@felce/lowcode-engine
[help-wanted-image]: https://flat.badgen.net/github/label-issues/fe-lce/lowcode-engine/help%20wanted/open
[help-wanted-url]: https://github.com/fe-lce/lowcode-engine/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22
[issues-helper-image]: https://img.shields.io/badge/using-issues--helper-orange?style=flat-square
[issues-helper-url]: https://github.com/actions-cool/issues-helper
[codecov-image-url]: https://codecov.io/gh/fe-lce/lowcode-engine/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/fe-lce/lowcode-engine

</div>

[![](https://img.alicdn.com/imgextra/i2/O1CN01UhoS7C1sNNhySvfWi_!!6000000005754-2-tps-2878-1588.png)](http://lowcode-engine.cn)

English | [简体中文](./README.md)

## ✨ Features

- 🌈 An extension-oriented kernel engine extracted from an enterprise-level low-code platform, pursuing the design concept of the smallest kernel and the strongest ecology
- 📦 Out-of-the-box high-quality ecological elements, including material systems, setters, plugins, etc.
- ⚙️ A complete tool chain, supporting the full-link R&D cycle of ecological elements such as material systems, setters, and plug-ins
- 🔌 Powerful expansion capability, has supported nearly 100 various vertical low-code platforms
- 🛡 Developed with TypeScript, providing complete type definition files

## 🎯 Compatible Environments

- Modern browsers (Chrome >= 80, Edge >= 80, last 2 safari versions, last 2 firefox versions)

## 📚 Engine Protocol

The engine fully implements the "LowCodeEngine Basic Construction Protocol Specification" and "LowCodeEngine Material Protocol Specification". The protocol stack is a key part of whether materials in the low-code field can be circulated.

![image](https://img.alicdn.com/imgextra/i3/O1CN01IisBcy1dNBIg16QFM_!!6000000003723-2-tps-1916-1070.png)

## 🌰 Usage example

```bash
npm install @felce/lowcode-engine --save-dev
```

> **TIPS: Only cdn import is supported, npm package is used to provide code hinting capabilities such as typings**

```ts
import { init, skeleton } from '@felce/lowcode-engine';

skeleton.add({
  area: 'topArea',
  type: 'Widget',
  name: 'logo',
  content: YourFantasticLogo,
  contentProps: {
    logo: 'https://img.alicdn.com/tfs/TB1_SocGkT2gK0jSZFkXXcIQFXa-66-66.png',
    href: '/',
  },
  props: {
    align: 'left',
    width: 100,
  },
});

init(document.getElementById('lce'));
```

### Engineering configuration:

```json
{
  "externals": {
    "@felce/lowcode-engine": "var window.AliLowCodeEngine",
    "@felce/lowcode-engine-ext": "var window.AliLowCodeEngineExt"
  }
}
```

### cdn optional method:

#### unpkg

```html
https://unpkg.com/@felce/lowcode-engine@1.4.1/dist/js/engine-core.js
https://unpkg.com/@felce/lowcode-react-simulator-renderer@1.4.1/dist/js/react-simulator-renderer.js
https://unpkg.com/@felce/lowcode-vue-simulator-renderer@1.4.1/dist/js/react-simulator-renderer.js
```

#### npmmirror

```html
https://registry.npmmirror.com/@felce/lowcode-engine/1.4.1/files/dist/js/engine-core.js
https://registry.npmmirror.com/@felce/lowcode-react-simulator-renderer/1.4.1/files/dist/js/react-simulator-renderer.js
https://registry.npmmirror.com/@felce/lowcode-vue-simulator-renderer/1.4.1/files/dist/js/react-simulator-renderer.js
```

#### jsdelivr

```html
https://cdn.jsdelivr.net/npm/@felce/lowcode-engine@1.4.1/dist/js/engine-core.js
https://cdn.jsdelivr.net/npm/@felce/lowcode-react-simulator-renderer@1.4.1/dist/js/react-simulator-renderer.js
https://cdn.jsdelivr.net/npm/@felce/lowcode-vue-simulator-renderer@1.4.1/dist/js/react-simulator-renderer.js
```

#### Method 5: Use your own cdn

Pass the files under packages/engine/dist and packages/react-simulator-renderer/dist（packages/vue-simulator-renderer/dist） in the source code to your cdn provider

## 🔗 Related Links

- [Official website home page](http://lowcode-engine.cn/)
- [Demo Play Now](http://lowcode-engine.cn/demo) | [Engine Demo Repository](https://github.com/fe-lce/lowcode-demo)
- [Official Materials](https://github.com/fe-lce/lowcode-materials)
- [official setter](https://github.com/fe-lce/lowcode-engine-ext)
- [Official plugin (plugin)](https://github.com/fe-lce/lowcode-plugins)
- [Ecological elements (materials, setters, plugins) toolchain](https://lowcode-engine.cn/site/docs/guide/expand/editor/cli)
- [User Documentation](http://lowcode-engine.cn/doc)
- [API](https://lowcode-engine.cn/site/docs/api/)

This [awesome-lowcode-engine](https://github.com/lowcode-workspace/awesome-lowcode-engine) page links to a repository which records all of the tools\materials\solutions that use or built for the lowcode-engine, PR is welcomed.

## 💻 Local debugging

```bash
$ git clone git@github.com:fe-lce/lowcode-engine.git
$ cd lowcode-engine
$ npm install
$ npm run setup
$ npm start
```

> 📢 npm access speed is slow, Alibaba employees can use tnpm, other students recommend using cnpm or specifying a mirror registry.
>
> 📢 Windows environment must use [WSL](https://docs.microsoft.com/en-us/windows/wsl/install), other terminals are not guaranteed to work normally

After lowcode-engine is started, several umd files are provided, which can be debugged in combination with the [lowcode-demo](https://github.com/fe-lce/lowcode-demo) project. Refer to the file proxy rules [here](https://lowcode-engine.cn/site/docs/participate/prepare).

## 🤝 Participation

Please read first:

1. [How to configure the engine debugging environment? ](https://lowcode-engine.cn/site/docs/participate/prepare)
2. [About the R&D collaboration process of the engine](https://lowcode-engine.cn/site/docs/participate/flow)
3. [Engineering Configuration of Engine](https://lowcode-engine.cn/site/docs/participate/config)

> Strongly recommend reading ["The Wisdom of Asking Questions"](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way), ["How to Ask Questions to the Open Source Community"](https: //github.com/seajs/seajs/issues/545) and [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html), [ "How to Submit Unanswerable Questions to Open Source Projects"](https://zhuanlan.zhihu.com/p/25795393), better questions are easier to get help. (This paragraph refers to [antd](https://github.com/ant-design/ant-design))

About Pull Request:

- set the target branch to **develop** other than **main**

### Plan

Current main tasks:

- [ ] Fix backlog issues
- [x] Modify namespace
- [x] Support custom workbench
- [ ] Upgrade to React 18
- [ ] Upgrade build scripts (or replace with Vite)
- [ ] Merge Vue canvas and renderer into the project
- [ ] Core module refactoring to achieve framework independence
- [ ] Independent built-in plugin for custom loading
- [ ] Independent settings plugin
- [ ] Optimize rendering performance

## ❤️ Contributors

Special thanks to everyone who contributed to this project.

<p>
<a href="https://github.com/fe-lce/lowcode-engine/graphs/contributors"><img src="https://contrib.rocks/image?repo=fe-lce/lowcode-engine" /></a>
</p>
