import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHero = heroId => {
    return axios.get(`http://localhost:4001/superheroes/${heroId}`);
}

export const useSuperHeroData = (heroId) => {
    const queryClient = useQueryClient()
    return useQuery(
        ['super-hero', heroId], fetchSuperHero, {
        initialData: () => {
            const hero = queryClient.getQueryData('super-heroes')?.data?.(hero => hero.id === parseInt(heroId))

            if (hero) {
                return {
                    data: hero
                }

            }
            else {
                return undefined
            }
        }
    }
    )
}