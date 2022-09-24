import classnames from 'classnames/bind'
import styles from './Home.module.scss'

import {Box, Carousel, Image} from 'grommet'

import slideImg1 from '../../assets/slider/slider1.jpeg'
import slideImg2 from '../../assets/slider/slider2.jpeg'
import slideImg3 from '../../assets/slider/slider3.jpeg'

const cx = classnames.bind(styles)

function Home() 
{

    return (
        <div className={cx('container')}>
            
            {/* slide show */}
            <Box overflow={'hidden'}>
                <Carousel play={'5000'}>
                    <Image src={slideImg1}/>
                    <Image src={slideImg2}/>
                    <Image src={slideImg3}/>
                </Carousel>
            </Box>
        </div>
    )
}

export default Home