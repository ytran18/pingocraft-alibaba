import classNames from "classnames/bind";
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons'

import skyLogo from '../../assets/icon/skypopcardlogo.png'

const cx = classNames.bind(styles)

function Footer ()
{
    return (
        <div className={cx('container','w-[100%] md:flex py-[3rem]')}>
                <div className={cx('w-[33%] flex items-center justify-center]','left')}>
                    <img alt="skypopcard-logo" src={skyLogo} className={cx('w-[150px] h-[150px]')}/>
                </div>
                <div className={cx('md:w-[33%] text-[13px] ml-[1rem] flex flex-col md:items-center md:justify-center')}>
                    <h5 className={cx('my-[1rem] text-[15px] font-bold')}>Company</h5>
                    <p className={cx('cursor-pointer my-[1rem]')}><a href="/" className={cx('no-underline text-[#333]')}>Home</a></p>
                    <p className={cx('cursor-pointer my-[1rem]')}><a href="/products" className={cx('no-underline text-[#333]')}>Products</a></p>
                    <p className={cx('cursor-pointer my-[1rem]')}><a href="/profile" className={cx('no-underline text-[#333]')}>Profile</a></p>
                    <p className={cx('cursor-pointer my-[1rem]')}><a href="/contact" className={cx('no-underline text-[#333]')}>Contact</a></p>
                </div>
                <div className={cx('md:w-[33%] ml-[1rem] flex flex-col justify-center')}>
                    <h5 className={cx('text-[15px] my-[1rem] font-bold')}>Contact Us</h5>
                    <div className={cx('flex flex-col')}>
                        <div className={cx('flex text-[13px] my-[1rem]')}>
                            <FontAwesomeIcon icon={faPhone} className={cx('w-[16px] h-[16px]')}/>
                            <p className={cx('ml-[1rem]')}>(+84) 765.126.901 (Viber, Whatsapp, Wechat)</p>
                        </div>
                        <div className={cx('flex text-[13px] my-[1rem]')}>
                            <FontAwesomeIcon icon={faEnvelope} className={cx('w-[16px] h-[16px]')}/>
                            <p className={cx('ml-[1rem]')}>skypopcards@gmail.com</p>
                        </div>
                        <div className={cx('flex text-[13px] my-[1rem]')}>
                            <FontAwesomeIcon icon={faLocationDot} className={cx('w-[16px] h-[16px]')}/>
                            <p className={cx('ml-[1rem]')}>176/4/8 TX25 Street, Thanh Xuan Ward, 12 Dis, Ho Chi Minh City</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer