const isNumber = function(string) {
  return /^\d+$/.test(string)
}

module.exports = { isNumber }
