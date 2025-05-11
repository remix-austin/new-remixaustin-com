import { Client, gql, cacheExchange, fetchExchange } from "@urql/core";

const client = new Client({
    url: "https://api.meetup.com/gql-ext",
    exchanges: [cacheExchange, fetchExchange],
});

const MeetupQuery = gql`
    query ($urlname: String!) {
        groupByUrlname(urlname: $urlname) {
            id
            name
            currentEvent:events(status:ACTIVE, sort:DESC, first:1) {
                totalCount
                edges {
                    node {
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
            pastEvents:events(status:PAST, sort:DESC, first:5) {
                totalCount
                edges {
                    node {
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
    const events = response.data.groupByUrlname;
    return events;
};

export { getEvents };
