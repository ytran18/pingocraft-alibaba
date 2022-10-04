import classnames from 'classnames/bind'
import styles from './AboutUs.module.scss'


import Card from '../../../Card/Card'

import aboutusImg1 from '../../../../assets/img/IMG001.png'
import aboutusImg2 from '../../../../assets/img/IMG002.png'
import aboutusImg3 from '../../../../assets/img/IMG003.png'

import IMG001 from '../../../../assets/img/IMG004.png'
import IMG002 from '../../../../assets/img/IMG005.png'
import IMG003 from '../../../../assets/img/IMG006.png'
import IMG004 from '../../../../assets/img/IMG007.png'

const cx = classnames.bind(styles)

function AboutUs ()
{
    return (
        <div className={cx('container')}>
            
            <div className={cx('about-us-container')}>
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

            <div className={cx('card')}>
                <div className={cx('card-title')}>
                    <h1>main products</h1>
                </div>
                <div className={cx('card-info')}>
                    <div>
                        <Card picture={IMG001} headline="custom design pop card"/>
                    </div>
                    <div>
                        <Card picture={IMG002} headline="decor pop ornament"/>
                    </div>
                </div>
                <div className={cx('card-info')}>
                    <div>
                        <Card picture={IMG003} headline="flower pop pot"/>
                    </div>
                    <div>
                        <Card picture={IMG004} headline="pop up card"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUs