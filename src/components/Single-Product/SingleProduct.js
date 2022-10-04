import classnames from 'classnames/bind'
import styles from './SingleProduct.module.scss'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const cx = classnames.bind(styles)

function SingleProduct ({ picture, title, price, minOrder })
{
    return (
        <div className={cx('container')}>
            
            <a href='/' className={cx('image')}>
                <div>
                    <img alt='img' src={picture} className={cx('single-img')}/>
                </div>
            </a>

            <div className={cx('info')}>
                
                <div className={cx('title')}>
                    <a href='/'>
                        {title}
                    </a>
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