import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import fs from 'node:fs'
import path from 'node:path'
import pkg from './package.json'

const __dirname = path.resolve()
const files = fs.readdirSync(`${__dirname}/src`)

const entry = files.map(file => ({
  [file.replace('.ts', '')]: `./src/${file}/${file}.ts`
})).reduce((acc, cur) => ({ ...acc, ...cur }), {})

const exports = Object.keys(entry).reduce((acc, cur) => ({
  ...acc, [`./${cur}`]: {
    types: `./dist/${cur}.d.ts`,
    import: `./dist/${cur}.js`
  }
}), {})

fs.writeFileSync(`${__dirname}/package.json`, JSON.stringify({
  ...pkg,
  exports
}, null, 2))

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: false,
      include: ['src/**/*.ts'],
      exclude: ['**/*.stories.ts'],
    })
  ],
  build: {
    lib: {
      entry,
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`
    }
  }
});