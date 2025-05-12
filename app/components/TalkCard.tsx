import type { FC } from "react";
import { Link } from "react-router";
import { formatDate } from "~/utils/date";

type TalkCardProps = {
    // biome-ignore lint/suspicious/noExplicitAny: Fix this later
    talk: any;
};

const TalkCard: FC<TalkCardProps> = ({ talk }) => {
    return (
        <Link target="_blank" to={talk.eventUrl}>
            <article className="rounded-lg border-2 p-8">
                <p>{formatDate(talk.dateTime)}</p>
                <h4 className="mb-6 font-bold text-3xl">{talk.title}</h4>
                <p>{`${talk.rsvps.yesCount} attendees`}</p>
            </article>
        </Link>
    );
};

export default TalkCard;
