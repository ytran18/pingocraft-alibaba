import classnames from 'classnames/bind'
import styles from './Home.module.scss'

import {Box, Carousel, Image} from 'grommet'


// components
import OurInfo from '../../components/Pages/Home/OurInfo/OurInfo'
import Flag from '../../components/Pages/Home/Flag-Language/Flag'
import AboutUs from '../../components/Pages/Home/AboutUs/AboutUs'
import Advantages from '../../components/Pages/Home/Advantages/Advantages'

// video
import VID001 from '../../assets/video/VID001.mp4'

import slideImg1 from '../../assets/slider/slider1.jpeg'
import slideImg2 from '../../assets/slider/slider2.jpeg'
import slideImg3 from '../../assets/slider/slider3.jpeg'


const cx = classnames.bind(styles)

function Home() 
{
    return (
        <div className={cx('relative')}>
            
            {/* slide show */}
            <div className={cx('z-[2]')}>
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
            <div className={cx('flex justify-center mt-[2rem]')}>
                <div className={cx('w-[720px] h-[450px]')}>
                    <video controls width={'700'} height={'400'}>
                        <source src={VID001} type="video/mp4"/>
                    </video>
                </div>
                <div className={cx('flex flex-col')}>
                    <div className={cx('uppercase text-[18px]')}>
                        <h3>viet nam pingo craft company ltd.</h3>
                    </div>
                    <div className={cx('w-[500px] h-[369px] border-[#dbdbdb]')}>
                        
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