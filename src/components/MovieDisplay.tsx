import tw from "tailwind-styled-components";

const Container = tw.div`
    shadow-md
    cursor-pointer
`;

const Title = tw.div`
    text-center
`;

interface Props {
    title: string
    backdrop_path: string
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined
}

function MovieDisplay({ title, backdrop_path, onClick }: Props) {
    return (
        <Container onClick={onClick}>
            <img src={backdrop_path} alt="" />
            <Title>{title}</Title>
        </Container>
    );
}

export default MovieDisplay;