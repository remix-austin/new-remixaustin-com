import type {LinksFunction} from "@remix-run/node"
import {Links, Meta, Outlet, Scripts, ScrollRestoration} from "@remix-run/react"

import stylesheet from "~/tailwind.css?url"

export const links: LinksFunction = () => [
    {rel: "stylesheet", href: stylesheet},
]

export function Layout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            {/* Classes added to test prefers-color-scheme */}
            <body className="bg-white dark:bg-gray-900">
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default function App() {
    return <Outlet />
}
