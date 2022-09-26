import classnames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import Header from '../Header/Header'
import Home from '../../pages/Home/Home'
import Footer from '../Footer/Footer'

const cx = classnames.bind(styles)

function DefaultLayout ()
{
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <Header />
            </div>
            <div className={cx('home')}>
                <Home />
            </div>
            <div className={cx('footer')}>
                <Footer />
            </div>
        </div>
    )
}

export default DefaultLayout

