import type {MetaFunction} from "@remix-run/node"

export const meta: MetaFunction = () => {
    return [
        {title: "Talks"},
        {name: "description", content: "Remix Austin talks."},
    ]
}

export default function TalksRoute() {
    return <h1>Talks</h1>
}
