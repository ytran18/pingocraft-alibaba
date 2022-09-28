import { Suspense } from 'react' 
import classnames from 'classnames/bind'
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

// translate
import { useTranslation, withNamespaces } from 'react-i18next'
import '../../i18n'

import SkypopcardIcon from '../../assets/icon/skypopcardlogo.png'

const cx = classnames.bind(styles)

function Header ()
{

    const {t, i18n} = useTranslation('translation')

    const changeLanguage = (lng) =>
    {
        i18n.changeLanguage(lng)
    }

    return (
        <Suspense fallback="loading">
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
                    <div className={cx('menu-icon')}>
                        <FontAwesomeIcon icon={faBars}/>
                    </div>
                </div>
                <div className={cx('menu')}>
                    <div className={cx('wrapper')}>
                        <nav className={cx('menubar')}>
                                <div className={cx('main-menu')}>
                                    <Link to={'/'}>
                                        <li className={cx('menu-items')}>{t('headermenu.home')}</li>
                                    </Link>
                                </div>
                                <div className={cx('main-menu')}>
                                    <Link to={'/products'}>
                                        <li className={cx('menu-items')}>{t('headermenu.products')}</li>
                                    </Link>
                                    <div className={cx('products-submenu')}>
                                        <div className={cx('sub-menu-products')}>
                                            <div className={cx('main-submenu')}>
                                                <li className={cx('sub-menu-items')}>{t('headermenu.products.seeallCatagories')}</li>
                                            </div>
                                            <div className={cx('main-submenu')}>
                                                <li className={cx('sub-menu-items')}>{t('headermenu.products.3dpopup')}</li>
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
                                    <Link to={'/profile'}>
                                        <li className={cx('menu-items')}>{t('headermenu.profile')}</li>
                                    </Link>
                                    <div className={cx('products-submenu')}>
                                        <div className={cx('sub-menu-products')}>
                                            <div className={cx('main-submenu')}>
                                                <li className={cx('sub-menu-items')}>{t('headermenu.profile.overview')}</li>
                                            </div>
                                            <div className={cx('main-submenu')}>
                                                <li className={cx('sub-menu-items','sub1')}>{t('headermenu.profile.capability')}</li>
                                                <div className={cx('secondsub-layer')}>
                                                    <div className={cx('secondsub-menu')}>
                                                        <li className={cx('secondsub-menu-items')}>{t('headermenu.profile.capability.trade')}</li>
                                                        <li className={cx('secondsub-menu-items')}>{t('headermenu.profile.capability.production')}</li>
                                                        <li className={cx('secondsub-menu-items')}>{t('headermenu.profile.capability.r&d')}</li>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('main-submenu')}>
                                                <li className={cx('sub-menu-items')}>{t('headermenu.profile.performance')}</li>
                                                <div className={cx('secondsub-layer')}>
                                                    <div className={cx('secondsub-menu')}>
                                                        <li className={cx('secondsub-menu-items')}>{t('headermenu.profile.performance.buyer')}</li>
                                                        <li className={cx('secondsub-menu-items')}>{t('headermenu.profile.performance.ratings')}</li>
                                                    </div>
                                                </div>
                                            </div>
                                        </div >
                                    </div>
                                </div>
                                <div className={cx('main-menu')}>
                                    <Link to={'/contact'}>
                                        <li className={cx('menu-items')}>{t('headermenu.contacts')}</li>
                                    </Link>
                                </div>
                                <div className={cx('main-menu')}>
                                    <Link to={'/feed'}>
                                        <li className={cx('menu-items')}>{t('headermenu.feed')}</li>
                                    </Link>
                                </div>
                                <div  className={cx('main-menu')}>
                                    <Link to={'/view-more'}>
                                        <li className={cx('menu-items')}>{t('headermenu.viewmore')}</li>
                                    </Link>
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
        </Suspense>
    )
}

export default Header