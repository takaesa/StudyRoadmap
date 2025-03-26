import React from 'react'
import { useQueries } from 'react-query'
import axios from 'axios'
import { isQueryKey } from 'react-query/types/core/utils'

const fetchSuperHeroes = (heroID) => {
    return axios.get(`http://localhost:4001/superheroes/${heroID}`)
}

export const DynamicParallelPage = ({ heroID }) => {
    const queryResult = useQueries(
        heroID.map(id => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHeroes(id)
            }
        }
        )
    )

    console.log({ queryResult })
    return (
        <div></div>
    )
}
