import { Welcome } from "./welcome";

export function meta() {
    return [{ title: "Remix Austin" }];
}

export default function Home() {
    return <Welcome />;
}
