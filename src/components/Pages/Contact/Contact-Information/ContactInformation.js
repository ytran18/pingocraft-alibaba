import classnames from 'classnames/bind'
import styles from './ContactInformation.module.scss'

const cx = classnames.bind(styles)

function ContactInformation ()
{
    return (
        <div className={cx('mt-[2rem] border-[1px] lg:mx-[3rem]')}>

            <div className={cx('flex text-[16px] py-[2rem]')}>

                <div className={cx('flex flex-col w-[100%]')}> 
                    <div className={cx('flex')}>
                        <p className={cx('text-right lg:w-[40%] w-[30%] mr-[1rem]')}>Company Name:</p>
                        <p className={cx('w-[60%]')}>VIET NAM PINGO CRAFT COMPANY LIMITED</p>
                    </div>

                    <div className={cx('flex')}>
                        <p className={cx('text-right lg:w-[40%] w-[30%] mr-[1rem]')}>Operational Address:</p>
                        <p className={cx('w-[60%]')}>TX25, Ho Chi Minh, Ho Chi Minh City, Vietnam</p>
                    </div>

                    <div className={cx('flex')}>
                        <p className={cx('text-right lg:w-[40%] w-[30%] mr-[1rem]')}>Website:</p>
                        <p className={cx('w-[60%]')}><a href='https://skypopcards.com/' target="_blank" rel="noopener noreferrer">https://skypopcards.com/</a></p>
                    </div>

                    <div className={cx('flex')}>
                        <p className={cx('text-right lg:w-[40%] w-[30%] mr-[1rem]')}>Facebook:</p>
                        <p className={cx('w-[60%]')}><a href='http://www.facebook.com/Skypop-Cards-1471276053008114' target="_blank" rel="noopener noreferrer">http://www.facebook.com/Skypop-Cards-1471276053008114/</a></p>
                    </div>
                    
                    <div className={cx('flex')}>
                        <p className={cx('text-right lg:w-[40%] w-[30%] mr-[1rem]')}>Email:</p>
                        <p className={cx('w-[60%]')}>skypopcards@gmail.com</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ContactInformation