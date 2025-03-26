import { useState, useEffect } from 'react';
import axios from 'axios';

export const SuperHeroesPage = () => {
    const [isLoading, setIsloading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios
            .get('https://localhost:4001/superheroes')
            .then((response) => {
                setData(response.data);
                setIsloading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsloading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    return (
        <>
            <h2>Super Heroes Page</h2>
            {data.map((hero) => (
                <div key={hero.name}>
                    {hero.name}
                </div>
            ))}
        </>
    )
}
