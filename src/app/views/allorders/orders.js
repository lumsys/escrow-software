import React, { useState } from 'react'
import { IconButton, Icon, Button, Grid } from '@material-ui/core'
import Overview from './overview'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const AllOrders = () => {
    const [ loading, setLoading ] = useState(false)
    const transaction = useSelector(state => state.root.viewtransaction)
    const history = useHistory()
    return (
        <div className="m-sm-30">
            <div className="flex flex-wrap justify-between mb-6">
                <div>
                    <h3 className="mt-0 mb-4 font-medium text-28">
                        Order #1028
                    </h3>
                    <div className="flex">
                        <div className="px-3 text-11 py-3px border-radius-4 text-white bg-green mr-3">
                            Paid
                        </div>
                        <div className="px-3 text-11 py-3px border-radius-4 text-white bg-secondary">
                            Unfulfilled
                        </div>
                    </div>
                </div>

                <div className="">
                    <Button onClick = { () => history.push(`/order/create/${transaction.id}`)} variant="contained" color="primary">
                        Add Product
                    </Button>
                </div>
            </div>

            <Grid container spacing={3}>
                <Grid item md={8} xs={12}>
                    <Overview />
                </Grid>
                <Grid item md={4} xs={12}>
                    {/* <InvoiceCustomer /> */}
                </Grid>
            </Grid>
        </div>
    )
}

export default AllOrders
