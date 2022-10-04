import classnames from 'classnames/bind'
import styles from './Products.module.scss'

import allproducts from '../../../../assets/data/AllProducts'
import SingleProduct from '../../../Single-Product/SingleProduct'

const cx = classnames.bind(styles)

function Products ()
{
    return (
        <div className={cx('container')}>
            <div className={cx('products')}>
                {
                    allproducts.map((product) =>
                    {
                        return (
                            <>
                                <SingleProduct picture={product.image} title={product.title}  price={product.price} minOrder={product.minOrder}/>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products