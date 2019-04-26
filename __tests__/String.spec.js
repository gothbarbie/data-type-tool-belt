const StringUtils = require('../String')

describe('String', () => {
  describe('lTrim', () => {
    it('returns left-trimmed string', () => {
      const string = ' something '
      const expected = 'something '
      expect(StringUtils.lTrim(string)).toEqual(expected)
    })
  })

  describe('rTrim', () => {
    it('returns right-trimmed string', () => {
      const string = ' something '
      const expected = ' something'
      expect(StringUtils.rTrim(string)).toEqual(expected)
    })
  })

  describe('trimBoth', () => {
    it('returns both left and right-trimmed string', () => {
      const string = ' test@ mail.com '
      const expected = 'test@ mail.com'

      expect(StringUtils.trimBoth(string)).toEqual(expected)
    })
  })

  describe('removeAccents', () => {
    it('returns string without accents', () => {
      const string = 'éàúü'
      const expected = 'eauu'

      expect(StringUtils.removeAccents(string)).toEqual(expected)
    })
  })

  describe('removeNonWordChars', () => {
    it('returns string without non-word characters', () => {
      const string = 'n@&o€t-a#-/l\\ot '
      const expected = 'not-a-lot '

      expect(StringUtils.removeNonWordChars(string)).toEqual(expected)
    })
  })

  describe('toCamelCase', () => {
    it('returns string as camelCase', () => {
      const string = 'thing named by my-self'
      const expected = 'thingNamedByMySelf'

      expect(StringUtils.toCamelCase(string)).toEqual(expected)
    })
  })

  describe('unCamelCase', () => {
    it('returns string as camelCase', () => {
      const string = 'thingNamedByMySelf'
      const expected = 'thing named by my self'

      expect(StringUtils.unCamelCase(string)).toEqual(expected)
    })
  })

  describe('toSlug', () => {
    it('returns string as slug', () => {
      const string = 'a thing I did one day'
      const expected = 'a-thing-i-did-one-day'

      expect(StringUtils.toSlug(string)).toEqual(expected)
    })
  })

  describe('camelCaseToHyphens', () => {
    it('returns string as hyphenated', () => {
      const string = 'thisOneThing'
      const expected = 'this-one-thing'

      expect(StringUtils.camelCaseToHyphens(string)).toEqual(expected)
    })
  })

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
