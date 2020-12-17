// The build file, having web-ext run in the background and calling nodemon build.js on this file allows for hot reloading.
// Note: is bug where need to save twice for the hotreloading to work...
const rewire = require('rewire')

const defaults = rewire('react-scripts/scripts/build.js')
// eslint-disable-next-line no-underscore-dangle
const config = defaults.__get__('config')

const fs = require('fs')

// Consolidate chunk files instead
config.optimization.splitChunks = {
  cacheGroups: {
    default: false
  }
}
// Move runtime into bundle instead of separate file
config.optimization.runtimeChunk = false

// JS
config.output.filename = 'content-script.js'

// Move the content script file from the build folder into the public folder, since that is where our manifest.json will be
// and where web-ext will run in so we don't need to recall build on filechanges.
const oldPath = 'build/content-script.js'
const newPath = 'public/content-script.js'

fs.rename(oldPath, newPath, () => console.log('successfully updated content script file.'))
