import { call, put, takeLatest } from 'redux-saga/effects'
import { ADD_TEXT_RESULT } from '../store/textResults'

export const GET_TEXT_REVERT = 'GET_TEXT_REVERT'

const IECHO_URL = 'http://0.0.0.0:8081'
const IECHO_PATH = '/iecho'

function * getTextRevert ({ payload: { text } }) {
  try {
    const payload = yield call(requestIEcho, text)
    yield put({ type: ADD_TEXT_RESULT, payload })
  } catch (error) {
    console.log(error)
  }
}
async function requestIEcho (text) {
  const options = {
    method: 'GET',
    Accept: 'appplication/json'
  }

  const response = await fetch(`${IECHO_URL}${IECHO_PATH}?text=${text}`, options)
  if (response.status === 400) {
    throw new Error('Bad Request!')
  }
  const json = await response.json()
  return json
}

export function * getText () {
  yield takeLatest(GET_TEXT_REVERT, getTextRevert)
}
