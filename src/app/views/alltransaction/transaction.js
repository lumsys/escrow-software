import React, { Component, useState } from 'react'
import { Breadcrumb } from 'app/components'
import { Card } from '@material-ui/core'
import TransactionCard from './transactioncard';
import { Icon, Button, IconButton, Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux';
import { StartTransaction } from '../../fetch/fetch';
import { CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
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
    snackbar: {
        margin: theme.spacing(1),
    },
}))


const AllTransaction = () => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const [ loading, setLoading ] = useState(false)
    const history = useHistory()

    const CreateTransaction = async () => {
        setLoading(true)
        let responses = await StartTransaction()
        if(responses.success == true)
            history.push(`/transaction/details/${responses.transaction.id}`)
        setLoading(false)
    }
        return (
            <div className="m-sm-30">
                
                <div className="flex flex-wrap justify-between mb-6">
                <div>
                    <h3 className="mt-0 mb-1 font-medium text-28">
                        Transactions
                    </h3>
                    <p>List of Previously Created Transactions</p>
                   
                </div>
               
                <div className="">
                    
                   
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
                        message={`You can start a new transaction as seller or buyer by clicking the start New Transaction Button`}
                        action={
                            <Button disabled={loading} variant="contained" onClick = { CreateTransaction } color="secondary">
                                Start New Transaction
                            </Button>
                        }
                />
                
                <TransactionCard />
            </div>
        )
}

export default AllTransaction
