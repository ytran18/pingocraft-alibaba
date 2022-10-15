import classnames from "classnames/bind";
import styles from "./ProductDetail.module.scss";

import axios from 'axios'

import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";

import { useParams } from 'react-router-dom'

import Breadcrumbs  from '@mui/material/Breadcrumbs'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import SingleProductImage from "../../components/Pages/ProductDetail/SingleProductImage/SingleProductImage";
import ProductInfo from "../../components/Pages/ProductDetail/ProductInfo/ProductInfo";
import Related from "../../components/Pages/ProductDetail/Related/Related";
import { useEffect, useState } from "react";

const cx = classnames.bind(styles);

function ProductDetail() {

    const [products, setProducts] = useState([])
    const {productID} = useParams()

    useEffect(() => 
    {
        const fetchproducts = async () => 
        {
            const { data } = await axios.get(`/api/products/${productID}`);
            setProducts(data);
        }; 
        fetchproducts();
    },[productID])

    const handleClick = () =>
    {

    }

    // breadcrumb

    const breadcrumbs = [
        <Link underline="hover" key={"1"} color="inherit" href="/" onClick={handleClick}>
            Home
        </Link>,

        <Link underline="hover" key={"2"} color="inherit" href="/products" onClick={handleClick}>
            Products
        </Link>,

        <Typography key={"3"} color="text.primary">
            {products.title || null}
        </Typography>,
    ]
    
    return (
        <div className={cx("relative")}>

            <div className={cx("header")}>
                <Header />
            </div>

            <div className={cx("")}>
                <div className={cx("hidden lg:block mt-[1rem] ml-[1rem]")}>
                    <Stack spacing={2}>
                        <Breadcrumbs separator=">" aria-label="breadcrumb">
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Stack>
                </div>
                <div className={cx("product-details",'mt-[1rem]')}>
                    <div className={cx("lg:flex")}>
                        <div className={cx("lg:w-[40%]")}>
                            <SingleProductImage imageList={products.imageList}/>
                        </div>

                        <div className={cx("lg:w-[60%]")}>
                            <ProductInfo price={products.price} title={products.title}/>
                        </div>
                    </div>
                    <div className={cx("related")}>
                        <Related />
                    </div>
                </div>
            </div>

            <div className={cx("footer")}>
                <Footer />
            </div>
        </div>
    );
}

export default ProductDetail;
