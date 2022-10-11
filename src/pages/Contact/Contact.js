import classNames from "classnames/bind"
import styles from './Contact.module.scss'

import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'

const cx = classNames.bind(styles)

function Contact() {
    return (
        <div className={cx('relative')}>
            <div className={cx('header')}>
                <Header />
            </div>
            
            <div className={cx('contact')}>
                this is contact page
            </div>

            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    )
}

export default Contact