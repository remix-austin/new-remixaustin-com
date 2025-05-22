import type { FC } from "react";
import LinkButton from "./LinkButton";
import type { Meetup } from "~/utils/meetup";

type MeetupCardProps = {
    meetup: Meetup;
};

const MeetupCard: FC<MeetupCardProps> = ({ meetup }) => {
    if (!meetup) {
        return (
            <em>The next meetup has not been scheduled yet. Check back soon for more details!</em>
        );
    }

    return (
        <article className="rounded-lg p-8">
            <h3>{meetup.title}</h3>

            <LinkButton target="_blank" to={meetup.eventUrl}>
                View on Meetup
            </LinkButton>
        </article>
    );
};

export default MeetupCard;
