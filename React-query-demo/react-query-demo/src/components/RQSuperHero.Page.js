import React from 'react'
import { useSuperHeroData } from '../../hooks/useSuperHeroData'
import { useParams } from 'react-router-dom'

export const RQSuperHeroPage = () => {
    const { heroId } = useParams();

    const { isLoading, data, isError, error } = useSuperHeroData(heroId)

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>{error.message}</div>
    }

    return (
        <div>{data?.data.name} -    {data?.data.alterEgo}</div>
    )
}
