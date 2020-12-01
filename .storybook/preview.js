import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

const theme = {
  fullscreen: {
    opacity: '0.5',
    overlayColor: {
      r: 0,
      g: 204,
      b: 204,
    },
  },
}
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
