import classNames from "classnames/bind"
import styles from './Viewmore.module.scss'

import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'

const cx = classNames.bind(styles)

function Viewmore() {
    return (
        <div className={cx('relative')}>
            <div className={cx('header')}>
                <Header />
            </div>
            
            <div className={cx('viewmore')}>
                this is viewmore page
            </div>

            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    )
}

export default Viewmore