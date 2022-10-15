import classnames from 'classnames/bind'
import styles from './SingleProduct.module.scss'

const cx = classnames.bind(styles)

function SingleProduct ({ picture, title, price, minOrder, id })
{

    return (
        <div className={cx('container','rounded-[7px] p-[7px] shadow-[0_2px_8px_rgba(0,0,0,.1)] md:w-[234px] md:h-[386px] mr-[8px] mb-[8px]')}>
            
            <a href={`/products/${id}`} className={cx('md:w-[220px] md:h-[220px]')}>
                <div>
                    <img alt='img' src={picture} className={cx('md:w-[220px] md:h-[220px] w-[318px]')}/>
                </div>
            </a>

            <div className={cx('info')}>
                
                <div className={cx('title')}>
                    <a href={`/products/${id}`}>
                        {title}
                    </a>
                </div>

                <div className={cx('price')}>
                    <span className={cx('number')}>{`${price[2]} - ${price[0]}`}</span>
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