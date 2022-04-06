import React, { Component, useState } from 'react'
import { Card } from '@material-ui/core'
import { Icon, Button, IconButton, Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography
} from '@material-ui/core'
import clsx from 'clsx'
import { format } from 'date-fns';
import { SnackbarContent } from '@material-ui/core'

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

const Flow = () => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const [ loading, setLoading ] = useState(false)
    const history = useHistory()
    const viewtransaction = useSelector(state => state.root.viewtransaction)

        return (
            <div className="m-sm-30">
               
                <div className="flex flex-wrap justify-between mb-6">
                <div>
                    <h3 className="mt-0 mb-4 font-medium text-28">
                        Transaction Trail
                    </h3>
                    
                    <div className="flex">
                        {/* <Button
                            variant="outlined"
                            className="mr-4"
                            aria-owns='simple-menu'
                            aria-haspopup="true"
                            onClick={() => history.push(`/document/transaction/${viewtransaction.id}`)}
                            color="primary"
                        >
                            Completed
                        </Button>
                        <Button
                            variant="outlined"
                            className="mr-4"
                            aria-owns='simple-menu'
                            aria-haspopup="true"
                            onClick={() => history.push(`/document/transaction/${viewtransaction.id}`)}
                            color="primary"
                        >
                            Raise Dispute
                        </Button> */}
                    </div>
                   
                </div>
               
                <div className="">
                    <Button disabled={loading} variant="contained" onClick = { () => history.push(`/transaction/details/${viewtransaction.id}`) } color="primary">
                        Back to List
                    </Button>
                    {loading && (
                        <CircularProgress
                            size={24}
                            className={
                                classes.buttonProgress
                            }
                        />
                    )}
                </div>
               
            </div>
            <SnackbarContent
                        className={classes.snackbar}
                        style={{backgroundColor:'#1177DD'}}
                        message={`Transaction Trail such as Approval Date, Completed Date, Payment Date and Payout Information`}
                   />
            <Card elevation={3} className="pt-5 mb-6">
           
                    <div className="overflow-auto">
                        {
                            viewtransaction.transaction_update != null && viewtransaction.transaction_update.length > 0 &&
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
                                            Status
                                        </TableCell>
                                        <TableCell className="px-0" colSpan={2}>
                                            From 
                                        </TableCell>
                                        <TableCell className="px-0" colSpan={2}>
                                            Date
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    { viewtransaction.transaction_update.map((transaction, index) => (
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
                                                        {transaction.stage }
                                                    </p>
                                                </div>
                                            </TableCell>
                                            <TableCell
                                                className="px-0 capitalize"
                                                align="left"
                                                colSpan={2}
                                            >
                                                { transaction.user.firstname} { transaction.user.lastname}
                                            </TableCell>
                                           

                                            <TableCell
                                                className="px-0"
                                                align="left"
                                                colSpan={2}
                                            >
                                                { format( new Date(transaction.created_at), 'yy-MM-dd') }
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
                                viewtransaction.transaction_update != null && viewtransaction.transaction_update.length == 0 &&
                                <div style={{padding:10, display:'flex', justifyContent:'center',alignItems:'center'}}>
                                <Typography variant="subtitle1">
                                    No Transaction Flow Record Yet
                                </Typography>
                                <br />
                            </div>
                        }
                    </div>
                </Card>
            </div>
        )
}

export default Flow
