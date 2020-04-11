import { useState, useEffect } from 'react'
import axios from 'axios'

export function useAxiosGet(url){
    const [responseData, setResponseData] = useState({
        data: null,
        loading: false,
        error: null
    })

    useEffect(() => {
        setResponseData({
            data: null,
            loading: true,
            error: null,
        })

        axios.get(url)
            .then(response => {
                setResponseData({
                    data: response.data,
                    loading: false,
                    error: null,
                })
            })
            .catch(error => {
                setResponseData({
                    data: null,
                    loading: false,
                    error: error.response
                })
            })
    }, [url])

    return responseData
}