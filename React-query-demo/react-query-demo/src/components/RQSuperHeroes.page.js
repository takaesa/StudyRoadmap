import { useQuery } from "react-query"
import axios from "axios"
import useSuperHeroesData from "../hooks/useSuperHeroesData"
import { Link } from "react-router-dom"

const fetchSuperHeroes = () => {
    return axios.get('https://localhost:4001/superheroes')
}

export const RQSuperHeroesPage = () => {

    const onSuccess = (data) => {
        console.log("perform some action on success", data)
    }

    const onError = (data) => {
        console.log("perform some action on error", data)
    }
    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)

    console.log({ isLoading, isFetching })

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>{error.message}</div>
    }
    return (
        <>
            <h2>RQ SuperHeroesPage</h2>
            {/* {
                data.map(heroName => {
                    return <div key={heroName}>{heroName}</div>
                })
            } */}
            {data?.data.map((hero) => (
                <div key={hero.id}>
                    <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name} </Link>
                </div>
            ))}
        </>
    )
}


