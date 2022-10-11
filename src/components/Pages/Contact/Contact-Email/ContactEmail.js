import classnames from 'classnames/bind'
import styles from './ContactEmail.module.scss'

const cx = classnames.bind(styles)

function ContactEmail()
{
    return (
        <div className={cx('mt-[2rem] border-[1px] mx-[3rem] h-[310px]')}>
            <div className={cx(' flex text-[16px] py-[2rem]')}>

                <div className={cx('w-[40%] flex flex-col')}> 
                    <p  className={cx('text-right')}>To:</p>
                    <p  className={cx('text-right')}>Message:</p>
                </div>

                <div className={cx('w-[60%] ml-[2rem] flex flex-col')}> 
                    <p>Pingo Craft</p>
                    <div className={cx(' w-[675px] h-[94px] rounded-[10px] border-[1px]','input')}>
                        <textarea type={'text'} placeholder="Enter your inquiry details such as product name, color, size, quantity, material, etc." className={cx('w-[665px] h-[84px] rounded-[10px] outline-none p-[10px]')}></textarea>
                    </div>
                    <p className={cx('mt-[0.3rem] text-[14px] text-orange-500 hidden')}>Content is required</p>
                    <input type={'submit'} value={'Send'} className={cx('w-[100px] h-[40px] border-[1px] rounded-[100px] mt-[0.5rem] bg-orange-500 text-white')} />
                </div>

            </div>

        </div>
    )
}

export default ContactEmail