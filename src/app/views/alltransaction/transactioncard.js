import React, { useEffect, useState } from 'react'
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    CircularProgress,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import { store } from 'app/redux/store/index'
import { VIEWTRANSACTION } from 'app/redux/actions/constant'
import { useDispatch, useSelector } from 'react-redux'
import { GetTransaction } from 'app/redux/actions'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    productTable: {
        '& small': {
            height: 15,
            width: 50,
            borderRadius: 500,
            boxShadow:
                '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
        },
        '& td': {
            borderBottom: 'none',
        },
        '& td:first-child': {
            paddingLeft: '16px !important',
        },
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}))

const TransactionCard = () => {
    const classes = useStyles()
    const history = useHistory();
    const dispatch = useDispatch()
    const [ loading, setLoading ] = useState(false)
    const transactions = useSelector(state => state.root.transactions)
    useEffect(() => {
        GetData();
    },[])

    const GetData = async () => {
        setLoading(true)
        await dispatch(GetTransaction())
        setLoading(false)
    }
    const ViewTransaction = (transaction) => {
        store.dispatch({ type: VIEWTRANSACTION, payload: { transaction : transaction } });
        history.push(`/transaction/details/${transaction.id}`)
    }
    return (
        <Card elevation={3} className="pt-5 mb-6">
           
            <div className="overflow-auto">
                {
                    transactions != null && transactions.length > 0 &&
                    <Table
                        className={clsx(
                            'whitespace-pre min-w-400',
                            classes.productTable
                        )}
                    >
                        <TableHead>
                            <TableRow>
                            <TableCell className="px-6" colSpan={1}>
                                    S/N
                                </TableCell>
                                <TableCell className="px-6" colSpan={2}>
                                    Transaction ID
                                </TableCell>
                                <TableCell className="px-0" colSpan={2}>
                                    Transaction With
                                </TableCell>
                                <TableCell className="px-0" colSpan={2}>
                                    Transaction with Category
                                </TableCell>
                                <TableCell className="px-0" colSpan={2}>
                                    Status
                                </TableCell>
                                <TableCell className="px-0" colSpan={1}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions.map((transaction, index) => (
                                <TableRow key={index} hover>
                                    <TableCell
                                        className="px-0 capitalize"
                                        colSpan={1}
                                        align="left"
                                    >
                                        <div className="flex items-center">
                                            <p className="m-0 ml-8">
                                                {index+1 }
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className="px-0 capitalize"
                                        colSpan={2}
                                        align="left"
                                    >
                                        <div className="flex items-center">
                                            <p className="m-0 ml-8">
                                                {transaction.transactionID }
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className="px-0 capitalize"
                                        align="left"
                                        colSpan={2}
                                    >
                                    { transaction.transactionwith == null ? 'Pending' : `${transaction.transactionwith.firstname} ${transaction.transactionwith.lastname}` }
                                    </TableCell>
                                    <TableCell
                                        className="px-0 capitalize"
                                        align="left"
                                        colSpan={2}
                                    >
                                    { transaction.otherparty_category == null ? 'Unknown' : transaction.otherparty_category }
                                    </TableCell> 

                                    <TableCell
                                        className="px-0"
                                        align="left"
                                        colSpan={2}
                                    >
                                        <small className="border-radius-4 bg-error text-white px-2 py-2px">
                                                {transaction.transaction_status}
                                            </small>
                                    </TableCell>
                                    <TableCell className="px-0" colSpan={1}>
                                        <small style={{cursor:'pointer'}} onClick = { () => ViewTransaction(transaction) } className="border-radius-4 bg-error text-white px-2 py-2px">
                                                View
                                            </small>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                }
                {
                    loading && (
                        <CircularProgress
                            size={24}
                            className={
                                classes.buttonProgress
                            }
                        />
                )}
                {
                      transactions != null && transactions.length == 0 &&
                     <div style={{padding:10, display:'flex', justifyContent:'center',alignItems:'center'}}>
                        <Typography variant="subtitle1">
                            No Transaction Yet
                        </Typography>
                        <br />
                    </div>
                }
            </div>
        </Card>
    )
}


export default TransactionCard
