import { useParams } from "react-router";

export default function Talk() {
    const { id } = useParams();

    return (
        <div className="p-20">
            <title>Remix Austin | Talk</title>
            <h1>{`Talk ${id}`}</h1>
        </div>
    );
}
