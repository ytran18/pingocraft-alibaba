import classnames from 'classnames/bind'
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import SkypopcardIcon from '../../assets/icon/skypopcardlogo.png'

const cx = classnames.bind(styles)

function Header ()
{
    return (
        <div className={cx('container')}>
            <div className={cx('header_top')}>
                <div className={cx('logo')}>
                    <img  alt='skypopcard-logo' src={SkypopcardIcon} className={cx('skypopcard')}/>
                </div>
                <div className={cx('info')}>
                    <h1 className={cx('headline')}>viet nam pingo craft company ltd</h1>
                    <h2 className={cx('detail')}>Address: 176/4/8 TX25 Street, Thanh Xuan Ward, District 12th, Ho Chi Minh City, Vietnam</h2>
                    <h2 className={cx('detail')}>Hotline: (+84) 765 126 901 | Email: skypopcards@gmail.com | website: skypopcards.com</h2>
                </div>
            </div>
            <div className={cx('menu')}>
                <div className={cx('wrapper')}>
                    <nav className={cx('menubar')}>
                            <div className={cx('main-menu')}>
                                <li className={cx('menu-items')} >Home</li>
                            </div>
                            <div className={cx('main-menu')}>
                                <li className={cx('menu-items')}>Products</li>
                                <div className={cx('products-submenu')}>
                                    <div className={cx('sub-menu-products')}>
                                        <div className={cx('main-submenu')}>
                                            <li className={cx('sub-menu-items')}>See all categories</li>
                                        </div>
                                        <div className={cx('main-submenu')}>
                                            <li className={cx('sub-menu-items')}>3D Pop up Card</li>
                                            <div className={cx('secondsub-layer')}>
                                                <div className={cx('secondsub-menu')}>
                                                    <li className={cx('secondsub-menu-items')}>Birthday Pop up Card</li>
                                                    <li className={cx('secondsub-menu-items')}>Wedding Pop up Card</li>
                                                    <li className={cx('secondsub-menu-items')}>Building Pop up Card</li>
                                                    <li className={cx('secondsub-menu-items')}>Love Pop up Card</li>
                                                    <li className={cx('secondsub-menu-items')}>Flower Pop up Card</li>
                                                    <li className={cx('secondsub-menu-items')}>Anniversary Pop up Card</li>
                                                    <li className={cx('secondsub-menu-items')}>Chrismass Pop up Card</li>
                                                    <li className={cx('secondsub-menu-items')}>Animal Pop up Card</li>
                                                </div>
                                            </div>
                                        </div>
                                    </div >
                                </div>
                            </div>
                            <div className={cx('main-menu')}>
                                <li className={cx('menu-items')}>Profile</li>
                                <div className={cx('products-submenu')}>
                                    <div className={cx('sub-menu-products')}>
                                        <div className={cx('main-submenu')}>
                                            <li className={cx('sub-menu-items')}>Company Overview</li>
                                        </div>
                                        <div className={cx('main-submenu')}>
                                            <li className={cx('sub-menu-items','sub1')}>Company Capability</li>
                                            <div className={cx('secondsub-layer')}>
                                                <div className={cx('secondsub-menu')}>
                                                    <li className={cx('secondsub-menu-items')}>Trade Capacity</li>
                                                    <li className={cx('secondsub-menu-items')}>Production Capacity</li>
                                                    <li className={cx('secondsub-menu-items')}>RnD Capacity</li>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('main-submenu')}>
                                            <li className={cx('sub-menu-items')}>Business Performance</li>
                                            <div className={cx('secondsub-layer')}>
                                                <div className={cx('secondsub-menu')}>
                                                    <li className={cx('secondsub-menu-items')}>Buyer Interactions</li>
                                                    <li className={cx('secondsub-menu-items')}>Ratings and Reviews</li>
                                                </div>
                                            </div>
                                        </div>
                                    </div >
                                </div>
                            </div>
                            <div className={cx('main-menu')}>
                                <li className={cx('menu-items')}>Contacts</li>
                            </div>
                            <div className={cx('main-menu')}>
                                <li className={cx('menu-items')}>Feed</li>
                            </div>
                            <div  className={cx('main-menu')}>
                                <li className={cx('menu-items')}>View more</li>
                            </div>
                    </nav>
                    
                    <div className={cx('search')}>
                        <input type={'text'} placeholder='Search in this store' className={cx('search-box')}/>
                        <div className={cx('find-icon')}>
                            <FontAwesomeIcon  icon={faMagnifyingGlass} className={cx('find-fontawesome')}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header