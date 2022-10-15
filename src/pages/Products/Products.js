import classNames from "classnames/bind"
import styles from './Products.module.scss'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'

import Sidebar from "../../components/Pages/Product/Sidebar/Sidebar"
import AllProducts from "../../components/Pages/Product/Products/Products"

const cx = classNames.bind(styles)

function Products() {
    return (
        <div className={cx('relative')}>
            <div className={cx('header')}>
                <Header /> 
            </div>

            <div className={cx('flex py-[2rem] lg:px-[2rem]')}>

                <div className={cx('hidden lg:block lg:w-[20%]')}>
                    <Sidebar />
                </div>

                <div className={cx('flex justify-center items-center lg:w-[80%]')}>
                    <AllProducts />
                </div>
                
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Products