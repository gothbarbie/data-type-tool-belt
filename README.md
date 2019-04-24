# Data Type Tool Belt

## Installation

```terminal
npm i @gothbarbie/data-type-tool-belt
```

## Usage

```javascript
const { isNumber } = require('@gothbarbie/data-type-tool-belt')

// returns true
const result = isNumber('0123456')

// returns false
const result = isNumber('0123 456')
```

## String

### isNumber

- Returns **true** if a string contains only digits.
- Returns **false** if it contains anything else (including spaces).
