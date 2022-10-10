import classnames from 'classnames/bind'
import styles from './Sidebar.module.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShop, faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'

const cx = classnames.bind(styles)

function Sidebar()
{
    return (
        <div className={cx('hidden lg:flex lg:flex-col lg:w-[20%]')}>

            <div className={cx('lg:w-[220px] lg:h-[53px] lg:flex lg:items-center lg:justify-center lg:bg-[#e9eff5] lg:rounded-[10px] lg:border-solid lg:border-[#e3e9f2]')}>
                <FontAwesomeIcon icon={faShop}  className={cx('lg:w-[20px] lg:h-[20px]')}/>
                <div className={cx('lg:ml-[0.75rem] lg:text-[17px]')}>Top picks</div>
            </div>

            <div className={cx('sidebar-categories','lg:w-[220px] lg:h-[114px] lg:rounded-t-[10px] lg:mt-[2rem]')}>
                <div className={cx('categories-text','lg:h-[50%] lg:text-[#fae6e7] lg:text-[17px] lg:flex lg:items-center lg:font-bold lg:justify-center')}>
                    <p>Products Categories</p>
                </div>
                <div className={cx('lg:h-[50%] lg:w-[100%] lg:text-[17px] lg:flex lg:items-center lg:justify-center lg:cursor-pointer')}>
                    <p className={cx('lg:w-[100%] lg:text-center lg:hover:text-[#5151c7]')}>3D Pop up Card</p>
                    {/* <div className={cx('catesgories-submenu')}>
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
                    </div> */}
                </div>
            </div>

            <div className={cx('sidebar-products','lg:w-[220px] lg:h-[452px] lg:mt-[2rem] lg:rounded-[10px]')}>
                <div className={cx('products-toppick','lg:w-[100%] lg:h-[416px]')}>

                </div>
                <div className={cx('lg:w-[100% lg:h-[36px]] lg:flex')}>
                    <div className={cx('lg:left','lg:w-[50%] lg:flex lg:justify-center lg:items-center lg:cursor-pointer')}>
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </div>
                    <div className={cx('lg:w-[50%] lg:flex lg:justify-center lg:items-center lg:cursor-pointer')}>   
                        <FontAwesomeIcon icon={faAngleUp}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar