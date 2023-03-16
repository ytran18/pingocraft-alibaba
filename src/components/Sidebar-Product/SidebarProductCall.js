import classnames from 'classnames/bind'
import styles from './SidebarProduct.module.scss'

import { useState, useEffect } from 'react'

import axios from 'axios'

import SidebarProduct from './SidebarProduct'

const cx = classnames.bind(styles)

function SidebarProductCall ()
{

    const [products, setProducts] = useState([])

    useEffect(() =>
    {
        const fetchproducts = async () => 
        {
            const { data } = await axios.get("https://pingocraft.onrender.com/api/products");
            setProducts(data);
        }; 
        fetchproducts();
    },[])

    const [currentData, setCurrentData] = useState(products.slice(0,4));

    useEffect(() =>
    {
        const nextData = products.slice(0, 4);
        setCurrentData(nextData); 
    },[products])

    return(
        <div className={cx('h-[80px] w-[202px]')}>
            {
                currentData.map((item, index) =>
                {
                    return <SidebarProduct key={index} picture={item.image} title={item.title} id={item._id} price={item.price} minOrder={item.minOrder} />
                })
            }
        </div>
    )
}

export default SidebarProductCall
