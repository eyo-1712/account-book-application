import type { Preview } from '@storybook/react'
import '../src/index.css'
import { BrowserRouterDecorator } from './decorator/router'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export const decorators = [BrowserRouterDecorator]

export default preview
