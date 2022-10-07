import classnames from 'classnames/bind'
import styles from './SingleProduct.module.scss'

import { Link } from 'react-router-dom'

const cx = classnames.bind(styles)

function SingleProduct ({ picture, title, price, minOrder, id })
{
    return (
        <div className={cx('container')}>
            
            <Link to={`/products/${id}`} className={cx('image')}>
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