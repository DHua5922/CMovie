import { Form, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import searchActions from "../redux/actions/searchAction";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function useOnSearchSubmit() {
    const history = useHistory();
    const { input } = useSelector((state: any) => state.searchReducer);

    return (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();
        history.push(`/search?query=${input}`);
    }
}

function SearchBar() {
    const dispatch = useDispatch();
    const { input } = useSelector((state: any) => state.searchReducer);

    return (
        <Form onSubmit={useOnSearchSubmit()}>
            <FormControl 
                placeholder="Search movies..." 
                onChange={(evt) => dispatch(searchActions.updateSearchInput(evt.target.value))}
                value={input}
            />
        </Form>
    );
}

export default SearchBar;