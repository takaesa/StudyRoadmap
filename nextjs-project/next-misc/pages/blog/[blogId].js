import Head from "next/head"

function Blog({ title, description }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}></meta>
            </Head>
            <h1 className="content">Article
                Env User: {process.env.DB_USER} <br />
                Password: {process.env.DB_PASSWORD} <br />
            </h1>
        </>
    )
}


export default Blog

export async function getServerSideProps() {
    const user = process.env.DB_USER
    const password = process.env.DB_PASSWORD

    console.log(`User: ${user}, Password: ${password}`)

    return {
        props: {
            title: "Article Title",
            description: "Article Description",
        },
    };
}