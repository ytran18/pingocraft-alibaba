import classnames from "classnames/bind";
import styles from './Card.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const cx = classnames.bind(styles)

function Card ({ picture, headline })
{
    return (
        <div className={cx('container')}>
            <div className={cx('picture')}>
                <img alt="img" src={picture} className={cx('img')}/>
            </div>
            <div className={cx('headline')}>
                <p>{headline}</p>
                <div>
                    <FontAwesomeIcon icon={faCartShopping}/>
                </div>
            </div>
        </div>
    )
}

export default Card