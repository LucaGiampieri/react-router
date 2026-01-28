function CardProduct(props) {

    const { product } = props

    return (
        <div
            className="card" >
            <div className="card-separator">
                <div className="img-container">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="card-text-container">

                    <h4 className="card-rating" >
                        <div>
                            Rate: {product.rating.rate}/5
                        </div>
                        <div>
                            Count: {product.rating.count}
                        </div>
                    </h4>
                    <h2 className="card-name">
                        {product.price} $
                        <br />
                        {product.title}
                    </h2>
                    <h3 className="card-category">
                        Category: {product.category}
                    </h3>
                </div>
            </div>
            <p>
                {product.description}
            </p>
        </div>
    )
}

export default CardProduct