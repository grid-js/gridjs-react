import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser'
import size from 'rollup-plugin-sizes'
import resolve from '@rollup/plugin-node-resolve';
const lib = 'gridjs';

const path = (env, postfix) => `dist/${lib}.${env}${postfix ? '.' + postfix : ''}.js`;

export default [
  {
    input: 'index.ts',
    output: [
      { file: path('development'), name: lib, format: 'umd', sourcemap: true },
      { file: path('development', 'es'), format: 'es', sourcemap: true },
    ],
    plugins: [
      resolve(),
      typescript({
        tsconfig: "tsconfig.json",
        tsconfigOverride: {
          compilerOptions : {
            module: "es2015"
          }
        }
      })
    ],
    external: ['react', 'react-dom', 'gridjs']
  },
  {
    input: 'index.ts',
    output: [
      { file: path('production', 'min'), name: lib, format: 'umd', sourcemap: true },
      { file: path('production', 'es.min'), format: 'es', sourcemap: true },
    ],
    plugins: [
      resolve(),
      typescript({
        tsconfig: "tsconfig.release.json",
        tsconfigOverride: {
          compilerOptions: {
            module: "es2015",
            declaration: false
          }
        }
      }),
      terser(),
      size({
        writeFile: false,
      }),
    ],
    external: ['react', 'react-dom', 'gridjs']
  },
]
