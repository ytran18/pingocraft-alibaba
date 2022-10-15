import classnames from 'classnames/bind'
import styles from './Advantages.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faMedal, faPeopleGroup, faUserTie, faTruck} from '@fortawesome/free-solid-svg-icons'

const cx = classnames.bind(styles)

function Advantages ()
{
    return (
        <div className={cx('container')}>
            <div className={cx('advantages-top')}>
                <h1>our advantages</h1>
                <hr style={{width:"25%"}}/>
            </div>

            <div className={cx('advantages-footer','text-[13px] lg:flex mt-[1rem] justify-center items-center')}>
                
                <div className={cx('icons-wrapper','lg:w-[16%] flex flex-col justify-center items-center mt-[1rem]')}>
                    <div className={cx('icons-background','flex flex-col justify-center items-center lg:w-[120px] lg:h-[120px] w-[250px] h-[250px] ')}>
                        <FontAwesomeIcon icon={faThumbsUp} className={cx('advantages-icons','lg:w-[52px] lg:h-[52px] w-[140px] h-[140px]')}/>
                    </div>
                    <p className={cx('mt-[1rem]')}>High Quality</p>
                    <br className={cx('hidden lg:block')} />
                    <br className={cx('hidden lg:block')} />
                    <br className={cx('hidden lg:block')} />
                </div>

                <div className={cx('icons-wrapper','lg:w-[16%] flex flex-col justify-center items-center mt-[1rem]')}>
                    <div className={cx('icons-background','flex flex-col justify-center items-center lg:w-[120px] lg:h-[120px] w-[250px] h-[250px] ')}>
                        <FontAwesomeIcon icon={faMedal} className={cx('advantages-icons','lg:w-[52px] lg:h-[52px] w-[140px] h-[140px]')}/>
                    </div>
                    <p className={cx('mt-[1rem]')}>Certificates</p>
                    <br className={cx('hidden lg:block')} />
                    <br className={cx('hidden lg:block')} />
                    <br className={cx('hidden lg:block')} />
                </div>

                <div className={cx('icons-wrapper','lg:w-[16%] flex flex-col justify-center items-center mt-[1rem]')}>
                    <div className={cx('icons-background','flex flex-col justify-center items-center lg:w-[120px] lg:h-[120px] w-[250px] h-[250px] ')}>
                        <FontAwesomeIcon icon={faHandshake} className={cx('advantages-icons','lg:w-[52px] lg:h-[52px] w-[140px] h-[140px]')}/>
                    </div>
                    <p className={cx('mt-[1rem]')}>Reasonable price and Durable over time</p>
                </div>

                <div className={cx('icons-wrapper','lg:w-[16%] flex flex-col justify-center items-center mt-[1rem]')}>
                    <div className={cx('icons-background','flex flex-col justify-center items-center lg:w-[120px] lg:h-[120px] w-[250px] h-[250px] ')}>
                        <FontAwesomeIcon icon={faPeopleGroup} className={cx('advantages-icons','lg:w-[52px] lg:h-[52px] w-[140px] h-[140px]')}/>
                    </div>
                    <p className={cx('mt-[1rem]')}>Support 24/7</p>
                    <br className={cx('hidden lg:block')}/>
                    <br className={cx('hidden lg:block')} />
                    <br className={cx('hidden lg:block')} />
                </div>

                <div className={cx('icons-wrapper',' lg:w-[16%] flex flex-col justify-center items-center mt-[1rem]')}>
                    <div className={cx('icons-background','flex flex-col justify-center items-center lg:w-[120px] lg:h-[120px] w-[250px] h-[250px] ')}>
                        <FontAwesomeIcon icon={faUserTie} className={cx('advantages-icons','lg:w-[52px] lg:h-[52px] w-[140px] h-[140px]')}/>
                    </div>
                    <p className={cx('mt-[1rem]')}>Ethical business dealings</p>
                    <br className={cx('hidden lg:block')} />
                </div>

                <div className={cx('icons-wrapper','lg:w-[16%] flex flex-col justify-center items-center mt-[1rem]')}>
                    <div className={cx('icons-background','flex flex-col justify-center items-center lg:w-[120px] lg:h-[120px] w-[250px] h-[250px] ')}>
                        <FontAwesomeIcon icon={faTruck} className={cx('advantages-icons','lg:w-[52px] lg:h-[52px] w-[140px] h-[140px]')}/>
                    </div>
                    <p className={cx('mt-[1rem]')}>Delivery on time</p>
                    <br className={cx('hidden lg:block')} />
                    <br className={cx('hidden lg:block')} />
                    <br className={cx('hidden lg:block')} />
                </div>

            </div>

        </div>
    )
}

export default Advantages