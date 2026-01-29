import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";


function ProductDetail() {

    //creo la variabile in cui salvare l'API
    const endpoint = "https://fakestoreapi.com/products/";

    // recuper valore param dinamico grazie a hook useParams
    const { id } = useParams();

    //creo una variabile per salvare le infomazioni estrapolate dall'API
    const [product, setProduct] = useState();

    const navigate = useNavigate();

    //tramite useEffect faccio una chiamata Ajax per riahiamare i dati che mi servono dall'API
    //ma solo quelli dell'id specifico
    useEffect(() => {
        axios.get(endpoint + id)
            .then(resp => {

                if (resp.data) {
                    setProduct(resp.data)
                } else {
                    throw new Error('Missing product');
                }

            })
            .catch(err => {
                navigate("/products")
                console.log("errore sulla chiamata", err)
            })
    }, [id])


    return (

        <>
            {product ? (
                <div
                    key={product.id}
                    className="card-detail" >
                    <div className="img-container-detail">
                        <div className="link-container-detail">
                            <Link className="card-last-detail" to={`/products/${Number(id) - 1}`}><i class="fa-solid fa-arrow-left"></i> Last</Link >
                            <Link className="card-next-detail" to={`/products/${Number(id) + 1}`}>Next <i class="fa-solid fa-arrow-right"></i></Link >
                        </div>
                        <div>
                            <img
                                className="img-card-detail"
                                src={product.image}
                                alt={product.title} />
                        </div>
                    </div>
                    <div className="card-text-container-detail">
                        <h4 className="card-rating-detail" >
                            <div>
                                Rate: {product.rating.rate}/5
                            </div>
                            <div>
                                Count: {product.rating.count}
                            </div>
                        </h4>
                        <h2 className="card-name-detail">
                            {product.title}
                        </h2>
                        <h3 className="card-price-detail">
                            {product.price} $
                        </h3>
                        <h3 className="card-category-detail">
                            Category: {product.category}
                        </h3>
                        <p className="card-description-detail">{product.description}</p>
                        <Link className="card-cart-link-detail" to="/cart"> <i class="fa-solid fa-cart-arrow-down"></i> Aggiungi al carello</Link >
                        <Link className="card-returning-detail" to="/products">Torna alla lista intera</Link >




                        {/* <button className="card-button-last-detail"
                            onClick={() => navigate(-1)}>
                            Last
                        </button>
                        <button className="card-button-last-detail"
                            onClick={() => navigate(1)}>
                            next
                        </button> */}


                    </div>
                </div>
            ) : (
                <p className="loader">Loading...</p>
            )
            }
        </>
    )
}

export default ProductDetail