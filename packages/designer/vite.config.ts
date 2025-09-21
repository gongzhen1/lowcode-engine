/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react({
        tsDecorators: true,
      }),
      dts({
        entryRoot: 'src/',
        exclude: ['tests'],
      }),
    ],
    define: {
      'process.env': {
        NODE_ENV: mode,
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
    build: {
      lib: {
        entry: './src/index.ts',
        fileName: (format, entryName) => `${entryName}.${format}.js`,
        name: 'LowcodeEngineDesigner',
        cssFileName: 'index',
      },
      rollupOptions: {
        output: {
          exports: 'named',
        },
        external: ['react', 'react-dom', 'prop-types', 'moment', 'lodash', '@alifd/next'],
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // https://cn.vitejs.dev/config/shared-options.html#css-preprocessoroptions
          api: 'legacy',
        },
      },
    },
  };
});
