import React, { useState } from "react";
import axios from "axios";

export default function ProductListHttp() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        let response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data);
    };

    return <>
        <h3 className="text-center">Product List Using Http</h3>

        <button onClick={fetchProducts}>Fetch Products</button>

        <div className="row">
            {products.map(product => {
                return <div className="col-sm-3 mt-2" key={product.id}>
                    <div className="card">
                        <img src={product.image} className="card-img-top" alt="..." height="200" />
                        <div className="card-body text-center">
                            <h5 className="card-title">{product.category}</h5>
                            <p className="card-text text-truncate">{product.title}</p>
                            <p className="card-text text-truncate">{product.description}</p>
                            <p className="card-text">{product.price}</p>
                            <p className="card-text">{product.rating.rate}</p>
                            <a href="#" className="btn btn-primary">Details</a>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </>
}
