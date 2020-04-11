import React, { useState } from 'react'
import { useAxiosGet } from '../Hooks/HttpHooks'
import ProductCard from '../Components/ProductCard'
import Loader from '../Components/Loader'

function Home(){
    const productsEndPoint = 'https://5e8dd95322d8cd0016a79b97.mockapi.io/api/v1/products/'
    const [page] = useState(1)
    const [limit] = useState(8)
    const products = useAxiosGet(
        `${productsEndPoint}?page=${page}&limit=${limit}`
    )
    
    let content = null

    if(products.error){
        content = <div>
            Error
        </div>
    }

    if(products.loading){
        content = <Loader />
    }

    if(products.data){
        content = products.data.map((product, key) =>
            <div key={key} className="flex-no-shrink w-full md:w-1/4 md:px-3">
                <ProductCard product={product} />
            </div>
        )
    }

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-2xl mb-3">
                Best sellers
            </h1>
            <div className="md:flex flex-wrap md:-mx-3">
                { content } 
            </div>     
        </div>
    )
}

export default Home