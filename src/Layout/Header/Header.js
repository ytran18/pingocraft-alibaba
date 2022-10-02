import { Suspense } from 'react' 
import classnames from 'classnames/bind'
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

// translate
import { useTranslation } from 'react-i18next'

import SkypopcardIcon from '../../assets/icon/skypopcardlogo.png'

const cx = classnames.bind(styles)

function Header ()
{

    const {t, i18n} = useTranslation('translation')


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
                                </div>
                                <div className={cx('main-menu')}>
                                    <Link to={'/profile'}>
                                        <li className={cx('menu-items')}>{t('headermenu.profile')}</li>
                                    </Link>
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
                            <input type={'text'} placeholder={t('headermenu.search.placeholder')} className={cx('search-box')}/>
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