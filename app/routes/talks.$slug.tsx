import type {MetaFunction} from "@remix-run/node"

export const meta: MetaFunction = () => {
    return [
        {title: "Talk"},
        {name: "description", content: "Remix Austin talk."},
    ]
}

export default function TalkRoute() {
    return <h1>Talk</h1>
}
