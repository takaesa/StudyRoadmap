import { useState } from "react"
import { useRouter } from "next/router"

function EventList({ eventList }) {
    const [events, setEvents] = useState(eventList)
    const router = useRouter()

    const fetchSportsEvents = async () => {
        const response = await fetch('http://localhost:4000/events?category=sports')
        const data = await response.json()
        setEvents(data)
        router.push('/events?category=sports', undefined, { shallow: true })
    }
    return (
        <div>
            <button onClick={fetchSportsEvents}>Sport Events</button>
            <h1>Event List</h1>
            {events.map(event => (
                <div key={event.id}>
                    <h2>{event.id} {event.title} {event.date} | {event.category}</h2>
                    <p>{event.description}</p>
                </div>
            ))}
        </div>
    )
}

export default EventList

export async function getServerSideProps(context) {
    const { query } = context
    const { category } = query
    const queryString = category ? 'category=sports' : ''
    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json()

    return {
        props: {
            eventList: data
        }
    }
}