import { redux } from "../../global";

interface Payload {
    type: string
    payload: string
}

const initialState = {
    input: "" as string
};

function searchReducer(state=initialState, action: Payload) {
    const { type, payload } = action;
    if(type === redux.UPDATE_SEARCH_INPUT) {
        return {
            input: payload
        };
    }
    return state;
}

export default searchReducer;