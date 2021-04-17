import { Modal } from "react-bootstrap";
import Movie from "../types/Movie";

interface Props {
    show: boolean
    onHide: Function
    movieInfo: Movie
    hasImage: boolean
}

function MovieInfoPopup({ show, onHide, movieInfo, hasImage }: Props) {
    const { title, backdrop_path, overview } = movieInfo;
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img
                    className={hasImage ? "pb-3" : "pb-0" } 
                    src={backdrop_path} 
                    alt="" 
                />
                <div>{overview}</div>
            </Modal.Body>
        </Modal>
    );
}

export default MovieInfoPopup;