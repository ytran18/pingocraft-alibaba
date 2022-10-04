import classnames from 'classnames/bind'
import styles from './TradeCapacity.module.scss'

import { Table, TableHeader, TableRow, TableCell, TableBody } from 'grommet'

const cx = classnames.bind(styles)

function TradeCapacity ()
{
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <h6>trade capabilities</h6>
            </div>
            <div className={cx('content')}>
                <div>
                    <h6>Main Markets and Product(s)</h6>
                    <div className={cx('table')}>
                    <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableCell scope="row" border="all" size='medium'>
                                        <strong>Main Markets</strong>
                                    </TableCell>
                                    <TableCell scope="row" border="all" size='medium'>
                                        <strong>Total Revenue(%)</strong>
                                    </TableCell>
                                    <TableCell scope="row" border="all" size='medium'>
                                        <strong>Main Product(s)</strong>
                                    </TableCell>
                                    <TableCell scope="row" border="all" size='medium'>
                                        <strong>Verified</strong>
                                    </TableCell>
                                    
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        Africa
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        53.00%
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        Oceania 
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        10.00%
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        Southern Europe
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        5.00%
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        Northern Europe
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        5.00%
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        Western Europe
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        5.00%
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        Eastern Europe
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        5.00%
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        Eastern Asia
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        4.00%
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        South Asia
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        3.00%
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        Mid East
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        2.00%
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        South America
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        2.00%
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        North America
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        2.00%
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        Central America
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        2.00%
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        Southeast Asia
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        2.00%
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        -
                                    </TableCell>
                                </TableRow>
                               
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div>
                    <h6>Trade Ability</h6>
                    <div className={cx('table')}>
                    <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableCell scope="row" border="all" size='small'>
                                        <strong>Language Spoken</strong>
                                    </TableCell>
                                    <TableCell scope="row" border="all" size='large'>
                                        English
                                    </TableCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        <strong>No. of Employees in Trade Department</strong> 
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        3-5 People
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        <strong>Average Lead Time</strong>
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        7
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        <strong>Total Annual Revenue</strong>
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        Below US$1 Million
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div>
                    <h6>Business Terms</h6>
                    <div className={cx('table')}>
                    <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableCell scope="row" border="all" size='small'>
                                        <strong>Accepted Delivery Terms</strong>
                                    </TableCell>
                                    <TableCell scope="row" border="all" size='large'>
                                        FOB, CIF
                                    </TableCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        <strong>Accepted Payment Currency</strong> 
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        USD
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        <strong>Accepted Payment Type</strong>
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        T/T, L/C, MoneyGram, Credit Card, PayPal, Western Union
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row" border="all">
                                        <strong>Nearest Port</strong>
                                    </TableCell>
                                    <TableCell scope="row" border="all">
                                        Tan Son Nhat Airport
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

export default TradeCapacity