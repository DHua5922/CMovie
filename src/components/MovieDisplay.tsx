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
    src: string
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined
}

function MovieDisplay({ title, src, onClick }: Props) {
    return (
        <Container onClick={onClick}>
            <img src={src} alt="" />
            <Title>{title}</Title>
        </Container>
    );
}

export default MovieDisplay;