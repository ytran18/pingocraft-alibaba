import classnames from 'classnames/bind'
import styles from './Sidebar.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightDots, faChartPie, faWrench } from '@fortawesome/free-solid-svg-icons'

const cx = classnames.bind(styles)

function Sidebar( )
{
    return (
        <div className={cx('container')}>
            <div className={cx('sidebar-nav')}>
                <a href='#overview' className={cx('nav-items')} >
                    <FontAwesomeIcon icon={faBuilding} className={cx('icon')}/>
                    <p>Company Overview</p>
                </a>
                <a href='#product' className={cx('nav-items')}>
                    <FontAwesomeIcon icon={faWrench} className={cx('icon')}/>
                    <p>Production Capacity</p>
                </a>
                <a href='#trade' className={cx('nav-items')}>
                    <FontAwesomeIcon icon={faArrowUpRightDots} className={cx('icon')}/>
                    <p>Trade Capacity</p>
                </a>
                <a href='#business' className={cx('nav-items')}>
                    <FontAwesomeIcon icon={faChartPie} className={cx('icon')}/>
                    <p>Business Performance</p>
                </a>
            </div>
        </div>
    )
}

export default Sidebar