import React, { useEffect, useState } from 'react'
import {
    Grid,
    Divider,
    Card,
    TextField,
    Icon,
    Button,
    IconButton,
} from '@material-ui/core'
import { format } from 'date-fns'
import { useSelector } from 'react-redux'
import TransactionCard from '../alltransaction/transactioncard'

const Overview = () => {
    const transactions = useSelector(state => state.root.transactions)
    const viewtransaction = useSelector(state => state.root.viewtransaction)
    const [ orders, setOrders ] = useState([])
    useEffect(() => {
        let index = transactions.findIndex(x => x.id == viewtransaction.id)
        //alert(index)
        setOrders(transactions[index].order)

    },[])
    return (
        <Card className="p-4">
            <div className="mb-4 flex justify-between items-center">
                <h4 className="m-0 font-medium">Order List</h4>
                <div className="text-muted text-13 font-medium">
                    {
                        viewtransaction.transaction_update != null && viewtransaction.transaction_update.length > 0 &&
                        <div className="px-3 text-11 py-3px border-radius-4 text-white bg-green mr-3">
                            Transaction Approved
                        </div>
                    }
                   
                    
                </div>
            </div>
          

            <Divider className="mb-6" />

          

            <div className="overflow-auto">
                {
                    orders.length > 0 &&
                    <div className="min-w-600">
                        <div className="py-3">
                            <Grid container>
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <h6 className="m-0 font-medium">
                                        Product Details
                                    </h6>
                                </Grid>
                                <Grid
                                    item
                                    lg={2}
                                    md={2}
                                    sm={2}
                                    xs={2}
                                    className="text-center"
                                >
                                    <h6 className="m-0 font-medium">Price</h6>
                                </Grid>
                                <Grid
                                    item
                                    lg={2}
                                    md={2}
                                    sm={2}
                                    xs={2}
                                    className="text-center"
                                >
                                    <h6 className="m-0 font-medium">Quantity</h6>
                                </Grid>
                                <Grid
                                    item
                                    lg={2}
                                    md={2}
                                    sm={2}
                                    xs={2}
                                    className="text-center"
                                >
                                    <h6 className="m-0 font-medium">Total</h6>
                                </Grid>
                            </Grid>
                        </div>

                        <Divider />

                        {orders.length > 0 && orders.map((product) => (
                            <div key={product.id} className="py-4">
                            
                                <Grid container alignItems="center">
                                    <Grid item lg={6} md={6} sm={6} xs={6}>
                                        <div className="flex">
                                            <img
                                                className="border-radius-4 w-100 mr-3"
                                                src={`/assets/images/products/speaker-1.jpg`}
                                                alt={product.name}
                                            />
                                            <div className="flex-grow">
                                                <h6 className="mt-0 mb-3 text-15 text-primary">
                                                    {product.name}
                                                </h6>
                                                <p className="mt-0 mb-6px text-13">
                                                    <span className="text-muted">
                                                        description:{' '}
                                                    </span>
                                                    <span className="font-medium">
                                                        {product.order_description}
                                                    </span>
                                                </p>
                                            
                                            
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid
                                        item
                                        lg={2}
                                        md={2}
                                        sm={2}
                                        xs={2}
                                        className="text-center"
                                    >
                                        <TextField
                                            variant="outlined"
                                            name="amount"
                                            type="number"
                                            size="small"
                                            defaultValue={product.unit_cost}
                                            inputProps={{
                                                style: {
                                                    width: '60px',
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        lg={2}
                                        md={2}
                                        sm={2}
                                        xs={2}
                                        className="text-center"
                                    >
                                        <TextField
                                            variant="outlined"
                                            name="amount"
                                            type="number"
                                            size="small"
                                            defaultValue={product.quantity}
                                            inputProps={{
                                                style: {
                                                    width: '60px',
                                                },
                                            }}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        lg={2}
                                        md={2}
                                        sm={2}
                                        xs={2}
                                        className="text-center"
                                    >
                                        <div className="flex justify-end items-center">
                                            <h6 className="m-0">
                                                ${product.unit_cost * product.quantity}
                                            </h6>
                                            <IconButton>
                                                <Icon fontSize="small">clear</Icon>
                                            </IconButton>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        ))} 
                    
                    </div>
                }
                {
                    orders.length == 0 &&
                    <div className="min-w-600">
                    <div className="py-3">
                    <div className="flex">
                            
                            <div className="flex-grow">
                                <h6 className="mt-0">
                                    No Product Added Yet
                                </h6>
                            
                            </div>
                        </div>
                    </div>
                    </div>
                }
            </div>
        </Card>
    )
}


export default Overview
