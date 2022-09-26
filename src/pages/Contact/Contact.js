import classNames from "classnames/bind"
import styles from './Contact.module.scss'

import Header from '../../Layout/Header/Header'

const cx = classNames.bind(styles)

function Contact() {
    return (
        <div className={cx('containner')}>
            <div className={cx('header')}>
                <Header />
            </div>
            
            <div className={cx('contact')}>
                this is contact page
            </div>
        </div>
    )
}

export default Contact