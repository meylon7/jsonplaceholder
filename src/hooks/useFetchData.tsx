import { useState, useEffect } from 'react';

export const useFetchData = <T,>(url: string, initialState: T): [T, boolean] => {
    const [data, setData] = useState<T>(initialState)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch(url).then((response) => response.json())
        .then((data) => {
            console.log(data);
            setData(data)
        })
        .finally(() => setLoading(false))
    }, [url])

    return [data, loading]
}