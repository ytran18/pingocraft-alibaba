import classnames from 'classnames/bind'
import styles from './SidebarProduct.module.scss'

const cx = classnames.bind(styles)

function SidebarProduct ({ picture, title, price, minOrder, id })
{
    return (
        <div className={cx('mb-[12px] relative h-[90px] w-[202px] flex items-center')}>
            <div className={cx('w-[40%]')}>
                <a href={`/products/${id}`} target="_blank" rel="noopener noreferrer">
                    <img alt='img' src={picture} className={cx('w-[80px] h-[80px]')}/>
                </a>
            </div>
            <div className={cx('w-[60%] ml-[1rem]')}>
                <div className={cx('text-[12px] mb-[0.5rem]')}>
                    <a href={`/products/${id}`} className={cx('title','no-underline')} target="_blank" rel="noopener noreferrer">{title}</a>
                </div>
                <div className={cx('text-[10px] mb-[0.5rem] font-bold')}>
                    <span>{`${price[2]} - ${price[0]}`}</span>
                </div>
                <div className={cx('text-[10px]')}>
                    <span><span className={cx('font-bold')}>{minOrder}</span>(Min.Order)</span>
                </div>
            </div>
        </div>
    )
}

export default SidebarProduct