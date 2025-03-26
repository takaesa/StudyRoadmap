import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchUserByEmail = email => {
    return axios.get(`http://localhost:4001/users/${email}`)
}

const fetchCoursesByChannelId = channelId => {
    return axios.get(`http://localhost:4001/channels/${channelId}`)
}

export const DependentQueriesPage = ({ email }) => {
    const { data: user } = useQuery(['user', email], () => fetchUserByEmail(email))
    const channelId = user?.data.channelId

    useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), {
        enabled: !!channelId
    })
    return (
        <div>DependentQueries.page</div>
    )
}
