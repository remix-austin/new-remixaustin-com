import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { resources } from "./resources";

export default function Home() {
    return (
        <>
            <title>Remix Austin</title>

            <main className="flex items-center justify-center pt-16 pb-4">
                <div className="flex min-h-0 flex-1 flex-col items-center gap-16">
                    <header className="flex flex-col items-center gap-9">
                        <div className="w-[500px] max-w-[100vw] p-4">
                            <img
                                alt="React Router"
                                className="block w-full dark:hidden"
                                src={logoLight}
                            />

                            <img
                                alt="React Router"
                                className="hidden w-full dark:block"
                                src={logoDark}
                            />
                        </div>
                    </header>

                    <div className="w-full max-w-[300px] space-y-6 px-4">
                        <nav className="space-y-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
                            <p className="text-center text-gray-700 leading-6 dark:text-gray-200">
                                What&apos;s next?
                            </p>

                            <ul>
                                {resources.map(({ href, text, icon }) => (
                                    <li key={href}>
                                        <a
                                            className="group flex items-center gap-3 self-stretch p-3 text-blue-700 leading-normal hover:underline dark:text-blue-500"
                                            href={href}
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            {icon}
                                            {text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </main>
        </>
    );
}
