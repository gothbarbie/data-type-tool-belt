const StringUtils = require('../String')

describe('String', () => {
  describe('isNumber', () => {
    it('returns true if string contains only numbers', () => {
      const string = '0123456789'
      expect(StringUtils.isNumber(string)).toEqual(true)
    })

    it('returns false if string contains anything but numbers', () => {
      const string = '0123456 789'
      expect(StringUtils.isNumber(string)).toEqual(false)
    })
  })
})
