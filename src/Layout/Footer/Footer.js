import classNames from "classnames/bind";
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons'

import skyLogo from '../../assets/icon/skypopcardlogo.png'

const cx = classNames.bind(styles)

function Footer ()
{
    return (
        <div className={cx('container')}>
                <div className={cx('left')}>
                    <img alt="skypopcard-logo" src={skyLogo}/>
                </div>
                <div className={cx('center')}>
                    <h5>Company</h5>
                    <p><a href="/" className={cx('no-underline text-[#333]')}>Home</a></p>
                    <p><a href="/products" className={cx('no-underline text-[#333]')}>Products</a></p>
                    <p><a href="/profile" className={cx('no-underline text-[#333]')}>Profile</a></p>
                    <p><a href="/contact" className={cx('no-underline text-[#333]')}>Contact</a></p>
                </div>
                <div className={cx('right')}>
                    <h5>Contact Us</h5>
                    <div className={cx('wrapper-info')}>
                        <div className={cx('wrapper')}>
                            <FontAwesomeIcon icon={faPhone} className={cx('info-icon')}/>
                            <p>(+84) 765.126.901 (Viber, Whatsapp, Wechat)</p>
                        </div>
                        <div className={cx('wrapper')}>
                            <FontAwesomeIcon icon={faEnvelope} className={cx('info-icon')}/>
                            <p>skypopcards@gmail.com</p>
                        </div>
                        <div className={cx('wrapper')}>
                            <FontAwesomeIcon icon={faLocationDot} className={cx('info-icon')}/>
                            <p>176/4/8 TX25 Street, Thanh Xuan Ward, 12 Dis, Ho Chi Minh City</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer