import classnames from 'classnames/bind'
import styles from './Home.module.scss'

import slideImg1 from '../../assets/slider/slider1.jpeg'
import slideImg2 from '../../assets/slider/slider2.jpeg'
import slideImg3 from '../../assets/slider/slider3.jpeg'

const cx = classnames.bind(styles)

function Home() {
    return (
        <div className={cx('container')}>
            
            {/* slide show */}
            <div className={cx('slide-show')}>
                <div className={cx('mySlides', 'fade')}>
                    <img alt='img-1' src={slideImg1}/>
                </div>

                <div className={cx('mySlides', 'fade')}>
                    <img alt='img-2' src={slideImg2}/>
                </div>

                <div className={cx('mySlides', 'fade')}>
                    <img alt='img-3' src={slideImg3}/>
                </div>
            </div>

        </div>
    )
}

export default Home