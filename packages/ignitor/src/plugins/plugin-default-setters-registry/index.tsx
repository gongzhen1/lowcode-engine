import { IPublicModelPluginContext } from '@felce/lowcode-types';
import AliLowCodeEngineExt from '@felce/lowcode-engine-ext';
import '@felce/lowcode-engine-ext/dist/index.css';

// 设置内置 setter 和事件绑定、插件绑定面板
const DefaultSettersRegistryPlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { setterMap, pluginMap } = AliLowCodeEngineExt;
      const { setters, skeleton } = ctx;
      // 注册 setterMap
      setters.registerSetter(setterMap);
      // 注册插件
      // 注册事件绑定面板
      skeleton.add({
        area: 'centerArea',
        type: 'Widget',
        content: pluginMap.EventBindDialog,
        name: 'eventBindDialog',
        props: {},
      });

      // 注册变量绑定面板
      skeleton.add({
        area: 'centerArea',
        type: 'Widget',
        content: pluginMap.VariableBindDialog,
        name: 'variableBindDialog',
        props: {},
      });
    },
  };
};
DefaultSettersRegistryPlugin.pluginName = 'DefaultSettersRegistryPlugin';
export default DefaultSettersRegistryPlugin;
