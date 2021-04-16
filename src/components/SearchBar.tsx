import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import searchActions from "../redux/actions/searchAction";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import tw from "tailwind-styled-components";

const Field = tw.input`
    focus:border-0
    w-full
    focus:outline-none
    shadow-md
    rounded-3xl
    px-4
    py-2
`;

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
            <Field 
                placeholder="Search movies..." 
                onChange={(evt: { target: { value: string; }; }) => dispatch(searchActions.updateSearchInput(evt.target.value))}
                value={input}
            />
        </Form>
    );
}

export default SearchBar;