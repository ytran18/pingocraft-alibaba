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
                <h6>high quality</h6>
            </div>

            <div className={cx('advantages-footer')}>
                
                <div className={cx('icons-wrapper')}>
                    <div className={cx('icons-background')}>
                        <FontAwesomeIcon icon={faThumbsUp} className={cx('advantages-icons')}/>
                    </div>
                    <p>High Quality</p>
                    <br />
                </div>

                <div className={cx('icons-wrapper')}>
                    <div className={cx('icons-background')}>
                        <FontAwesomeIcon icon={faMedal} className={cx('advantages-icons')}/>
                    </div>
                    <p>Certificates</p>
                    <br />
                </div>

                <div className={cx('icons-wrapper')}>
                    <div className={cx('icons-background')}>
                        <FontAwesomeIcon icon={faHandshake} className={cx('advantages-icons')}/>
                    </div>
                    <p>Reasonable price and Durable over time</p>
                </div>

                <div className={cx('icons-wrapper')}>
                    <div className={cx('icons-background')}>
                        <FontAwesomeIcon icon={faPeopleGroup} className={cx('advantages-icons')}/>
                    </div>
                    <p>Support 24/7</p>
                    <br />
                </div>

                <div className={cx('icons-wrapper')}>
                    <div className={cx('icons-background')}>
                        <FontAwesomeIcon icon={faUserTie} className={cx('advantages-icons')}/>
                    </div>
                    <p>Ethical business dealings</p>
                </div>

                <div className={cx('icons-wrapper')}>
                    <div className={cx('icons-background')}>
                        <FontAwesomeIcon icon={faTruck} className={cx('advantages-icons')}/>
                    </div>
                    <p>Delivery on time</p>
                    <br />
                </div>

            </div>

        </div>
    )
}

export default Advantages