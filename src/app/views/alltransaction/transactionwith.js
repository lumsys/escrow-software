import React, { Component, useEffect, useState } from 'react'
import { Breadcrumb } from 'app/components'
import { Card, Grid, Button, TextField,  RadioGroup,
    FormControlLabel, Radio, FormLabel, FormControl } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { AddTransactionWith } from 'app/redux/actions'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: 800,
        borderRadius: 12,
        margin: '1rem',
    }
}))
const TransactionWith = () => {
    const [loading, setLoading ] = useState(false)
    const dispatch =  useDispatch();
    const classes = useStyles()
    const transaction = useSelector(state => state.root.viewtransaction)
    const responses = useSelector(state => state.root.responses)
    const history = useHistory()
    const [ transactionwith, setWith ] = useState({
        name: '',
        email:'',
        otherparty_category:''
    })

    useEffect(() => {
        Clear();
    },[responses])

    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...transactionwith }
        temp[name] = value
        setWith(temp)
    }

    const handleSubmit = async (e) => {
        setLoading(true)

        const data = { 
            name: transactionwith.name, 
            email: transactionwith.email,
            otherparty_category: transactionwith.otherparty_category
         };
        data.transactionId = transaction.id;
        await dispatch(AddTransactionWith(data));
        setLoading(false)
    }
    const Clear = () => {
        if(responses == null)
            return false;
        if(responses.status == true)
        {
            setWith({ 
                name: '',
                email: '',
                otherparty_category:''
             });
        }    
    }
        return (
            <div className="m-sm-30">
                    <div className="flex flex-wrap justify-between mb-6">
                    <div>
                        <h3 className="mt-0 mb-4 font-medium text-28">
                            Add Other Party 
                        </h3>
                      
                    </div>

                    <div className="">
                        <Button onClick = { () => history.push(`/transaction/details/${transaction.id}`)} variant="contained" color="primary">
                            Back to List
                        </Button>
                    </div>
                </div>
                <Card className="px-6 pt-2 pb-4">
                <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
            
                <Grid container spacing={6} className="mt-1">
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                    
                    <TextValidator
                            className="mb-4 w-full"
                            label="Name"
                            variant="outlined"
                            onChange={handleChange}
                            type="text"
                            name="name"
                            value={transactionwith.name || ''}
                            validators={['required']}
                            errorMessages={[
                                'this field is required',
                            ]}
                        />              
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="Email"
                            variant="outlined"
                            onChange={handleChange}
                            type="text"
                            name="email"
                            value={transactionwith.email || ''}
                            validators={['required']}
                            errorMessages={[
                                'this field is required'
                            ]}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">User Category</FormLabel>
                        <RadioGroup
                            aria-label="Gender"
                            name="gender1"
                            className={classes.group}
                            name="otherparty_category"
                            onChange={handleChange}
                            row
                        >
                            <FormControlLabel
                                value="Buyer"
                                control={<Radio />}
                                label="Buyer"
                            />
                            <FormControlLabel
                                value="Seller"
                                control={<Radio />}
                                label="Seller"
                            />
                            
                        </RadioGroup>
                    </FormControl>
                    </Grid>
                  
                </Grid>
                <div className="flex flex-wrap items-center mb-4">
                    <div className="relative">
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={loading}
                            type="submit"
                        >
                            Create
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
            </ValidatorForm>
        </div>
                </Card>
            </div>
        )
}

export default TransactionWith
