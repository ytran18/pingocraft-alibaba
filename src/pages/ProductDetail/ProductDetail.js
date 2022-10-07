import classnames from "classnames/bind";
import styles from "./ProductDetail.module.scss";

import axios from 'axios'

import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";

import { useParams } from 'react-router-dom'

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
    
    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <Header />
            </div>

            <div className={cx("container")}>
                <div className={cx("breadcrumb")}>this is breadcrumb</div>
                <div className={cx("product-details")}>
                    <div className={cx("product")}>
                        <div className={cx("image")}>
                            <SingleProductImage imageList={products.imageList}/>
                        </div>

                        <div className={cx("info")}>
                            <ProductInfo />
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
