import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useState } from 'react'

const fetchColors = (page) => {
    return axios.get(`http://localhost:4001/colors?_limit=3&_page=${page}`)
}

export const PaginatedQueriesPage = () => {
    const [page, setPage] = useState(1)
    const { isLoading, isError, error, data } = useQuery(['colors', page], fetchColors(page), { keepPreviousData: true })

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error: {error.message}</div>
    }


    return (
        <>
            <div>
                {data?.map((color) => (
                    <div key={color.id}>
                        <h2>
                            {color.id}. {color.label}
                        </h2>
                    </div>
                ))}

            </div>
            <div>
                <button onClick={() => setPage(page -= 1)} disabled={page === 1}>Prev page</button>
                <button onClick={() => setPage(page += 1)} disabled={page === 4}>Next page</button>
            </div>
        </>

    )
}
