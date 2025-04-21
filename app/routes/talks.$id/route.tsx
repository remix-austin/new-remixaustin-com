import { useParams } from "react-router";

export function meta() {
    return [{ title: "Remix Austin | Talk" }];
}

export default function Talk() {
    const { id } = useParams();
    return <h1>{`Talk ${id}`}</h1>;
}
