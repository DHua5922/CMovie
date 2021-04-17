import { redux } from "../../global";
import Movie from "../../types/Movie";

interface Payload {
    type: string
    payload: boolean | Movie
}

const initialState = {
    show: false as boolean,
    movieInfo: {
        title: "" as string,
        backdrop_path: "" as string,
        overview: "" as string
    } as Movie
};

function popupReducer(state=initialState, action: Payload) {
    const { type } = action;
    if(type === redux.CLOSE_POPUP) {
        return {
            show: false,
            movieInfo: state.movieInfo
        };
    }
    else if(type === redux.OPEN_POPUP) {
        return {
            show: true,
            movieInfo: action.payload
        };
    }
    return state;
}

export default popupReducer;