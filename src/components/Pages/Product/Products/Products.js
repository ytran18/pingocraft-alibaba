import classnames from 'classnames/bind'
import styles from './Products.module.scss'
import axios from 'axios'
import { Pagination, Box} from 'grommet'

import SingleProduct from '../../../Single-Product/SingleProduct'
import { useEffect, useState } from 'react'

const cx = classnames.bind(styles)

function Products ()
{
    const [products, setProducts] = useState([]);

    useEffect(() =>
    {
        const fetchproducts = async () => 
        {
            const { data } = await axios.get("hhttps://pingocraft.onrender.com/api/products");
            setProducts(data);
        };
        fetchproducts();
    },[])

    const [currentData, setCurrentData] = useState(products.slice(0,16));

    useEffect(() =>
    {
        const nextData = products.slice(0, 16);
        setCurrentData(nextData); 
    },[products])

    const handleChange = ({ startIndex, endIndex }) =>
    {
        const nextData = products.slice(startIndex, endIndex);
        setCurrentData(nextData);
    }

    return (
        <div className={cx('lg:ml-[16px] m-auto')}>
            <h1 className={cx('lg:hidden mb-4 text-center')}>All Products</h1>
            <div className={cx('products')}>
                {
                    currentData.map((product,index) =>
                    {
                        return (
                            <SingleProduct picture={product.image} title={product.title}  price={product.price} minOrder={product.minOrder} id={product._id} key={index} />
                        )
                    })
                }
            </div>
            <Box>
                <Pagination step={16} numberItems={products.length} onChange={handleChange} page={1} alignSelf="center"/>
            </Box>
        </div>
    )
}

export default Products
