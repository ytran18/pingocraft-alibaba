import classnames from 'classnames/bind'
import styles from './Header.module.scss'

import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

import SkypopcardIcon from '../../assets/icon/skypopcardlogo.png'

import Container from 'react-bootstrap/Container'
import Nav from'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


const cx = classnames.bind(styles)

function Header ()
{

    return (
            <div className={cx('flex flex-col justify-center max-h-[256px]')}>
                <div className={cx('flex justify-center items-center')}>
                        <img className={cx('w-[200px] h-[200px] hidden md:block')}  alt='skypopcard-logo' src={SkypopcardIcon}/>
                    <div className={cx('hidden lg:flex lg:flex-col')}>
                        <h1 className={cx('uppercase text-3xl')}>viet nam pingo craft company ltd</h1>
                        <h2 className={cx('text-base')}>Address: 176/4/8 TX25 Street, Thanh Xuan Ward, District 12th, Ho Chi Minh City, Vietnam</h2>
                        <h2 className={cx('text-base')}>Hotline: (+84) 765 126 901 | Email: skypopcards@gmail.com | website: skypopcards.com</h2>
                    </div>
                </div>

                <Navbar collapseOnSelect expand="lg" variant="dark" className={cx('md:bg-[#f9e5e7] lg:max-h-11')}>
                    <Container className={cx('md:bg-[#f9e5e7] lg:max-h-11')}>

                        <a href='/'><img className={cx('w-[80px] h-[80px] md:hidden')}  alt='skypopcard-logo' src={SkypopcardIcon}/></a>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav"> <FontAwesomeIcon icon={faBarsStaggered} className={cx('toggle')}/> </Navbar.Toggle>

                        <Navbar.Collapse id="responsive-navbar-nav"  className={cx('')}>
                            <Nav className={cx('ml-[1rem] lg:ml-0')}>
                                <Link to={"/"} className={cx('lg:inline-block text-[20px] lg:text-[15px] lg:py-0 lg:px-[15px] text-slate-900 font-bold lg:hover:text-[#5151c7] no-underline mr-[1.25rem] lg:mr-0')}>
                                    Home
                                </Link>
                                <Link to={'/products'} className={cx('lg:inline-block lg:text-[15px] text-[20px] lg:py-0 lg:px-[15px] text-slate-900 font-bold lg:hover:text-[#5151c7] no-underline mr-[1.25rem] lg:mr-0')}>
                                    Products
                                </Link>
                                <Link to={'/profile'} className={cx('lg:inline-block lg:text-[15px] text-[20px] lg:py-0 lg:px-[15px] text-slate-900 font-bold lg:hover:text-[#5151c7] no-underline mr-[1.25rem] lg:mr-0')}>
                                    Profile
                                </Link>
                                <Link to={'/contact'} className={cx('lg:inline-block lg:text-[15px] text-[20px] lg:py-0 lg:px-[15px] text-slate-900 font-bold lg:hover:text-[#5151c7] no-underline mr-[1.25rem] lg:mr-0')}>
                                    Contact
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <hr className={cx('lg:hidden')}/>
            </div>
    )
}

export default Header