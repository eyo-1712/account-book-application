import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-addon-remix-react-router',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // eslint-disable-next-line no-shadow
  viteFinal: async (config) => {
    if (config.resolve) {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias = {
        ...config.resolve?.alias,
        // 👇 External module
        // lodash: require.resolve('./lodash.mock'),
        // 👇 Internal modules
        shadcn: path.resolve(__dirname, '../src/shared/shadcn'),
        shared: path.resolve(__dirname, '../src/shared'),
        features: path.resolve(__dirname, '../src/features'),
        widgets: path.resolve(__dirname, '../src/widgets'),
        pages: path.resolve(__dirname, '../src/pages'),
      }
    }

    return config
  },
}
export default config
