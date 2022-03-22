import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"
import "../styles/ProductReviews.css"

const ProductReview = ({productReview}) => {
    return (
        <div className='ProductReviews'>
            {
                productReview.map((item ,index) =>(
                    <ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image} />
                ))
            }
        </div>
    )
}

export default ProductReview
