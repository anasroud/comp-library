/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  core: {
    builder: 'webpack5',
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  addons: [
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        postCss: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    'storybook-dark-mode',
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: {
                localIdentName: 'COMPLIB-[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
      },
    );
    config.optimization.sideEffects = false;
    config.plugins = config.plugins.map((plugin) => {
      if (plugin.constructor.name === 'IgnorePlugin') {
        return new webpack.IgnorePlugin({
          resourceRegExp: plugin.options.resourceRegExp,
          contextRegExp: plugin.options.contextRegExp,
        });
      }
      return plugin;
    });

    return config;
  },
};
