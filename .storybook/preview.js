import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { themes } from '@storybook/theming';
import '!style-loader!css-loader!sass-loader!../src/shared/styles/index.scss';
import './main.css';

const siteMetadata = {
  brandTitle: "Anas's Library",
  brandUrl: 'mailto:roud2@hotmail.com',
};

const preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      // applies attributeName on the story iframe html
      parentSelector: 'html',
      attributeName: 'data-theme',
    }),
  ],
  parameters: {
    backgrounds: { disable: true },
    controls: {
      expanded: true,
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
        order: ['*'],
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
