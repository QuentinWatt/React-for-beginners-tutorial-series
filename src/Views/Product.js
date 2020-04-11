import React from 'react'
import { useParams } from "react-router-dom";
import { useAxiosGet } from '../Hooks/HttpHooks'
import Loader from '../Components/Loader';

function Product(){
    const productsEndPoint = 'https://5e8dd95322d8cd0016a79b97.mockapi.io/api/v1/products/'
    const { id } = useParams();
    
    const product = useAxiosGet(
        `${productsEndPoint}/${id}`
    )

    let content = null
    
    if(product.error){
        content = <div>
            Error
        </div>
    }

    if(product.loading){
        content = <Loader />
    }


    if(product.data){
        content = <div>
            <h1 className="font-bold text-2xl mb-3">
                { product.data.name }
            </h1>
            <div className="mb-3">
                <img 
                    src={product.data.images[0].imageUrl} 
                    alt={product.data.name}
                />
            </div>

            <div className="font-bold text-xl mb-3">
                $ { product.data.price }
            </div>
            <div>
                { product.data.description }
            </div>
        </div>
    }

    return (
        <div>
            { content }
        </div>
    )
}

export default Product