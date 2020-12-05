import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import store from '../src/store'

const theme = {
  fullscreen: {
    opacity: '0.3',
    overlayColor: '#e2e2e2',
    chatMessage: {
      fontSize: '16px',
      containerColor: '#abd6ce',
      opacity: 0.5,
      padding: '5px 10px',
      borderRadius: '5px',
      authorName: {
        fontWeight: 800,
        color: 'blue'
      }
    }
  }
}
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}
