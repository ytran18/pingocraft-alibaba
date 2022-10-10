import classnames from 'classnames/bind'
import styles from './SingleProduct.module.scss'

import { Link } from 'react-router-dom'

const cx = classnames.bind(styles)

function SingleProduct ({ picture, title, price, minOrder, id })
{
    return (
        <div className={cx('container','rounded-[7px] p-[7px] shadow-[0_2px_8px_rgba(0,0,0,.1)] w-[234px] h-[386px] mr-[8px] mb-[8px]')}>
            
            <Link to={`/products/${id}`} className={cx('w-[220px] h-[220px]')}>
                <div>
                    <img alt='img' src={picture} className={cx('single-img')}/>
                </div>
            </Link>

            <div className={cx('info')}>
                
                <div className={cx('title')}>
                    <Link to={`/products/${id}`}>
                        {title}
                    </Link>
                </div>

                <div className={cx('price')}>
                    <span className={cx('number')}>{price}</span>
                    <span className={cx('unit')}>
                        <span className={cx('seperate')}>/</span>
                        piece
                    </span>
                </div>

                <div className={cx('min-order')}>
                    <span className={cx('value')}>{minOrder}</span>
                    <span className={cx('description')}>(Min. Order)</span>
                </div>
            
            </div>

        </div>
    )
}

export default SingleProduct