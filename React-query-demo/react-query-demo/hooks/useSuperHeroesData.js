import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeroes = () => {
    return axios.get('https://localhost:4001/superheroes')
}
const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery(
        'super-heroes',
        fetchSuperHeroes,
        {
            onSuccess,
            onError,
            // select: (data) => {
            //     const superHeroNames = data.data.map((hero) => hero.name)
            //     return superHeroNames;
            // }

        }
    )
}