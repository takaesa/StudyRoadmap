import Link from "next/link";

function PostList({ posts }) {

    return (
        <div>
            <h1>List of Posts</h1>
            {
                posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <Link href={`posts/${post.id}`} passHref></Link>
                            <h2>{post.id} {post.title}</h2>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default PostList;

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const paths = data.map((post) => {
        return {
            params: `${post.id}`
        }
    })

    return {
        // [
        //     {
        //         params: { postId: '1' }
        //     },
        //     {
        //         params: { postId: '2' }
        //     },
        //     {
        //         params: { postId: '3' }
        //     }
        // ],
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps() {
    return {
        props: {
            posts: data.slice(0, 3)
        }
    }
}