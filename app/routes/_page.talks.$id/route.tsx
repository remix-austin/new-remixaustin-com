import type { Route } from "./+types/route";

export default function Talk({ params }: Route.ComponentProps) {
    return (
        <>
            <title>Remix Austin | Talk</title>
            <h1>{`Talk ${params.id}`}</h1>
        </>
    );
}
