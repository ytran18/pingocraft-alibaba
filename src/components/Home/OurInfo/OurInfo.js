import classnames from 'classnames/bind'
import styles from './OurInfo.module.scss'

import IMG001 from '../../../assets/img/IMG008.png'
import IMG002 from '../../../assets/img/IMG009.png'
import IMG003 from '../../../assets/img/IMG010.png'
import IMG004 from '../../../assets/img/IMG011.png'
import IMG005 from '../../../assets/img/IMG012.png'
import IMG006 from '../../../assets/img/IMG013.png'
import IMG007 from '../../../assets/img/IMG014.png'
import IMG008 from '../../../assets/img/IMG015.png'


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
            <div className={cx('creative')}>
                <h1>creative dept.</h1>
                <div className={cx('creative-content')}>
                    <p>Our creative team always work day and night to create the unique and beautiful designs for clients all over the world. We can customize up to any difficult requirements of clients. Don't hesitate to leaves us your idea so we can your own never seen before pop card designs in the market</p>
                    <img alt='img' src={IMG007} />
                    <img alt='img' src={IMG008} />
                </div>
            </div>
        </div>
    )
}

export default OurInfo