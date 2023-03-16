import classnames from 'classnames/bind'
import styles from './Home.module.scss'

import {Box, Carousel, Image} from 'grommet'

import { useState, useEffect } from 'react'

import axios from 'axios'


// components
import OurInfo from '../../components/Pages/Home/OurInfo/OurInfo'
import Flag from '../../components/Pages/Home/Flag-Language/Flag'
import AboutUs from '../../components/Pages/Home/AboutUs/AboutUs'
import Advantages from '../../components/Pages/Home/Advantages/Advantages'
import SingleProduct from '../../components/Single-Product/SingleProduct'

// video
import VID001 from '../../assets/video/VID001.mp4'

import slideImg1 from '../../assets/slider/slider1.jpeg'
import slideImg2 from '../../assets/slider/slider2.jpeg'
import slideImg3 from '../../assets/slider/slider3.jpeg'


const cx = classnames.bind(styles)

function Home() 
{

    const [products, setProducts] = useState([])

    useEffect(() => 
    {
        const fetchproducts = async () => 
        {
            const { data } = await axios.get("https://pingocraft.onrender.com/api/products");
            setProducts(data);
        }; 
        fetchproducts();
    },[])

    const [currentData, setCurrentData] = useState(products.slice(0,10));

    useEffect(() =>
    {
        const nextData = products.slice(0, 10);
        setCurrentData(nextData); 
    },[products])


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
            <div className={cx('flag-container','hidden lg:block')}>
                <Flag />
            </div>
            <br />
            <div className={cx('about-us','hidden lg:block')}>
                <AboutUs />
            </div>

            <div className={cx('new-release','lg:hidden flex flex-col justify-center items-center')}>
                <h2>New Release</h2>
                <hr className={cx('w-[15%]')}/>
                {
                    currentData.map((product, index) =>
                    {
                        return (
                            <SingleProduct picture={product.image} title={product.title} price={product.price} minOrder={product.minOrder} id={product._id} key={index}/>
                        )
                    })
                }
            </div>

            <div className={cx('flex justify-center mt-[2rem]')}>
                <div className={cx('hidden lg:block w-[720px] h-[450px]')}>
                    <video controls width={'700'} height={'400'}>
                        <source src={VID001} type="video/mp4"/>
                    </video>
                </div>
                <div className={cx('lg:flex lg:flex-col hidden')}>
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
                <div className={cx('factory','hidden lg:block')}>
                    <OurInfo />
                </div>
            </div>
        </div>
    )
}

export default Home