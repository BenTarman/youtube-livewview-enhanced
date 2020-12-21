import React from 'react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

const theme = {
  fullscreen: {
    opacity: 0.2,
    overlayColor: '#e2e2e2',
    chatMessageSpacing: '10px',
    containerColor: 'purple',
    chatMessage: {
      fontSize: '16px',
      containerColor: '#abd6ce',
      opacity: 1.0,
      padding: '5px 10px',
      borderRadius: '5px',
      authorName: {
        fontWeight: 800,
        color: 'lightgrey'
      }
    }
  }
}

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

Theme.propTypes = {
  children: PropTypes.node.isRequired
}

export default Theme
