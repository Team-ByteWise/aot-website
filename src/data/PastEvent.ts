import pastEvents from "../assets/data/past_events.json";

export interface PastEvent {
    title: string;
    date: string;
    image: string;
    link: string;
}

const pastEventsArray: PastEvent[] = pastEvents;
export default pastEventsArray;