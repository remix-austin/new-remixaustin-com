import type {MetaFunction} from "@remix-run/node"

export const meta: MetaFunction = () => {
    return [
        {title: "Welcome"},
        {name: "description", content: "Remix Austin welcome form."},
    ]
}

export default function WelcomeRoute() {
    return <h1>Welcome</h1>
}
