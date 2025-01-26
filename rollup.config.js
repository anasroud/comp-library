import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import copy from 'rollup-plugin-copy';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
      exports: 'named',
    },
    {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
      sourcemap: true,
      preserveModulesRoot: 'src',
      exports: 'named',
    },
  ],
  plugins: [
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: [
          './src/docs',
          './src/**/*.stories.tsx',
          './src/shared/components/Ad',
        ],
      },
    }),
    postcss({
      extract: true,
      minimize: true,
      modules: true,
      plugins: [require('autoprefixer')],
    }),
    peerDepsExternal(),
    resolve(),
    copy({
      targets: [
        {
          src: [
            'src/shared/styles',
            'src/shared/fonts',
          ],
          dest: 'dist',
        },
      ],
    }),
    del({ targets: ['dist/*'] }),
    json(),
  ],
};
