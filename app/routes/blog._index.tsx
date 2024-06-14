import type {MetaFunction} from "@remix-run/node"

export const meta: MetaFunction = () => {
    return [
        {title: "Blog"},
        {name: "description", content: "Remix Austin blog posts."},
    ]
}

export default function BlogRoute() {
    return <h1>Blog</h1>
}
