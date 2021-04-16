import { Form, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import searchActions from "../redux/actions/searchAction";
import { useSelector } from "react-redux";

function SearchBar({ onSubmit }: any) {
    const dispatch = useDispatch();
    const { input } = useSelector((state: any) => state.searchReducer);

    return (
        <Form onSubmit={onSubmit}>
            <FormControl 
                placeholder="Search movies..." 
                onChange={(evt) => dispatch(searchActions.updateSearchInput(evt.target.value))}
                value={input}
            />
        </Form>
    );
}

export default SearchBar;