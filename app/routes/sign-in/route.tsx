import { Form } from "react-router";

export function meta() {
    return [{ title: "Remix Austin | Sign In" }];
}

export default function SignIn() {
    return (
        <>
            <h1 className="mb-8 font-bold text-2xl">Sign in to tonight's meetup</h1>

            <Form className="grid max-w-md" method="post">
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
                        <input id="inPerson" name="attendance" type="radio" value="inPerson" />
                        <label htmlFor="inPerson">In person</label>
                    </div>

                    <div className="flex gap-x-2">
                        <input id="remote" name="attendance" type="radio" value="remote" />
                        <label htmlFor="remote">Remote</label>
                    </div>
                </fieldset>

                <fieldset className="mb-4">
                    <legend className="mb-2">How familiar are you with Remix?</legend>

                    <div className="flex gap-x-2">
                        <input id="new" name="familiarity" type="radio" value="new" />
                        <label htmlFor="new">New to me</label>
                    </div>

                    <div className="flex gap-x-2">
                        <input id="heard" name="familiarity" type="radio" value="heard" />
                        <label htmlFor="heard">Heard of it</label>
                    </div>

                    <div className="flex gap-x-2">
                        <input id="some" name="familiarity" type="radio" value="some" />
                        <label htmlFor="some">Some experience</label>
                    </div>

                    <div className="flex gap-x-2">
                        <input id="proficient" name="familiarity" type="radio" value="proficient" />
                        <label htmlFor="proficient">Very proficient</label>
                    </div>
                </fieldset>

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
                        <input id="other" name="referrer" type="radio" value="other" />
                        <label htmlFor="other">Other</label>
                    </div>
                </fieldset>

                <fieldset className="mb-4">
                    <legend className="mb-2">What do you want to get out of the meetup?</legend>

                    <div className="flex gap-x-2">
                        <input id="community" name="referrer" type="checkbox" value={0} />
                        <label htmlFor="community">Community</label>
                    </div>

                    <div className="flex gap-x-2">
                        <input id="remix" name="referrer" type="checkbox" value={1} />
                        <label htmlFor="remix">Remix experience</label>
                    </div>

                    <div className="flex gap-x-2">
                        <input id="talks" name="referrer" type="checkbox" value={2} />
                        <label htmlFor="talks">Tech talks</label>
                    </div>

                    <div className="flex gap-x-2">
                        <input id="other" name="referrer" type="checkbox" value={3} />
                        <label htmlFor="other">Other</label>
                    </div>
                </fieldset>

                <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white" type="submit">
                    Submit
                </button>
            </Form>
        </>
    );
}
