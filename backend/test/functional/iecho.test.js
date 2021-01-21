const request = require('supertest')
const { expect } = require('chai')
const app = require('../../src/app')

describe('GET /iecho', () => {
  it('returned an incorrect request because the parameter was not sent', async () => {
    // Given
    const query = '/iecho'

    // When
    const resp = await request(app)
      .get(query)
      .set('Accept', 'application/json')

    // Then
    expect(resp.status, 'bad request').to.equal(400)
    expect(resp.type, 'content type').to.equal('application/json')
    expect(resp.body.error, 'the text was not sent').to.equal('no text')
  })

  it('returned an incorrect request because empty parameters were sent', async () => {
    // Given
    const query = '/iecho?text='

    // When
    const resp = await request(app)
      .get(query)
      .set('Accept', 'application/json')

    // Then
    expect(resp.status, 'bad request').to.equal(400)
    expect(resp.type, 'content type').to.equal('application/json')
    expect(resp.body.error, 'the text was not sent').to.equal('no text')
  })

  it('returned success request and revert text params', async () => {
    // Given
    const query = '/iecho?text=test'

    // When
    const resp = await request(app)
      .get(query)
      .set('Accept', 'application/json')

    // Then
    expect(resp.status, 'success').to.equal(200)
    expect(resp.type, 'content type').to.equal('application/json')
    expect(resp.body.text, 'the text is reverted').to.equal('tset')
    expect(resp.body.palindrome, 'the text is not palindrome').to.equal(false)
  })

  it('returned success request and inform palindrome text', async () => {
    // Given
    const query = '/iecho?text=anana'

    // When
    const resp = await request(app)
      .get(query)
      .set('Accept', 'application/json')

    // Then
    expect(resp.status, 'success').to.equal(200)
    expect(resp.type, 'content type').to.equal('application/json')
    expect(resp.body.text, 'the text is reverted').to.equal('anana')
    expect(resp.body.palindrome, 'the text is palindrome').to.equal(true)
  })
})
