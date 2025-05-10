import { Form, redirect } from "react-router";
import { z } from "zod";
import type { Route } from "./+types/route";
import { parseFormData } from "~/utils/forms";
import { zfd } from "zod-form-data";
import { signins } from "~/database/schema";
import { RadioButton } from "~/components/RadioButton";
import { Icon } from "~/components/Icon";
import { Slider } from "~/components/slider";
import { Checkbox } from "~/components/Checkbox";

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
        <div className="max-w-md">
            <title>Remix Austin | Sign In</title>
            <h1>Sign In to Tonight's Meetup</h1>

            {/* TODO: Put current meetup info here */}

            <Form method="post">
                <input
                    autoComplete="organization"
                    id="date"
                    name="date"
                    type="hidden"
                    value={new Date().toISOString()}
                />

                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                autoComplete="given-name"
                                id="firstName"
                                name="firstName"
                                type="text"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                autoComplete="family-name"
                                id="lastName"
                                name="lastName"
                                type="text"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input autoComplete="email" id="email" name="email" type="email" />
                        </div>
                        <div>
                            <label htmlFor="company">Company</label>
                            <input
                                autoComplete="organization"
                                id="company"
                                name="company"
                                type="text"
                            />
                        </div>
                    </div>
                    <fieldset>
                        <legend>How are you attending?</legend>
                        <RadioButton checked name="remote" value="inPerson">
                            <Icon className="size-6 fill-red-600" name="meeting" />
                            In person
                        </RadioButton>
                        <RadioButton name="remote" value="remote">
                            <Icon className="size-6 fill-red-600" name="video-camera" />
                            Remote
                        </RadioButton>
                    </fieldset>
                    <fieldset>
                        <legend>How familiar are you with Remix?</legend>
                        <div>
                            <span>Beginner</span>
                            <Slider
                                defaultValue={[2]}
                                // FIXME: Can't figure out how to pass this through to Radix
                                // list="values"
                                id="familiarity"
                                max={4}
                                min={0}
                                name="familiarity"
                                step={1}
                            />
                            <span>Expert</span>
                            <datalist id="values">
                                <option value={0} />
                                <option value={1} />
                                <option value={2} />
                                <option value={3} />
                                <option value={4} />
                            </datalist>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>How did you hear about the meetup?</legend>
                        <RadioButton name="referrer" value="website">
                            <Icon
                                className="size-6 fill-red-600"
                                name="remix"
                                viewBox="0 0 411 473"
                            />
                            remixaustin.com
                        </RadioButton>
                        <RadioButton name="referrer" value="meetup">
                            <Icon
                                className="size-6 fill-red-600"
                                name="meetup"
                                viewBox="0 0 588 588"
                            />
                            Meetup
                        </RadioButton>
                        <RadioButton name="referrer" value="friend">
                            <Icon className="size-6 fill-red-600" name="friends" />
                            Friend or coworker
                        </RadioButton>
                        <RadioButton name="referrer" value="twitter">
                            <Icon
                                className="size-6 fill-red-600"
                                name="twitter"
                                viewBox="0 0 540 540"
                            />
                            Twitter
                        </RadioButton>
                        {/* TODO: Make an official remix.run or reactrouter.com Bluesky account */}
                        {/* <RadioButton name="referrer" value="bsky">
                            Bluesky
                            </RadioButton> */}
                        <RadioButton name="referrer" value="linkedin">
                            <Icon
                                className="size-6 fill-red-600"
                                name="linkedin"
                                viewBox="0 0 491 494"
                            />
                            LinkedIn
                        </RadioButton>
                        <RadioButton name="referrer" value="search">
                            <Icon className="size-6 fill-red-600" name="search" />
                            Search engine
                        </RadioButton>
                        <RadioButton id="otherReferrer" name="referrer" value="other">
                            <Icon className="size-6 fill-red-600" name="other" />
                            Other
                        </RadioButton>
                    </fieldset>
                    <fieldset className="mb-4">
                        <legend className="mb-2">What do you want to get out of the meetup?</legend>
                        <label className="gap-2" htmlFor="community">
                            <Checkbox name="desires" value="community" />
                            Community
                        </label>
                        <label className="gap-2" htmlFor="remix">
                            <Checkbox name="desires" value="remix" />
                            Remix experience
                        </label>
                        <label className="gap-2" htmlFor="talks">
                            <Checkbox name="desires" value="talks" />
                            Tech talks
                        </label>
                        <label className="gap-2" htmlFor="other">
                            <Checkbox name="desires" value="other" />
                            Other
                        </label>
                    </fieldset>
                </div>

                <button type="submit">Sign In</button>
            </Form>
        </div>
    );
}
