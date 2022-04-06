import React, { Component, useState, useEffect } from 'react'
import { Breadcrumb } from 'app/components'
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
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { GetWitnessTransaction } from 'app/redux/actions'
import { store } from 'app/redux/store/index';
import { VIEWWITNESSTRANSACTION } from 'app/redux/actions/constant';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    buttonProgress: {
        position: 'absolute',
        top: '10%',
        right: '10%',
        marginTop: -12,
        marginLeft: -12,
    },
}))

const WitnessView = () => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const [ loading, setLoading ] = useState(false)
    const history = useHistory()
    const witnesstransactions = useSelector(state => state.root.witnesstransactions)
    useEffect(() => {
        GetData();
    },[])

    const GetData = async () => {
        setLoading(true)
        await dispatch(GetWitnessTransaction())
        setLoading(false)
    }
    const ViewTransaction = (transaction) => {
        store.dispatch({ type: VIEWWITNESSTRANSACTION, payload: { transaction : transaction } });
        history.push(`/transaction/witnessview/detail/${transaction.id}`)
    }
        return (
            <div className="m-sm-30">
               
                <div className="flex flex-wrap justify-between mb-6">
                <div>
                    <h3 className="mt-0 mb-4 font-medium text-28">
                        Transactions
                    </h3>
                   
                </div>
            </div>
               
                
            <Card elevation={3} className="pt-5 mb-6">
           
                    <div className="overflow-auto">
                        {
                            witnesstransactions != null && witnesstransactions.length > 0 &&
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
                                            Started By
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
                                    {witnesstransactions.map((witness, index) => (
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
                                                align=""
                                            >
                                                <div className="flex items-center">
                                                    <p className="m-0 ml-8">
                                                        {witness.transaction.transactionID }
                                                    </p>
                                                </div>
                                            </TableCell>
                                            <TableCell
                                                className="px-0 capitalize"
                                                colSpan={2}
                                                align=""
                                            >
                                                <div className="flex items-center">
                                                    <p className="m-0 ml-8">
                                                        {witness.transaction.startedBy.firstname }  {witness.transaction.startedBy.lastname }
                                                    </p>
                                                </div>
                                            </TableCell>
                                            <TableCell
                                                className="px-0 capitalize"
                                                align=""
                                                colSpan={2}
                                            >
                                            {witness.transaction.transactionwith == null ? 'Pending' : `${witness.transaction.transactionwith.firstname} ${witness.transaction.transactionwith.lastname}` }
                                            </TableCell>
                                            <TableCell
                                                className="px-0 capitalize"
                                                align=""
                                                colSpan={2}
                                            >
                                            { witness.transaction.otherparty_category == null ? 'Unknown' : witness.transaction.otherparty_category }
                                            </TableCell> 

                                            <TableCell
                                                className="px-0"
                                                align=""
                                                colSpan={2}
                                            >
                                                <small className="border-radius-4 bg-error text-white px-2 py-2px">
                                                        {witness.transaction.transaction_status}
                                                    </small>
                                            </TableCell>
                                            <TableCell className="px-0" colSpan={1}>
                                                <small style={{cursor:'pointer'}} onClick = { () => ViewTransaction(witness.transaction) } className="border-radius-4 bg-error text-white px-2 py-2px">
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
                            witnesstransactions != null && witnesstransactions.length == 0 &&
                            <div style={{padding:10, display:'flex', justifyContent:'center',alignItems:'center'}}>
                                <Typography variant="subtitle1">
                                    No Transaction Yet
                                </Typography>
                                <br />
                            </div>
                        }
                    </div>
                </Card>
            </div>
        )
}

export default WitnessView
