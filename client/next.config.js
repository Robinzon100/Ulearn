const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  poweredByHeader: false,
  env: {
    BACK_END_URL: "http://localhost:5000",
    FRONT_END_URL: "http://localhost:3000"
  },
}