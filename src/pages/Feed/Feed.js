import classNames from "classnames/bind"
import styles from './Feed.module.scss'

import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'

const cx = classNames.bind(styles)


function Feed() {
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <Header />
            </div>

            <div className={cx('feed')}>
                This is feed page
            </div>
            
            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    )
}

export default Feed