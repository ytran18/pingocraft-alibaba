import classNames from "classnames/bind"
import styles from './Proflie.module.scss'

import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'

const cx = classNames.bind(styles)

function Profile() {
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <Header />
            </div>

            <div className={cx('profile')}>
                This is profile page
            </div>

            <div className={cx("footer")}>
                <Footer />
            </div>
        </div>
    )
}

export default Profile