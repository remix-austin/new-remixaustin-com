import type {MetaFunction} from "@remix-run/node"

export const meta: MetaFunction = () => {
    return [
        {title: "Blog post"},
        {name: "description", content: "Remix Austin blog post."},
    ]
}

export default function BlogPostRoute() {
    return <h1>Blog post</h1>
}
