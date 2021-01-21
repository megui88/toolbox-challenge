import {GET_TEXT_REVERT} from "../sagas/IEcho";

export const getTextRevert = (text) => {
    return {
        type: GET_TEXT_REVERT,
        payload: {text},
    }
};
