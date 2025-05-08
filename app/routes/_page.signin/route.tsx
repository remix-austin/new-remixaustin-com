import { Form, redirect } from "react-router";
import { z } from "zod";
import type { Route } from "./+types/route";
import { parseFormData } from "~/utils/forms";
import { zfd } from "zod-form-data";
import { signins } from "~/database/schema";

export async function action({ request, context }: Route.ActionArgs) {
    const schema = zfd.formData({
        date: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        email: z.string().email(),
        company: z.string(),
        remote: z.enum(["inPerson", "remote"]).transform(value => value === "remote"),
        familiarity: zfd.numeric(z.number().min(0).max(4)),
        referrer: z.enum(["website", "meetup", "friend", "twitter", "linkedin", "search", "other"]),
        desires: zfd.repeatableOfType(z.enum(["community", "remix", "talks", "other"])),
    });

    const signin = await parseFormData(request, schema);
    await context.db.insert(signins).values(signin);
    console.log({ signin });

    return redirect("/");
}

export default function SignIn() {
    return (
        <>
            <title>Remix Austin | Sign In</title>
            <h1 className="mb-8 font-bold text-2xl">Sign in to tonight's meetup</h1>

            <Form className="grid max-w-md" method="post">
                <input
                    autoComplete="organization"
                    className="mb-4 rounded border border-black px-4 py-2"
                    id="date"
                    name="date"
                    type="hidden"
                    value={new Date().toISOString()}
                />

                <label htmlFor="firstName">First Name</label>
                <input
                    autoComplete="given-name"
                    className="mb-4 rounded border border-black px-4 py-2"
                    id="firstName"
                    name="firstName"
                    type="text"
                />

                <label htmlFor="lastName">Last Name</label>
                <input
                    autoComplete="family-name"
                    className="mb-4 rounded border border-black px-4 py-2"
                    id="lastName"
                    name="lastName"
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

                <label htmlFor="company">Company</label>
                <input
                    autoComplete="organization"
                    className="mb-4 rounded border border-black px-4 py-2"
                    id="company"
                    name="company"
                    type="text"
                />

                <fieldset className="mb-4">
                    <legend className="mb-2">How are you attending?</legend>

                    <div className="flex gap-x-2">
                        <input id="inPerson" name="remote" type="radio" value="inPerson" />
                        <label htmlFor="inPerson">In person</label>
                    </div>

                    <div className="flex gap-x-2">
                        <input id="remote" name="remote" type="radio" value="remote" />
                        <label htmlFor="remote">Remote</label>
                    </div>
                </fieldset>

                <label className="mb-2" htmlFor="familiarity">
                    How familiar are you with Remix?
                </label>

                <div className="mb-4 flex gap-x-4">
                    <span>Beginner</span>

                    <input list="values" max={4} min={0} name="familiarity" step={1} type="range" />

                    <span>Expert</span>

                    <datalist id="values">
                        <option value={0} />
                        <option value={1} />
                        <option value={2} />
                        <option value={3} />
                        <option value={4} />
                    </datalist>
                </div>

                <fieldset className="mb-4">
                    <legend className="mb-2">How did you hear about the meetup?</legend>

                    <div className="flex gap-x-2">
                        <input id="website" name="referrer" type="radio" value="website" />
                        <label htmlFor="website">remixaustin.com</label>
                    </div>

                    <div className="flex gap-x-2">
                        <input id="meetup" name="referrer" type="radio" value="meetup" />
                        <label htmlFor="meetup">Meetup</label>
                    </div>

                    <div className="flex gap-x-2">
                        <input id="friend" name="referrer" type="radio" value="friend" />
                        <label htmlFor="friend">Friend or coworker</label>
                    </div>

                    <div className="flex gap-x-2">
                        <input id="twitter" name="referrer" type="radio" value="twitter" />
                        <label htmlFor="twitter">Twitter</label>
                    </div>

                    <div className="flex gap-x-2">
                        <input id="linkedin" name="referrer" type="radio" value="linkedin" />
                        <label htmlFor="linkedin">LinkedIn</label>
                    </div>

                    <div className="flex gap-x-2">
                        <input id="search" name="referrer" type="radio" value="search" />
                        <label htmlFor="search">Search engine</label>
                    </div>

                    <div className="flex gap-x-2">
                        <input id="otherReferrer" name="referrer" type="radio" value="other" />
                        <label htmlFor="otherReferrer">Other</label>
                    </div>
                </fieldset>

                <fieldset className="mb-4">
                    <legend className="mb-2">What do you want to get out of the meetup?</legend>

                    <div className="flex gap-x-2">
                        <input id="community" name="desires" type="checkbox" value="community" />
                        <label htmlFor="community">Community</label>
                    </div>

                    <div className="flex gap-x-2">
                        <input id="remix" name="desires" type="checkbox" value="remix" />
                        <label htmlFor="remix">Remix experience</label>
                    </div>

                    <div className="flex gap-x-2">
                        <input id="talks" name="desires" type="checkbox" value="talks" />
                        <label htmlFor="talks">Tech talks</label>
                    </div>

                    <div className="flex gap-x-2">
                        <input id="otherDesires" name="desires" type="checkbox" value="other" />
                        <label htmlFor="otherDesires">Other</label>
                    </div>
                </fieldset>

                <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white" type="submit">
                    Submit
                </button>
            </Form>
        </>
    );
}
