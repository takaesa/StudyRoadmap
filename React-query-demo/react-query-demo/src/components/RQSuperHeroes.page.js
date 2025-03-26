import { useQuery } from "react-query"
import axios from "axios"
import useSuperHeroesData from "../hooks/useSuperHeroesData"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useAddSuperHero, useAddSuperHeroData } from "../../hooks/useSuperHeroesData"


const fetchSuperHeroes = () => {
    return axios.get('https://localhost:4001/superheroes')
}

export const RQSuperHeroesPage = () => {
    const [name, setName] = useState('')
    const [alterEgo, setAlterEgo] = useState('')

    const onSuccess = (data) => {
        console.log("perform some action on success", data)
    }

    const onError = (data) => {
        console.log("perform some action on error", data)
    }
    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)

    const { mutate: addHero } = useAddSuperHeroData()

    const handleAddHeroClick = () => {
        console.log({ name, alterEgo })
        const hero = { name, alterEgo }
        addHero(hero)
    }
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
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <input type="text" value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)}></input>

                <button onClick={handleAddHeroClick}>Add Hero</button>
            </div>
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


