import classnames from 'classnames/bind'
import styles from './Flag.module.scss'

import i18n from '../../../i18n'

import Germany from '../../../assets/flag/germany.png'
import Portugal from '../../../assets/flag/portugal.png'
import Spain from '../../../assets/flag/spain.png'
import France from '../../../assets/flag/france.png'
import Italy from '../../../assets/flag/italy.png'
import Russia from '../../../assets/flag/russia.png'
import Korea from '../../../assets/flag/south-korea.png'
import Japan from '../../../assets/flag/japan.png'
import Argentina from '../../../assets/flag/argentina.png'
import Thailand from '../../../assets/flag/thailand.png'
import Vietnam from '../../../assets/flag/vietnam.png'
import Turkey from '../../../assets/flag/turkey.png'
import Netherland from '../../../assets/flag/netherlands.png'
import Indonesia from '../../../assets/flag/indonesia.png'
import Jew from '../../../assets/flag/israel.png'
import India from '../../../assets/flag/india.png'


const cx = classnames.bind(styles)

function Flag ()
{

    const changeLanguage = (lng) =>
    {
        i18n.changeLanguage(lng)
    }

    return (
        <div className={cx('container')}>
            <div className={cx('col')}>
                <div className={cx('flag-language')}>
                    <img alt='germany' src={Germany} className={cx('flag')}/>
                    <p>Deutsch</p>
                </div>
                
                <div className={cx('flag-language')}>
                    <img alt='argentina' src={Argentina} className={cx('flag')}/>
                    <p>Español</p>
                </div>
            </div>

            <div className={cx('col')}>
                <div className={cx('flag-language')}>
                    <img alt='portugal' src={Portugal} className={cx('flag')}/>
                    <p>Português</p>
                </div>
                
                <div className={cx('flag-language')}>
                    <img alt='thailand' src={Thailand} className={cx('flag')}/>
                    <p>ภาษาไทย</p>
                </div>
            </div>

            <div className={cx('col')}>
                <div className={cx('flag-language')}>
                    <img alt='spain' src={Spain} className={cx('flag')}/>
                    <p>Español</p>
                </div>
                
                <div className={cx('flag-language')} onClick={() => changeLanguage('vn')}>
                    <img alt='vietnam' src={Vietnam} className={cx('flag')}/>
                    <p>Tiếng Việt</p>
                </div>
            </div>

            <div className={cx('col')}>
                <div className={cx('flag-language')}>
                    <img alt='france' src={France} className={cx('flag')}/>
                    <p>Français</p>
                </div>
                
                <div className={cx('flag-language')}>
                    <img alt='turkey' src={Turkey} className={cx('flag')}/>
                    <p>Türk</p>
                </div>
            </div>

            <div className={cx('col')}>
                <div className={cx('flag-language')}>
                    <img alt='italy' src={Italy} className={cx('flag')}/>
                    <p>Italiano</p>
                </div>
                
                <div className={cx('flag-language')}>
                    <img alt='netherland' src={Netherland} className={cx('flag')}/>
                    <p>Nederlands</p>
                </div>
            </div>

            <div className={cx('col')}>
                <div className={cx('flag-language')}>
                    <img alt='russia' src={Russia} className={cx('flag')}/>
                    <p>Русский</p>
                </div>
                
                <div className={cx('flag-language')}>
                    <img alt='indonesia' src={Indonesia} className={cx('flag')}/>
                    <p>Inodnesian</p>
                </div>
            </div>

            <div className={cx('col')}>
                <div className={cx('flag-language')}>
                    <img alt='korea' src={Korea} className={cx('flag')}/>
                    <p>한국어</p>
                </div>
                
                <div className={cx('flag-language')}>
                    <img alt='jew' src={Jew} className={cx('flag')}/>
                    <p>עִברִית</p>
                </div>
            </div>

            <div className={cx('col')}>
                <div className={cx('flag-language')}>
                    <img alt='japan' src={Japan} className={cx('flag')}/>
                    <p>日本語</p>
                </div>
                
                <div className={cx('flag-language')}>
                    <img alt='india' src={India} className={cx('flag')}/>
                    <p>हिन्दी</p>
                </div>
            </div>

        </div>
    )
}

export default Flag