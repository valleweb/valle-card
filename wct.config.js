module.exports = {
  verbose: true,
  plugins: {
    local: {
      browsers: ['chrome', 'firefox'],
      browserOptions: {
        chrome: [
          'headless'
        ],
        firefox: [
          '--headless'
        ]
      }
    }
  }
}
