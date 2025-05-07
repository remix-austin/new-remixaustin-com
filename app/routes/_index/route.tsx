import LinkButton from "~/components/LinkButton";
import logo from "~/icons/logo.svg";

export default function Home() {
    return (
        <>
            <title>Remix Austin</title>

            <header className="grid w-full place-items-center gap-10 bg-(--color-header-bg) p-48">
                <img alt="Remix Austin" src={logo} />

                <p className="max-w-xl text-center text-white text-xl">
                    Join us to connect with developers, share knowledge, and explore the power of
                    the Remix framework. Whether you're a seasoned pro or just getting started,
                    there's something here for everyone.
                </p>

                <div className="flex gap-4">
                    <LinkButton target="_blank" to="https://discord.gg/rZpbp3mQqd">
                        Discord
                    </LinkButton>

                    <LinkButton target="_blank" to="https://github.com/remix-austin">
                        GitHub
                    </LinkButton>

                    <LinkButton to="/signin">Sign In</LinkButton>
                    <LinkButton to="/talks/submit">Give Talk</LinkButton>
                </div>
            </header>

            <main className="grid gap-36 px-20 py-20">
                <section>
                    <h2 className="font-bold text-5xl text-black" id="next-meetup">
                        Next Meetup
                    </h2>

                    <p>todo</p>
                </section>

                <section>
                    <h2 className="font-bold text-5xl text-black" id="previous-talks">
                        Previous Talks
                    </h2>

                    <p>todo</p>
                </section>
            </main>
        </>
    );
}
