const assert = require('assert')
const stringReverse = require('../../src/utils')

describe('Utils', () => {
  it('return string reverse', () => {
    // Given
    const text = 'string'
    const except = 'gnirts'

    // When
    const result = stringReverse(text)

    // Then
    assert(result === except, 'the string is reverted')
  })
})
