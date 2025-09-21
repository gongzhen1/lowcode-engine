import { init, plugins } from '@felce/lowcode-engine';
import { createFetchHandler } from '@alilc/lowcode-datasource-fetch-handler';
import EditorInitPlugin from './plugins/plugin-editor-init';
import DefaultSettersRegistryPlugin from './plugins/plugin-default-setters-registry';
import appHelper from './helper';
import './index.scss';

await plugins.register(EditorInitPlugin, {
  scenarioName: 'general',
  displayName: '综合场景',
  info: {
    urls: [
      {
        key: '设计器',
        value: 'https://github.com/alibaba/lowcode-demo/tree/main/demo-general',
      },
    ],
  },
});

// 设置内置 setter 和事件绑定、插件绑定面板
await plugins.register(DefaultSettersRegistryPlugin);

init(document.getElementById('lce-container')!, {
  locale: 'zh-CN',
  enableCondition: true,
  enableCanvasLock: true,
  // 默认绑定变量
  supportVariableGlobally: true,
  requestHandlersMap: {
    fetch: createFetchHandler(),
  },
  simulatorUrl: [
    'https://registry.npmmirror.com/@felce/lowcode-react-simulator-renderer/latest/files/dist/react-simulator-renderer.css',
    'https://registry.npmmirror.com/@felce/lowcode-react-simulator-renderer/latest/files/dist/react-simulator-renderer.umd.js',
  ],
  appHelper,
  enableContextMenu: true,
});
