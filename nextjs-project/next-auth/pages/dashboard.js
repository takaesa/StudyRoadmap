import { getSession, signIn } from "next-auth/client"
import { useState, useEffect } from "react"


export default function Dashboard() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const securePage = async () => {
            const session = await getSession()
            if (!session) {
                signIn();
            } else {
                setLoading(false)
            }
        }
        securePage()

    }, [])

    if (loading) {
        return <div className={`${!session ? 'opacity-0' : 'opacity-100'} `}>Loading...</div>
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>This is the dashboard page.</p>
        </div>
    )
}