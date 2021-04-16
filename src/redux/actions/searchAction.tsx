import { redux } from "../../global";

const searchActions = {
    updateSearchInput: (input: string) => {
        return {
            type: redux.UPDATE_SEARCH_INPUT,
            payload: input
        };
    }
};

export default searchActions;