import classnames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import Header from '../Header/Header'
import Home from '../../pages/Home/Home'

const cx = classnames.bind(styles)

function DefaultLayout ()
{
    return (
        <div className={cx('container')}>
            <div>
                <Header />
            </div>
            <div className={cx('home')}>
                <Home />
            </div>
        </div>
    )
}

export default DefaultLayout

