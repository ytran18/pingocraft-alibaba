import classnames from 'classnames/bind'
import styles from './ContactInformation.module.scss'

const cx = classnames.bind(styles)

function ContactInformation ()
{
    return (
        <div className={cx('mt-[2rem] border-[1px] mx-[3rem] h-[290px]')}>

            <div className={cx(' flex text-[16px] py-[2rem]')}>

                <div className={cx('w-[40%] flex flex-col')}> 
                    <p className={cx('text-right')}>Company Name:</p>
                    <p className={cx('text-right')}>Operational Address:</p>
                    <p className={cx('text-right')}>Website:</p>
                    <p className={cx('text-right')}>Facebook:</p>
                    <p className={cx('text-right')}>Email:</p>
                </div>

                <div className={cx('w-[60%] ml-[2rem] flex flex-col justify-center')}> 
                    <p>VIET NAM PINGO CRAFT COMPANY LIMITED</p>
                    <p>TX25, Ho Chi Minh, Ho Chi Minh City, Vietnam</p>
                    <p><a href='https://skypopcards.com/' target="_blank" rel="noopener noreferrer">https://skypopcards.com/</a></p>
                    <p><a href='http://www.facebook.com/Skypop-Cards-1471276053008114' target="_blank" rel="noopener noreferrer">http://www.facebook.com/Skypop-Cards-1471276053008114/</a></p>
                    <p>skypopcards@gmail.com</p>
                </div>

            </div>

        </div>
    )
}

export default ContactInformation