import { Form } from "react-router";
import type { Route } from "./+types/route";
import { z } from "zod";

export function meta() {
    return [{ title: "Remix Austin | Submit a talk" }];
}

export async function action({ request }: Route.ActionArgs) {
    const schema = z.object({
        name: z.string(),
        email: z.string().email(),
        phone: z.string(),
        title: z.string(),
        description: z.string(),
    });

    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    const submission = schema.safeParse(data);

    console.log(submission);
    return {submission}
}

export default function Submit() {
    return (
        <>
            <h1 className="mb-8 font-bold text-2xl">Submit a talk</h1>

            <Form className="grid max-w-md" method="post">
                <label htmlFor="name">Name</label>
                <input
                    className="mb-4 rounded border border-black px-4 py-2"
                    id="name"
                    name="name"
                    type="text"
                />

                <label htmlFor="email">Email</label>
                <input
                    className="mb-4 rounded border border-black px-4 py-2"
                    id="email"
                    name="email"
                    type="email"
                />

                <label htmlFor="phone">Phone</label>
                <input
                    className="mb-4 rounded border border-black px-4 py-2"
                    id="phone"
                    name="phone"
                    type="tel"
                />

                <label htmlFor="title">Title</label>
                <input
                    className="mb-4 rounded border border-black px-4 py-2"
                    id="title"
                    name="title"
                    type="text"
                />

                <label htmlFor="description">Description</label>
                <textarea
                    className="mb-4 rounded border border-black px-4 py-2"
                    id="description"
                    name="description"
                />

                <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white" type="submit">
                    Submit
                </button>
            </Form>
        </>
    );
}
