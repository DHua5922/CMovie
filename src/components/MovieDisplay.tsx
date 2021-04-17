import tw from "tailwind-styled-components";

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
        <div className="shadow-md" onClick={onClick}>
            <img src={src} alt="" />
            <Title>{title}</Title>
        </div>
    );
}

export default MovieDisplay;