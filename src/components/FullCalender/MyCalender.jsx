import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import EventInfo from "./EventInfo";

export default function MyCalender() {
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Event 1",
            start: "2023-06-20",
        },
        {
            id: 2,
            title: "Event 2",
            start: "2023-06-21",
        },
    ]);
    const handleSelect = (info) => {
        const { start, end } = info;
        const randomId = Math.round(Math.random(100) * 100);
        const eventName = prompt("Enter event name: ");
        if (eventName) {
            setEvents([
                ...events,
                {
                    start,
                    end,
                    title: eventName,
                    id: randomId,
                },
            ]);
        }
    };

    const handleDelete = (eventInfo) => {
        const res = confirm("Do you really want to delete this event?");
        console.log(eventInfo.event.id);
        if (res) {
            const updatedEvent = events.filter(
                (event) => event.id != eventInfo.event.id
            );
            console.log(updatedEvent);
            setEvents(updatedEvent);
            console.log(events);
        }
    };
    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                headerToolbar={{
                    start: "today prev,next",
                    center: "title",
                    end: "dayGridMonth timeGridWeek timeGridDay",
                }}
                editable
                selectable
                select={handleSelect}
                eventContent={(info) => <EventInfo info={info} />}
                eventClick={handleDelete}
            />
        </>
    );
}
