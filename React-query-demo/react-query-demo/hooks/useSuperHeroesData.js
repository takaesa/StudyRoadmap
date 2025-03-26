import { useQuery, useMutation, useQueryClient } from "react-query"
import axios from "axios"

const fetchSuperHeroes = () => {
    return axios.get('https://localhost:4001/superheroes')
}

const addSuperHero = (hero) => {
    return axios.post('https://localhost:4001/superheroes', hero)
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

export const useAddSuperHeroData = () => {
    const queryClient = useQueryClient()
    return useMutation(addSuperHero, {
        onSuccess: (data) => {
            // queryClient.invalidateQueries('super-heroes')
            queryClient.setQueryData('super-heroes', (oldQueryData) => {
                return {
                    ...oldQueryData,
                    data: [...oldQueryData.data, data.data]

                }
            })
        }
    })
}