import classnames from 'classnames/bind'
import styles from './Products.module.scss'
import axios from 'axios'
import { Pagination, Box, Text } from 'grommet'

import SingleProduct from '../../../Single-Product/SingleProduct'
import { useEffect, useState } from 'react'

const cx = classnames.bind(styles)

function Products ()
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


    const [currentData, setCurrentData] = useState(products.slice(0,16));
    const [indices, setIndices] = useState([0,16]);

    const handleChange = ({ startIndex, endIndex }) =>
    {
        const nextData = products.slice(startIndex, endIndex);
        setCurrentData(nextData);
        setIndices([startIndex, Math.min(endIndex, products.length)]);
    }
    console.log(indices);

    return (
        <div className={cx('container')}>
            <div className={cx('products')}>
                {
                    currentData.map((product,index) =>
                    {
                        return (
                                <SingleProduct picture={product.image} title={product.title}  price={product.price} minOrder={product.minOrder} key={index} />
                        )
                    })
                }
            </div>
            <Box>
                <Text>
                    Showing {indices[0] + 1} - {indices[1]} of {products.length}
                </Text>
                <Pagination numberItems={products.length} onChange={handleChange}/>
            </Box>
        </div>
    )
}

export default Products