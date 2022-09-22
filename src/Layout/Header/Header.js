import classnames from 'classnames/bind'
import styles from './Header.module.scss'
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
                <nav className={cx('menubar')}>
                    <ul>
                        <li className={cx('menu-items')}>Home</li>
                        <li className={cx('menu-items')}>Products</li>
                        <li className={cx('menu-items')}>Profile</li>
                        <li className={cx('menu-items')}>Contacts</li>
                        <li className={cx('menu-items')}>Feed</li>
                        <li className={cx('menu-items')}>View more</li>
                    </ul>
                </nav>
                <div className={cx('search')}>
                    <input type={'text'} placeholder='Search in this store' className={cx('search-box')}/>
                </div>
            </div>
        </div>
    )
}

export default Header