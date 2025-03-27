export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    console.log(data)

    return {
        props: { users: data }
    }
}

function UserList({ users }) {
    return (
        <div>
            {users.map((user) => {
                return (<div key={user.id}>
                    <p>{user.name}, {user.email}</p>
                </div>)
            })}
        </div>
    )
}

export default UserList;


