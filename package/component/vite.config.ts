import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
      include: ['src/**/*.ts']
    })
  ],
  build: {
    lib: {
      entry: {
        react: "./src/react.ts",
        vue: "./src/vue.ts"
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`
    }
  }
});
