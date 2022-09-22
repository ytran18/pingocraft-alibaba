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
                        {/* <ul> */}
                            <div>
                                <li className={cx('menu-items')} >Home</li>
                            </div>
                            <div className={cx('subnav')}>
                                <li className={cx('menu-items')}>Products</li>
                                <div className={cx('products-submenu')}>
                                    <div className={cx('sub-menu-products')}>
                                        <li className={cx('sub-menu-items')}>See all categories</li>
                                        <li className={cx('sub-menu-items')}>3D Pop up Card</li>
                                    </div >
                                </div>
                            </div>
                            <div>
                                <li className={cx('menu-items')}>Profile</li>
                            </div>
                            <div>
                                <li className={cx('menu-items')}>Contacts</li>
                            </div>
                            <div>
                                <li className={cx('menu-items')}>Feed</li>
                            </div>
                            <div>
                                <li className={cx('menu-items')}>View more</li>
                            </div>
                        {/* </ul> */}
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