import classNames from "classnames/bind"
import styles from './Products.module.scss'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'

import Sidebar from "../../components/Pages/Product/Sidebar/Sidebar"
import AllProducts from "../../components/Pages/Product/Products/Products"

const cx = classNames.bind(styles)

function Products() {
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <Header /> 
            </div>

            <div className={cx('products')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
                <div className={cx('main-content')}>
                    <AllProducts />
                </div>
            </div>

            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    )
}

export default Products