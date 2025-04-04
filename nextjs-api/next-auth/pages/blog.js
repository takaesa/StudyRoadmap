import { getSession } from "next-auth/react"

export default function Blog({ data }) {
    return (
        <div>
            <h1>Blog</h1>
            <p>This is the blog page. - {data}</p>
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blog',
                permanent: false,
            },
        }

    }

    return {
        props: {
            session,
            data: session ? "list of 100 personalized blog posts" : "list of free blog posts",
        }
    }

}