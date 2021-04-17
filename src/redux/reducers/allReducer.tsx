import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import popupReducer from "./popupReducer";

const allReducer = combineReducers({
    searchReducer,
    popupReducer
});

export default allReducer;