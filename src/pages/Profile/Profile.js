import classNames from "classnames/bind"
import styles from './Proflie.module.scss'

import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'

import ProductCapacity from "../../components/Pages/Profile/Product-Capacity/ProductCapacity"
import TradeCapacity from "../../components/Pages/Profile/Trade-Capacity/TradeCapacity"
import BusinessPerformance from "../../components/Pages/Profile/Business-Performance/BusinessPerformance"
import CompanyOverview from "../../components/Pages/Profile/Company-Overview/CompanyOverview"
import Sidebar from "../../components/Pages/Profile/Sidebar/Sidebar"

const cx = classNames.bind(styles)

function Profile() {

    return (
        <div className={cx('relative')}>
            <div className={cx('header')}>
                <Header />
            </div>

            <div className={cx('profile')}>
                <div className={cx('sidebar','hidden lg:block')}>
                    <Sidebar />
                </div>
                <div className={cx('content','lg:w-[80%] w-[100%]')}>
                    <div className={cx('top','lg:w-[960px] w-[100%]')}>
                        <p>3<span>YRS</span></p>
                        <p>viet nam pingo craft company limited</p>
                    </div>

                    <div className={cx('company-overview','lg:w-[960px] w-[100%]')} id="overview">
                        <CompanyOverview />
                    </div>
                    <div className={cx('product-capacity')} id="product">
                        <ProductCapacity />
                    </div>
                    <div className={cx('trade-capacity','hidden lg:block')} id="trade">
                        <TradeCapacity />
                    </div>
                    <div className={cx('business-performance')} id="business">
                        <BusinessPerformance />
                    </div>
                </div>
            </div>

            <div className={cx("footer")}>
                <Footer />
            </div>
        </div>
    )
}

export default Profile