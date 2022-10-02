import classnames from 'classnames/bind'
import styles from './Home.module.scss'

import {Box, Carousel, Image} from 'grommet'


// components
import OurInfo from '../../components/Home/OurInfo/OurInfo'
import Flag from '../../components/Home/Flag-Language/Flag'
import AboutUs from '../../components/Home/AboutUs/AboutUs'
import Advantages from '../../components/Home/Advantages/Advantages'

// video
import VID001 from '../../assets/video/VID001.mp4'

import slideImg1 from '../../assets/slider/slider1.jpeg'
import slideImg2 from '../../assets/slider/slider2.jpeg'
import slideImg3 from '../../assets/slider/slider3.jpeg'


const cx = classnames.bind(styles)

function Home() 
{
    return (
        <div className={cx('container')}>
            
            {/* slide show */}
            <div className={cx('slide-show')}>
                <Box overflow={'hidden'}>
                    <Carousel play={5000}>
                        <Image src={slideImg1}/>
                        <Image src={slideImg2}/>
                        <Image src={slideImg3}/>
                    </Carousel>
                </Box>
            </div>

            {/* flag - lanaguage */}
            <div className={cx('flag-container')}>
                <Flag />
            </div>
            <br />
            <div className={cx('about-us')}>
                <AboutUs />
            </div>
            <div className={cx('video-recommendations')}>
                <div className={cx('video')}>
                    <video controls width={'700'} height={'400'}>
                        <source src={VID001} type="video/mp4"/>
                    </video>
                </div>
                <div className={cx('recommendations')}>
                    <div className={cx('header')}>
                        <h3>viet nam pingo craft company ltd.</h3>
                    </div>
                    <div className={cx('footer')}>

                    </div>
                </div>
            </div>
            <div className={cx('our-info')}>
                <div className={cx('advantages')}>
                    <Advantages />
                </div>
                <div className={cx('factory')}>
                    <OurInfo />
                </div>
            </div>
        </div>
    )
}

export default Home