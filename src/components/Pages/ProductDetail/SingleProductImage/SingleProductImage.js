import classnames from 'classnames/bind'
import styles from './SingleProductImage.module.scss'

import { useState } from 'react'

const cx = classnames.bind(styles)

function SingleProductImage ({ imageList })
{
    let list = []
    
    if(imageList)
    {
        list = imageList
    }

    const [picture, setPicture] = useState(list[0])

    return (
        <div className={cx('flex flex-col justify-center items-center')}>
            <div className={cx('flex justify-center items-center my-[40px] relative overflow-hidden','single-img')}>
                <img alt='img' src={picture || list[0]} className={cx('lg:w-[350px] lg:h-[350px]','picture')}/>
            </div>
            <div className={cx('image-list')}>
                {
                    list.map((image, index) =>
                    {
                        return (
                            <div  key={index}>
                                <img alt='img-list' src={image} className={cx('list')} onClick={() => setPicture(image)}/>                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SingleProductImage