import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { themes } from '@storybook/theming';
import '!style-loader!css-loader!sass-loader!../src/shared/styles/index.scss';
import './main.css';
import { Preview, Decorator } from '@storybook/react';
import {
  ConfigProvider,
  ILibraryConfig,
} from '../src/shared/config/configProvider';
import React from 'react';

const siteMetadata = {
  brandTitle: "Anas's Library",
  brandUrl: 'mailto:roud2@hotmail.com',
};

const defaultConfig: ILibraryConfig = {
  'app-default-color': '#0d1117',
  'app-secondary-color': '#282c34',
  'app-tertiary-color': '#e74c3c',
  'main-text-color': '#ccd6f6',
  'accent-text-color': '#58a6ff',
};

const withCustomConfig: Decorator = (Story) => {
  return (
    <ConfigProvider config={defaultConfig}>
      <Story />
    </ConfigProvider>
  );
};

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      parentSelector: 'html',
      attributeName: 'data-theme',
    }),
    withCustomConfig,
  ],
  parameters: {
    backgrounds: { disable: true },
    controls: {
      expanded: true,
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark: { ...themes.dark, ...siteMetadata },
      light: { ...themes.light, ...siteMetadata },
    },
    options: {
      showPanel: true,
      panelPosition: 'bottom',
      storySort: {
        method: 'alphabetical',
        locales: 'en-US',
        order: [
          'Welcome',
          'Component Status',
          'Design Tokens',
          ['Colors', 'Breakpoints'],
          'Components',
          ['*'],
          'Deprecated',
          ['*'],
        ],
      },
    },
  },
};

export default preview;
