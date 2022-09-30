import classNames from "classnames/bind"
import styles from './Proflie.module.scss'

import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'

import ProductCapacity from "../../components/Profile/Product-Capacity/ProductCapacity"
import TradeCapacity from "../../components/Profile/Trade-Capacity/TradeCapacity"
import BusinessPerformance from "../../components/Profile/Business-Performance/BusinessPerformance"
import CompanyOverview from "../../components/Profile/Company-Overview/CompanyOverview"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightDots, faChartPie, faWrench } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Profile() {
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <Header />
            </div>

            <div className={cx('profile')}>
                <div className={cx('sidebar')}>
                    <div className={cx('sidebar-nav')}>
                        <div className={cx('nav-items')}>
                            <FontAwesomeIcon icon={faBuilding} className={cx('icon')}/>
                            <p>Company Overview</p>
                        </div>
                        <div className={cx('nav-items')}>
                            <FontAwesomeIcon icon={faWrench} className={cx('icon')}/>
                            <p>Production Capacity</p>
                        </div>
                        <div className={cx('nav-items')}>
                            <FontAwesomeIcon icon={faArrowUpRightDots} className={cx('icon')}/>
                            <p>Trade Capacity</p>
                        </div>
                        <div className={cx('nav-items')}>
                            <FontAwesomeIcon icon={faChartPie} className={cx('icon')}/>
                            <p>Business Performance</p>
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('top')}>
                        <p>3<span>YRS</span></p>
                        <p>viet nam pingo craft company limited</p>
                    </div>

                    <div className={cx('company-overview')}>
                        <CompanyOverview />
                    </div>
                    <div className={cx('product-capacity')}>
                        <ProductCapacity />
                    </div>
                    <div className={cx('trade-capacity')}>
                        <TradeCapacity />
                    </div>
                    <div className={cx('business-performance')}>
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