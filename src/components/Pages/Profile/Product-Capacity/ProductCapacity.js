import classnames from 'classnames/bind'
import styles from './ProductCapacity.module.scss'

import { Table, TableHeader, TableRow, TableCell, TableBody } from 'grommet'

import IMG001 from '../../../../assets/img/IMG016.jpeg'
import IMG002 from '../../../../assets/img/IMG017.jpeg'
import IMG003 from '../../../../assets/img/IMG018.jpeg'
import IMG004 from '../../../../assets/img/IMG019.jpeg'

const cx = classnames.bind(styles)

function ProductCapacity()
{
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <p>product capacity</p>
            </div>
            <div className={cx('content')}>
                <div className={cx('production-flow')}>
                    <h6>Production Flow</h6>
                    <div className={cx('image')}>
                        <div>
                            <img alt='img' src={IMG001} className={cx('picture')}/>
                            <h6>Laser Cutting Details</h6>
                        </div>
                        <div>
                            <img alt='img' src={IMG002} className={cx('picture')}/>
                            <h6>Assembling</h6>
                        </div>
                        <div>
                            <img alt='img' src={IMG003} className={cx('picture')}/>
                            <h6>Quality Controlling</h6>
                        </div>
                        <div>
                            <img alt='img' src={IMG004} className={cx('picture')}/>
                            <h6>Packaging</h6>
                        </div>
                    </div>
                </div>
                <div className={cx('factory-information')}>
                    <h6>Factory Information</h6>
                    <div className={cx('table')}>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        <strong>Factory Size</strong>
                                    </TableCell>
                                    <TableCell scope="row" border="all" size='large'>
                                        Below 1,000 square meters
                                    </TableCell>
                                    
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        <strong>Factory Country/Region</strong>
                                    </TableCell>
                                    <TableCell border="all">176/4/8 TX25 Street, Thanh Xuan Ward, District 12th, Ho Chi Minh City, Vietnam</TableCell>
                                    
                                </TableRow>
                                    
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        <strong>No. of Production Lines</strong>
                                    </TableCell>
                                    <TableCell border="all">5</TableCell>
                                    
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        <strong>Contract Manufacturing</strong>
                                    </TableCell>
                                    <TableCell border="all">OEM Service Offered, Design Service Offered, Buyer Label Offered</TableCell>
                                   
                                </TableRow>

                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        <strong>Annual Output Value</strong>
                                    </TableCell>
                                    <TableCell border="all">Below US$1 Million</TableCell>
                                    
                                </TableRow>

                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div className={cx('factory-information')}>
                    <h6>Factory Information</h6>
                    <div className={cx('table')}>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableCell scope="row" border="all" size='small'>
                                        <strong>Product Name</strong>
                                    </TableCell>
                                    <TableCell scope="row" border="all" size='small'>
                                        <strong>Units Produced</strong>
                                    </TableCell>
                                    <TableCell scope="row" border="all" size='small'>
                                        <strong>Highest Ever</strong>
                                    </TableCell>
                                    <TableCell scope="row" border="all" size='small'>
                                        <strong>Unit Type</strong>
                                    </TableCell>
                                    <TableCell scope="row" border="all" size='small'>
                                        <strong>Verified</strong>
                                    </TableCell>
                                    
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        3D Pop Up Card
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        180000
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        200000
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        Piece/Pieces
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                    
                                </TableRow>
                               
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCapacity