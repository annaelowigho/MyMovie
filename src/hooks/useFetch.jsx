import React, { useEffect, useState } from 'react'

const API_KEY = import.meta.env.VITE_API_KEY;
const useFetch = (path, extraParams, dependency) => {
    const [data, setData] = useState([])
    const [loading, setLoading]=  useState(true)
    const [isError, setIsError] = useState(false)

    const fetchDaata = async ()=>{
        setLoading(true)
        try {
            const res = await fetch(`https://api.themoviedb.org/3/${path}?api_key=${API_KEY}&${extraParams || ""}`)
            const data = await res.json()
            setData(data)
            setLoading(false)
        } catch (error) {
            setIsError(true)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchDaata()
    },[dependency])


  return {
    data,
    loading,
    isError
  }
}

export default useFetch