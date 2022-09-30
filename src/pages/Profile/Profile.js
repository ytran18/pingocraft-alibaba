import classNames from "classnames/bind"
import styles from './Proflie.module.scss'

import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'

import ProductCapacity from "../../components/Profile/Product-Capacity/ProductCapacity"
import TradeCapacity from "../../components/Profile/Trade-Capacity/TradeCapacity"
import BusinessPerformance from "../../components/Profile/Business-Performance/BusinessPerformance"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightDots, faChartPie, faWrench } from '@fortawesome/free-solid-svg-icons'

import { Table, TableHeader, TableRow, TableCell, TableBody } from 'grommet'

import IMG001 from '../../assets/products/IMG001.jpeg'
import IMG002 from '../../assets/products/IMG002.jpeg'
import IMG003 from '../../assets/products/IMG003.jpeg'

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
                        <h3>company overview</h3>
                        <div className={cx('album')}>
                            <img alt="album-1" src={IMG001} className={cx('image1')}/>
                            <img alt="album-2" src={IMG002} className={cx('image')}/>
                            <img alt="album-3" src={IMG003} className={cx('image')}/>
                        </div>
                        <div className={cx('basic-info')}>
                            <h4>Basic infomation</h4>
                            <p>
                                Pingo Craft is a famous handmade greeting card manufacturer in Vietnam. With the big desire of bringing things in real life into each paper artwork, Pingo Craft creative team always give customers the most unique and sophisticated products. It's made by all their heart and effort.Pingo Craft cards appear in almost all popular special occasions in your daily life such as: New Year Popup Card, Christmas Popup Card, Valentine Popup Card, Birthday Popup Card, Father's Day Popup Card, Mother's Day Popup Card, Wedding Popup Card, Woman's Day Popup Card). SkyPop cards make your life much more colourful because it includes every magical thing in each popup model. So we hope you enjoy your day in the most beautiful way.
                            </p>
                            <div className={cx('table')}>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableCell scope="row" border="all">
                                                <strong>Business type</strong>
                                            </TableCell>
                                            <TableCell scope="row" border="all">
                                                Manufacturer
                                            </TableCell>
                                            <TableCell scope="row" border="all">
                                                <strong>Country / Region</strong>
                                            </TableCell>
                                            <TableCell scope="row" border="all">
                                                Ho Chi Minh, Vietnam
                                            </TableCell>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell scope="row" border="all">
                                                <strong>Main Products</strong>
                                            </TableCell>
                                            <TableCell border="all">Paper pop up cards, 3D cards</TableCell>
                                            <TableCell scope="row" border="all">
                                                <strong>Total employees</strong>
                                            </TableCell>
                                            <TableCell border="all">51 - 100 People</TableCell>
                                        </TableRow>
                                            
                                        <TableRow>
                                            <TableCell scope="row" border="all">
                                                <strong>Total Annual Revenue</strong>
                                            </TableCell>
                                            <TableCell border="all">Below US$1 Million</TableCell>
                                            <TableCell scope="row" border="all">
                                                <strong>Year established</strong>
                                            </TableCell>
                                            <TableCell border="all">2018</TableCell>
                                        </TableRow>
                                        
                                        <TableRow>
                                            <TableCell scope="row" border="all">
                                                <strong>Certifications</strong>
                                            </TableCell>
                                            <TableCell border="all">-</TableCell>
                                            <TableCell scope="row" border="all">
                                                <strong>Product Certifications</strong>
                                            </TableCell>
                                            <TableCell border="all">-</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell scope="row" border="all">
                                                <strong>Patents</strong>
                                            </TableCell>
                                            <TableCell border="all">-</TableCell>
                                            <TableCell scope="row" border="all">
                                                <strong>Trademarks</strong>
                                            </TableCell>
                                            <TableCell border="all">-</TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell scope="row" border="all">
                                                <strong>Main Markets</strong>
                                            </TableCell>
                                            <TableCell border="all">Africa, Oceania, Southern Europe, ...</TableCell>
                                            <TableCell scope="row" border="all">
                                                <strong>Total employees</strong>
                                            </TableCell>
                                            <TableCell border="all">51 - 100 People</TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </div>
                        </div>
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