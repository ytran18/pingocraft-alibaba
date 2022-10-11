import classnames from 'classnames/bind'
import styles from './Header.module.scss'

import { Link } from 'react-router-dom'

import {useState} from 'react'

import SkypopcardIcon from '../../assets/icon/skypopcardlogo.png'

import Container from 'react-bootstrap/Container'
import Nav from'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


const cx = classnames.bind(styles)

function Header ()
{

    const [menuItems, setMenuItems] = useState('Home')

    return (
            <div className={cx('flex flex-col justify-center max-h-[256px]')}>
                <div className={cx('flex justify-center items-center')}>
                        <img className={cx('w-[200px] h-[200px]')}  alt='skypopcard-logo' src={SkypopcardIcon}/>
                    <div className={cx('hidden lg:flex lg:flex-col')}>
                        <h1 className={cx('uppercase text-3xl')}>viet nam pingo craft company ltd</h1>
                        <h2 className={cx('text-base')}>Address: 176/4/8 TX25 Street, Thanh Xuan Ward, District 12th, Ho Chi Minh City, Vietnam</h2>
                        <h2 className={cx('text-base')}>Hotline: (+84) 765 126 901 | Email: skypopcards@gmail.com | website: skypopcards.com</h2>
                    </div>
                </div>

                <Navbar collapseOnSelect expand="lg" variant="dark" className={cx('bg-[#f9e5e7] lg:max-h-11')}>
                    <Container className={cx('bg-[#f9e5e7] lg:max-h-11')}>
                        <Navbar.Brand>
                            <Link to={"/"} onClick={() => setMenuItems('Home')} className={cx('lg:inline-block lg:text-[15px] lg:py-0 lg:px-[15px] text-white font-bold lg:hover:text-[#5151c7] no-underline')}>
                                {menuItems}
                            </Link>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                        <Navbar.Collapse id="responsive-navbar-nav">
                            
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to={'/products'} onClick={() => setMenuItems('Products')} className={cx('lg:inline-block lg:text-[15px] text-[20px] lg:py-0 lg:px-[15px] text-white font-bold lg:hover:text-[#5151c7] no-underline')}>
                                    Products
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={'/profile'} onClick={() => setMenuItems('Profile')} className={cx('lg:inline-block lg:text-[15px] text-[20px] lg:py-0 lg:px-[15px] text-white font-bold lg:hover:text-[#5151c7] no-underline')}>
                                    Profile
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={'/contact'} onClick={() => setMenuItems('Contact')} className={cx('lg:inline-block lg:text-[15px] text-[20px] lg:py-0 lg:px-[15px] text-white font-bold lg:hover:text-[#5151c7] no-underline')}>
                                    Contact
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={'/feed'} onClick={() => setMenuItems('Feed')} className={cx('lg:inline-block lg:text-[15px] text-[20px] lg:py-0 lg:px-[15px] text-white font-bold lg:hover:text-[#5151c7] no-underline')}>
                                    Feed
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={'/view-more'} onClick={() => setMenuItems('View more')} className={cx('lg:inline-block lg:text-[15px] text-[20px] lg:py-0 lg:px-[15px] text-white font-bold lg:hover:text-[#5151c7] no-underline')}>
                                    View more
                                </Link>
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
    )
}

export default Header