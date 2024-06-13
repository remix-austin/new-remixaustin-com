import type {MetaFunction} from "@remix-run/node"

export const meta: MetaFunction = () => {
    return [
        {title: "Remix Austin Meetup"},
        {name: "description", content: "Welcome to Remix Austin!"},
    ]
}

export default function HomeRoute() {
    return <h1>Home</h1>
}
