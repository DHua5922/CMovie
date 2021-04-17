import { Modal } from "react-bootstrap";
import Movie from "../types/Movie";

interface Props {
    show: boolean
    onHide: Function
    movieInfo: Movie
}

function MovieInfoPopup({ show, onHide, movieInfo }: Props) {
    const { title, backdrop_path, overview } = movieInfo;
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={backdrop_path} alt="" />
                <div className="mt-3">{overview}</div>
            </Modal.Body>
        </Modal>
    );
}

export default MovieInfoPopup;