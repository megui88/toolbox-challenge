export const STORE_TEXT_RESULT = 'STORE_TEXT_RESULT'
export const ADD_TEXT_RESULT = 'ADD_TEXT_RESULT'

const TextResults = (state = [], { type, payload }) => {
  switch (type) {
    case STORE_TEXT_RESULT:
      return payload
    case ADD_TEXT_RESULT:
      return [payload, ...state]
    default:
      return state
  }
}

export default TextResults
