import { Client, gql, cacheExchange, fetchExchange } from "@urql/core";

type Meetup = {
    id: string;
    title: string;
    description: string;
    eventUrl: string;
    dateTime: string;
    rsvps: {
        yesCount: number;
    };
};

const client = new Client({
    url: "https://api.meetup.com/gql-ext",
    exchanges: [cacheExchange, fetchExchange],
});

const MeetupQuery = gql`
    query ($urlname: String!) {
        groupByUrlname(urlname: $urlname) {
            id
            name
            nextMeetup: events(status:ACTIVE, sort:DESC, first:1) {
                totalCount
                edges {
                    node {
                        id
                        title
                        description
                        eventUrl
                        dateTime
                        rsvps {
                            yesCount
                        }
                    }
                }
            }
            previousTalks: events(status:PAST, sort:DESC, first:5) {
                totalCount
                edges {
                    node {
                        id
                        title
                        eventUrl
                        dateTime
                        rsvps {
                            yesCount
                        }
                    }
                }
            }
        }
    }`;

const getEvents = async () => {
    const response = await client.query(MeetupQuery, { urlname: "remix-austin" }).toPromise();

    const nextMeetup: Meetup = response.data.groupByUrlname.nextMeetup.edges[0]?.node;

    const previousTalks: Meetup[] = response.data.groupByUrlname.previousTalks.edges.map(
        (edge: { node: Meetup }) => ({
            id: edge.node.id,
            title: edge.node.title,
            eventUrl: edge.node.eventUrl,
            dateTime: edge.node.dateTime,
            rsvps: {
                yesCount: edge.node.rsvps.yesCount,
            },
        }),
    );

    const events = {
        nextMeetup,
        previousTalks,
    };

    return events;
};

export { getEvents };
export type { Meetup };
