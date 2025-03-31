import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4001/superheroes')
}

const fetchFriends = () => {
    return axios.get('http://localhost:4001/friends')
}

export const ParallelQueriesPage = () => {
    const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes)
    const { data: friends } = useQuery('friends', fetchFriends)
    return (
        <div>
            <h2>Parallel Queries</h2>
            <h3>Super Heroes</h3>
            {superHeroes?.data.map(hero => {
                return <div key={hero.name}>{hero.name}</div>
            })}
            <h3>Friends</h3>
            {friends?.data.map(friend => {
                return <div key={friend.name}>{friend.name}</div>
            })}
        </div>
    )
}
