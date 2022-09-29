import classnames from 'classnames/bind'
import styles from './OurInfo.module.scss'

import IMG001 from '../../assets/img/IMG008.png'
import IMG002 from '../../assets/img/IMG009.png'
import IMG003 from '../../assets/img/IMG010.png'
import IMG004 from '../../assets/img/IMG011.png'
import IMG005 from '../../assets/img/IMG012.png'
import IMG006 from '../../assets/img/IMG013.png'

const cx = classnames.bind(styles)

function OurInfo ()
{
    return (
        <div className={cx('container')}>
            <div className={cx('fatory')}>
                <div className={cx('factory-headeline')}>
                    <h1>our factory</h1>
                </div>
                <div className={cx('pictures')}>
                    <div className={cx('image')}>
                        <img alt='img' src={IMG001}/>
                    </div>
                    <div className={cx('image')}>
                        <img alt='img' src={IMG002}/>
                    </div>
                    <div className={cx('image')}>
                        <img alt='img' src={IMG003}/>
                    </div>
                </div>
                <div className={cx('pictures')}>
                    <div className={cx('image')}>
                        <img alt='img' src={IMG004}/>
                    </div>
                    <div className={cx('image')}>
                        <img alt='img' src={IMG005}/>
                    </div>
                    <div className={cx('image')}>
                        <img alt='img' src={IMG006}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurInfo