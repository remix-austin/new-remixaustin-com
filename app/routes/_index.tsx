import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
    return [
        { title: 'Remix Austin Meetup' },
        { name: 'description', content: 'Welcome to Remix Austin Meetup' }
    ];
};

export default function Index() {
    return (
        <>
            {/* Classes added to test prefers-color-scheme */}
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Hello world!
            </h1>

            <Link
                to="/"
                // Classes added to test prefers-color-scheme
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <h5
                    // Classes added to test prefers-color-scheme
                    className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                    Noteworthy technology acquisitions 2021
                </h5>
                <p
                    // Classes added to test prefers-color-scheme
                    className="font-normal text-gray-700 dark:text-gray-400"
                >
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                </p>
            </Link>
        </>
    );
}
