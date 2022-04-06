import React, { Component, useEffect, useState } from 'react'
import { Breadcrumb } from 'app/components'
import { Card, Grid, Button, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { CreateNewOrder } from 'app/redux/actions'
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
const CreateOrder = () => {
    const [loading, setLoading ]= useState(false)
    const dispatch =  useDispatch();
    const classes = useStyles()
    const transaction = useSelector(state => state.root.viewtransaction)
    const responses = useSelector(state => state.root.responses)
    const history = useHistory()
    const [order, setOrder] = useState({
        name: '',
        quantity: 0,
        unit_cost:0,
        total_cost:0,
        order_description:'',
        other_information:'',
        mode_of_delivery:'',
        date_of_delivery:''
    })

    useEffect(() => {
        Clear();
    },[responses])

    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...order }
        temp[name] = value
        setOrder(temp)
    }

    const handleSubmit = async (e) => {
        setLoading(true)

        if(isNaN(order.quantity) == true || isNaN(order.unit_cost) == true || isNaN(order.total_cost) )
            return false

        const data = { 
            name: order.name, 
            quantity: parseFloat(order.quantity),
            unit_cost: parseFloat(order.unit_cost),
            total_cost: parseFloat(order.total_cost),
            order_description:order.order_description,
            other_information:order.other_information,
            date_of_delivery: order.date_of_delivery,
            mode_of_delivery: order.mode_of_delivery
         };
        data.transactionId = transaction.id;
        await dispatch(CreateNewOrder(data));
        setLoading(false)
    }
    const Clear = () => {
        if(responses == null)
            return false;
        if(responses.status == true)
        {
            setOrder({ 
                name: '',
                quantity: 0,
                unit_cost:0,
                total_cost:0,
                order_description:'',
                other_information:'',
                mode_of_delivery:'',
                date_of_delivery:''
             });
        }    
    }
        return (
            <div className="m-sm-30">
                    <div className="flex flex-wrap justify-between mb-6">
                    <div>
                        <h3 className="mt-0 mb-4 font-medium text-28">
                            Add Order 
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
            
                <Grid container spacing={6} className="mt-5">
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                     

                    <TextValidator
                            className="mb-4 w-full"
                            label="Name"
                            variant="outlined"
                            onChange={handleChange}
                            type="text"
                            name="name"
                            value={order.name || ''}
                            validators={['required']}
                            errorMessages={[
                                'this field is required',
                            ]}
                        />              
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="Quantity"
                            variant="outlined"
                            onChange={handleChange}
                            type="number"
                            name="quantity"
                            value={order.quantity || ''}
                            validators={['required']}
                            errorMessages={[
                                'this field is required'
                            ]}
                        />
                    </Grid>
                    
                  
                </Grid>
                <Grid container spacing={6} className="mt-1">
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                     

                    <TextValidator
                            className="mb-4 w-full"
                            label="Unit Cost"
                            variant="outlined"
                            onChange={handleChange}
                            type="text"
                            name="unit_cost"
                            value={order.unit_cost || ''}
                            validators={['required']}
                            errorMessages={[
                                'this field is required',
                            ]}
                        />              
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="Total Cost"
                            variant="outlined"
                            onChange={handleChange}
                            type="number"
                            name="total_cost"
                            value={order.total_cost || ''}
                            validators={['required']}
                            errorMessages={[
                                'this field is required'
                            ]}
                        />
                    </Grid>
                    
                  
                </Grid>
                <Grid container spacing={6} className="mt-1">
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                     

                    <TextValidator
                            className="mb-4 w-full"
                            label="Mode of Delivery"
                            variant="outlined"
                            onChange={handleChange}
                            type="text"
                            name="mode_of_delivery"
                            value={order.mode_of_delivery || ''}
                            validators={['required']}
                            errorMessages={[
                                'this field is required',
                            ]}
                        />              
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="Date of Delivery"
                            variant="outlined"
                            onChange={handleChange}
                            type="date"
                            name="date_of_delivery"
                            value={order.date_of_delivery || ''}
                            validators={['required']}
                            errorMessages={[
                                'this field is required'
                            ]}
                        />
                    </Grid>
                    
                  
                </Grid>
                <Grid container spacing={6} className="mt-1">
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                     

                    <TextField
                            className="mb-6 w-full"
                            variant="outlined"
                            onChange={handleChange}
                            validators={['required']}
                            id="outlined-multiline-static"
                            label="Description"
                            name="order_description"
                            value={order.order_description || ''}
                            multiline
                            rows={4}
                            errorMessages={[
                                'this field is required'
                            ]}
                    />             
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                         <TextField
                            className="mb-6 w-full"
                            variant="outlined"
                            onChange={handleChange}
                            validators={['required']}
                            id="outlined-multiline-static"
                            label="Other Information"
                            value={order.other_information || ''}
                            multiline
                            name="other_information"
                            rows={4}
                            errorMessages={[
                                'this field is required'
                            ]}
                    />
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

export default CreateOrder
