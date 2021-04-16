import { combineReducers } from "redux";
import searchReducer from "./searchReducer";

const allReducer = combineReducers({
    searchReducer
});

export default allReducer;