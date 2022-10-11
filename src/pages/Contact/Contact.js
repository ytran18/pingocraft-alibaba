import classNames from "classnames/bind"
import styles from './Contact.module.scss'

import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'

import ContactEmail from '../../components/Pages/Contact/Contact-Email/ContactEmail'
import ContactInformation from '../../components/Pages/Contact/Contact-Information/ContactInformation'
import ContactMap from '../../components/Pages/Contact/Contact-Map/ContactMap'

const cx = classNames.bind(styles)

function Contact() {
    return (
        <div className={cx('relative')}>
            <div className={cx('header')}>
                <Header />
            </div>
            
            <div className={cx('contact')}>
                <div className={cx('contact-information','')}>
                    <ContactInformation />
                </div>
                <div className={cx('contact-email','')}>
                    <ContactEmail />
                </div>
                <div className={cx('contact-map')}>
                    <ContactMap />
                </div>
            </div>

            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    )
}

export default Contact