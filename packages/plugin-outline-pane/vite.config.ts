/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      react(),
      dts({
        entryRoot: 'src/',
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
      setupFiles: '../../vitest.setup.ts',
    },
    build: {
      lib: {
        entry: './src/index.tsx',
        fileName: (format, entryName) => `${entryName}.${format}.js`,
        name: 'LowcodeEnginePluginDesigner',
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
