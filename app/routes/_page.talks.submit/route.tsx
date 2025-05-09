import { Form, redirect } from "react-router";
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

    const submission = await parseFormData(request, schema);
    await context.db.insert(talks).values(submission);
    console.log({ submission });

    return redirect("/");
}

export default function Submit() {
    return (
        <div className="max-w-md">
            <title>Remix Austin | Submit a Talk</title>
            <h1>Submit a Talk</h1>

            <Form method="post">
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        autoComplete="name"
                        id="name"
                        name="name"
                        type="text"
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        autoComplete="email"
                        id="email"
                        name="email"
                        type="email"
                    />
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                        autoComplete="tel"
                        id="phone"
                        name="phone"
                        type="tel"
                    />
                </div>

                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                    />
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                    />
                </div>

                <button type="submit">
                    Submit
                </button>
            </Form>
        </div>
    );
}
