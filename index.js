var minimist = require('minimist'),
    argv     = minimist(process.argv.slice(2))

module.exports = function() {

  if(argv._.indexOf('w') > -1 || argv._.indexOf('watch') > -1 || argv._.indexOf('watchify') > -1) {
    return true
  }

  return false

}
