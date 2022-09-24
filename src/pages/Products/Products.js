import classNames from "classnames/bind"
import styles from './Products.module.scss'
import Header from '../../Layout/Header/Header'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShop} from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Products() {
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <Header /> 
            </div>

            <div className={cx('products')}>
                <div className={cx('sidebar')}>
                    <div className={cx('sidebar-toppick')}>
                            <FontAwesomeIcon icon={faShop}  className={cx('shop-icon')}/>
                            <p>Top picks</p>
                    </div>
                    <div className={cx('sidebar-categories')}>
                        <div className={cx('categories-text')}>
                            <p>Products Categories</p>
                        </div>
                        <div className={cx('categories-info')}>
                            <p>3D Pop up Card</p>
                            <div className={cx('catesgories-submenu')}>
                                <div className={cx('catesgories-menu')}>
                                    <p className={cx('categories-items')}>Birthday Pop up Card</p>
                                    <p className={cx('categories-items')}>Wedding Pop up Card</p>
                                    <p className={cx('categories-items')}>Building Pop up Card</p>
                                    <p className={cx('categories-items')}>Love Pop up Card</p>
                                    <p className={cx('categories-items')}>Flower Pop up Card</p>
                                    <p className={cx('categories-items')}>Anniversary Pop up Card</p>
                                    <p className={cx('categories-items')}>Chrismass Pop up Card</p>
                                    <p className={cx('categories-items')}>Animal Pop up Card</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('sidebar-products')}>
                        <div className={cx('products-toppick')}>

                        </div>
                        <div className={cx('products-navigation')}>
                            <div className={cx('left')}>

                            </div>
                            <div className={cx('right')}>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('main-content')}>

                </div>
            </div>
        </div>
    )
}

export default Products