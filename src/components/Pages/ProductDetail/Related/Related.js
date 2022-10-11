import classnames from 'classnames/bind'
import styles from './Related.module.scss'

import axios from 'axios'

import SingleProduct from '../../../Single-Product/SingleProduct'
import { useState, useEffect } from 'react'

const cx = classnames.bind(styles)

function Related ()
{

    const [products, setProducts] = useState([])

    useEffect(() => 
    {
        const fetchproducts = async () => 
        {
            const { data } = await axios.get("/api/products");
            setProducts(data);
        }; 
        fetchproducts();
    },[])

    const [currentData, setCurrentData] = useState(products.slice(0,10));

    useEffect(() =>
    {
        const nextData = products.slice(0, 10);
        setCurrentData(nextData); 
    },[products])

    return (
        <div className={cx('container')}>
            <h3>RELATED PRODUCTS</h3>
            <div className={cx('related')}>
                {
                    currentData.map((product, index) =>
                    {
                        return (
                            <SingleProduct picture={product.image} title={product.title} price={product.price} minOrder={product.minOrder} id={product._id} key={index}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Related