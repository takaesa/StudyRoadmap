import React, { Fragment } from 'react'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'

const fetchColors = ({ pagaParam = 1 }) => {
    return axios.get(`http://localhost:4001/colors?_limit=3&_page=${pagaParam}`)
}

export const InfiniteQueriesPage = () => {
    const { isLoading, isError, error, data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery(['colors'], fetchColors, {
        getNextPageParam: (_lastPage, pages) => {
            if (pages.length < 4) {
                return pages.length + 1
            }
            else {
                return undefined
            }
        }
    })

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div>
            <div>
                {data?.pages.map((group, index) => (
                    <Fragment key={index}>
                        {
                            group.data.map((color) => (
                                <h2 key={color.id}>{color.id} {color.label}</h2>
                            )
                            )
                        }
                    </Fragment>
                ))}
            </div>
            <div>
                <button disabled={!hasNextPage} onClick={fetchNextPage}>Load More</button>
            </div>
            <div>{isFetching && !isFetchingNextPage ? 'fetching' : null}</div>
        </div>
    )
}
