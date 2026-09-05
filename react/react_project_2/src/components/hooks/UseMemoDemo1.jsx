import { useMemo, useState } from 'react'
import productsArr from '../list/product_data'

export default function UseMemoDemo1() {
    const [count, setCount] = useState(0);
    const [searchText, setSearchText] = useState('');

    /* let filteredProducts = productsArr.filter((product)=>{
        console.log("filtering...");
        return product.title.toLowerCase().includes(searchText.toLowerCase())
    }) */
    let filteredProducts = useMemo(() => {
        return productsArr.filter((product) => {
            console.log("filtering...");
            return product.title.toLowerCase().includes(searchText.toLowerCase())
        })
    }, [searchText]);

    return <>
        <div>count: {count}</div>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <hr />

        <h3 className="text-center">Product List</h3>
        <div className="row">
            <input type="search" placeholder='Search...'
                value={searchText} onChange={(e) => setSearchText(e.target.value)}
                className='col-sm-6 from-control offset-3' />
        </div>
        <div className="row">
            {filteredProducts.map(product => {
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
