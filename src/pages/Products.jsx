import { useEffect, useState } from "react"
import axios from "axios";
import NavBar from "../component/NavBar"

function Products() {

    //creo una variabile in cui salvare l'API
    const enpoint = "https://fakestoreapi.com/products";

    //creo una variabile in cui inserire la lista prodotti
    const [productsList, setProcudtsList] = useState([]);

    //creiamo una funzione per estrapolare i dati dall'API 
    function fetchProducts() {
        axios.get(enpoint)
            .then((res) => setProcudtsList(res.data))
            .catch(err => console.error("Errore nella richiesta"))
    }

    //andiamo a richiamre la funzione una sola volta all'avvio
    useEffect(fetchProducts, []);

    return (
        <>
            <h1 className="product-title" >Products:</h1>
            <div className="card-container">
                {productsList.map(product => (
                    <div
                        key={product.id}
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
                ))}
            </div>
        </>
    )
}

export default Products
