import { redux } from "../../global";
import Movie from "../../types/Movie";

const popupActions = {
    openPopup: (movie: Movie) => {
        return {
            type: redux.OPEN_POPUP,
            payload: movie
        };
    },
    closePopup: () => {
        return {
            type: redux.CLOSE_POPUP
        }
    }
};

export default popupActions;