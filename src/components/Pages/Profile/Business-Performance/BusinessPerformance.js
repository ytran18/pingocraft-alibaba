import classnames from 'classnames/bind'
import styles from './BusinessPerformance.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons' 

const cx = classnames.bind(styles)

function BusinessPerformance() 
{
    return (
        <div className={cx('lg:w-[960px] w-[100%]')}>
            <div className={cx('top')}>
                <h6>Buyer Interaction</h6>
                <div className={cx('lg:flex','interactions')}>
                    <div className={cx('info','mb-[1.5rem]')}>
                        <p>Response rate</p>
                        <div>
                            <FontAwesomeIcon icon={faShare} className={cx('icons')}/>
                            61.9%
                        </div>
                    </div>
                    <div className={cx('info','mb-[1.5rem]')}>
                        <p>Response Time</p>
                        <div>
                            <FontAwesomeIcon icon={faClock} className={cx('icons')}/>
                            ≤18h
                        </div>
                    </div>
                    <div className={cx('info','mb-[1.5rem]')}>
                        <p>Quotation Performance</p>
                        <div>
                            4
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('below','hidden lg:block')}>
                <h6>Transaction History</h6>
                <div className={cx('interactions')}>
                    <div className={cx('info')}>
                        <p>Transactions</p>
                        <div>
                            -
                        </div>
                    </div>
                    <div className={cx('info')}>
                        <p>Total Amount</p>
                        <div>
                            -
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessPerformance