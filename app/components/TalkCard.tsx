import type { FC } from "react";
import { Link } from "react-router";
import { formatDate } from "~/utils/date";
import type { Meetup } from "~/utils/meetup";

type TalkCardProps = {
    talk: Meetup;
};

const TalkCard: FC<TalkCardProps> = ({ talk }) => {
    return (
        <Link target="_blank" to={talk.eventUrl}>
            <article className="grid grid-cols-[auto_1fr] gap-x-8 rounded-lg border-2 p-8">
                <img
                    alt={talk.title}
                    className="h-64 w-full border-2 object-cover"
                    src="https://i.ytimg.com/vi/kMa4zmvlHFI/maxresdefault.jpg"
                />

                <div>
                    <p>{formatDate(talk.dateTime)}</p>
                    <h4 className="mb-6 font-bold text-3xl">{talk.title}</h4>
                    <p>{`${talk.rsvps.yesCount} attendees`}</p>
                </div>
            </article>
        </Link>
    );
};

export default TalkCard;
