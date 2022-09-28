import classnames from 'classnames/bind'
import styles from './Home.module.scss'

import {Box, Carousel, Image} from 'grommet'

// translate
import { withNamespaces } from 'react-i18next'
import i18n from '../../i18n'


import slideImg1 from '../../assets/slider/slider1.jpeg'
import slideImg2 from '../../assets/slider/slider2.jpeg'
import slideImg3 from '../../assets/slider/slider3.jpeg'

import aboutusImg1 from '../../assets/img/IMG001.png'
import aboutusImg2 from '../../assets/img/IMG002.png'
import aboutusImg3 from '../../assets/img/IMG003.png'

import Germany from '../../assets/flag/germany.png'
import Portugal from '../../assets/flag/portugal.png'
import Spain from '../../assets/flag/spain.png'
import France from '../../assets/flag/france.png'
import Italy from '../../assets/flag/italy.png'
import Russia from '../../assets/flag/russia.png'
import Korea from '../../assets/flag/south-korea.png'
import Japan from '../../assets/flag/japan.png'
import Argentina from '../../assets/flag/argentina.png'
import Thailand from '../../assets/flag/thailand.png'
import Vietnam from '../../assets/flag/vietnam.png'
import Turkey from '../../assets/flag/turkey.png'
import Netherland from '../../assets/flag/netherlands.png'
import Indonesia from '../../assets/flag/indonesia.png'
import Jew from '../../assets/flag/israel.png'
import India from '../../assets/flag/india.png'
const cx = classnames.bind(styles)

function Home() 
{

    const changeLanguage = (lng) =>
    {
        i18n.changeLanguage(lng)
    }

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
                <div className={cx('col')}>
                    <div className={cx('flag-language')}>
                        <img alt='germany' src={Germany} className={cx('flag')}/>
                        <p>Deutsch</p>
                    </div>
                    
                    <div className={cx('flag-language')}>
                        <img alt='argentina' src={Argentina} className={cx('flag')}/>
                        <p>Español</p>
                    </div>
                </div>
                <div className={cx('col')}>
                    <div className={cx('flag-language')}>
                        <img alt='portugal' src={Portugal} className={cx('flag')}/>
                        <p>Português</p>
                    </div>
                    
                    <div className={cx('flag-language')}>
                        <img alt='thailand' src={Thailand} className={cx('flag')}/>
                        <p>ภาษาไทย</p>
                    </div>
                </div>
                <div className={cx('col')}>
                    <div className={cx('flag-language')}>
                        <img alt='spain' src={Spain} className={cx('flag')}/>
                        <p>Español</p>
                    </div>
                    
                    <div className={cx('flag-language')} onClick={() => changeLanguage('vn')}>
                        <img alt='vietnam' src={Vietnam} className={cx('flag')}/>
                        <p>Tiếng Việt</p>
                    </div>
                </div>
                <div className={cx('col')}>
                    <div className={cx('flag-language')}>
                        <img alt='france' src={France} className={cx('flag')}/>
                        <p>Français</p>
                    </div>
                    
                    <div className={cx('flag-language')}>
                        <img alt='turkey' src={Turkey} className={cx('flag')}/>
                        <p>Türk</p>
                    </div>
                </div>
                <div className={cx('col')}>
                    <div className={cx('flag-language')}>
                        <img alt='italy' src={Italy} className={cx('flag')}/>
                        <p>Italiano</p>
                    </div>
                    
                    <div className={cx('flag-language')}>
                        <img alt='netherland' src={Netherland} className={cx('flag')}/>
                        <p>Nederlands</p>
                    </div>
                </div>
                <div className={cx('col')}>
                    <div className={cx('flag-language')}>
                        <img alt='russia' src={Russia} className={cx('flag')}/>
                        <p>Русский</p>
                    </div>
                    
                    <div className={cx('flag-language')}>
                        <img alt='indonesia' src={Indonesia} className={cx('flag')}/>
                        <p>Inodnesian</p>
                    </div>
                </div>
                <div className={cx('col')}>
                    <div className={cx('flag-language')}>
                        <img alt='korea' src={Korea} className={cx('flag')}/>
                        <p>한국어</p>
                    </div>
                    
                    <div className={cx('flag-language')}>
                        <img alt='jew' src={Jew} className={cx('flag')}/>
                        <p>עִברִית</p>
                    </div>
                </div>
                <div className={cx('col')}>
                    <div className={cx('flag-language')}>
                        <img alt='japan' src={Japan} className={cx('flag')}/>
                        <p>日本語</p>
                    </div>
                    
                    <div className={cx('flag-language')}>
                        <img alt='india' src={India} className={cx('flag')}/>
                        <p>हिन्दी</p>
                    </div>
                </div>
            </div>
            <br />
            <div className={cx('about-us')}>
                <div className={cx('aboutus-leftside')}>
                    {/* <h1>viet nam pingo craft company ltd.</h1> */}
                </div>
                <div className={cx('aboutus-center')}>
                    <div className={cx('aboutusImg1')}>
                        <img alt='about-us-center-img-1' src={aboutusImg1}/>
                    </div>
                    <div className={cx('aboutusImg2')}>
                        <img alt='about-us-center-img-2' src={aboutusImg2}/>
                    </div>
                </div>
                <div className={cx('aboutus-rightside')}>
                    <div className={cx('rightside-text')}>
                        <h1 className={cx('headline')}>
                            About Us
                        </h1> 
                        <p>
                            Skypopcards Vietnam is a famous handmade greeting card and manufacturer in Vietnam. With the big desire of bringing things in real life into each paper artwork, Skypopcard's creative team always gives customers the most unique and sophisticated products. It's made with all their heart and effort.
                        </p>
                        <p>
                            Skypopcards's cards appear on almost all poplular special occasions in your daily life, such as New Year, Valentine, Christmas, Birthday, Thank You, Mother's Day, Father's Day, Wedding and Congratulations, Skypopcards make your life much more colorful because it includes every magical thing in each pop-up model. So, we hope you enjoy your day in the most beautiful and meaningful way.
                        </p>
                        <p>
                            Skypopcards can customize your own gift cards by professionally printing/laser-cutting your company name, logo or message inside and even printing your address and information on the envelop flap.
                        </p>
                    </div>
                    <div className={cx('rightside-img')}>
                        <div>
                            <img alt='about-us-right-side-img' src={aboutusImg3}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home