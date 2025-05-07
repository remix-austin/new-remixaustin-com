import { Form } from "react-router";
import { z } from "zod";
import { parseFormData } from "~/utils/forms";
import type { Route } from "./+types/route";
import { talks } from "~/database/schema";
import { zfd } from "zod-form-data";

export async function action({ request, context }: Route.ActionArgs) {
    const schema = zfd.formData({
        name: z.string(),
        email: z.string().email(),
        phone: z.string(),
        title: z.string(),
        description: z.string(),
    });

    const formData = await parseFormData(request, schema);
    const submission = await context.db.insert(talks).values(formData);

    return { submission };
}

export default function Submit() {
    return (
        <div className="p-20">
            <title>Remix Austin | Submit a talk</title>
            <h1 className="mb-8 font-bold text-2xl">Submit a talk</h1>

            <Form className="grid max-w-md" method="post">
                <label htmlFor="name">Name</label>
                <input
                    autoComplete="name"
                    className="mb-4 rounded border border-black px-4 py-2"
                    id="name"
                    name="name"
                    type="text"
                />

                <label htmlFor="email">Email</label>
                <input
                    autoComplete="email"
                    className="mb-4 rounded border border-black px-4 py-2"
                    id="email"
                    name="email"
                    type="email"
                />

                <label htmlFor="phone">Phone</label>
                <input
                    autoComplete="tel"
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
        </div>
    );
}
