import React from 'react'

const ProductPage = (props) => {
    const  handle = props.match.params.id;
    
    return (
        <div>
            <p>Produit {handle} </p>
        </div>
    )
}

export default ProductPage;
