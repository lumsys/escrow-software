import React from 'react'
import { IconButton, Icon, Button, Grid } from '@material-ui/core'
import Overview from './overview'
import PayNow from './pay'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const Payment = () => {
    const history = useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const viewtransaction = useSelector(state => state.root.viewtransaction)

    function handleClick(event) {
        setAnchorEl(event.currentTarget)
    }

    function handleClose() {
        setAnchorEl(null)
    }
    return (
        <div className="m-sm-30">
            <div className="flex flex-wrap justify-between mb-6">
                <div>
                    <h3 className="mt-0 mb-4 font-medium text-28">
                        Transaction #{viewtransaction.transactionID}
                    </h3>
                    <div className="flex">
                    <Button
                        variant="outlined"
                        className="mr-4"
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={ () => history.push(`/transaction/details/${viewtransaction.id}`) }
                        color="primary"
                    >
                        Order
                    </Button>
                    <Button
                        variant="outlined"
                        className="mr-4"
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={ () => history.push(`/witness/transaction/${viewtransaction.id}`) }
                        color="primary"

                    >
                        Witness
                    </Button>
                    <Button
                        variant="outlined"
                        className="mr-4"
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        color="primary"
                        onClick={ () => history.push(`/message/transaction/${viewtransaction.id}`) }
                    >
                        Message
                    </Button>
                    <Button
                        variant="outlined"
                        className="mr-4"
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        color="primary"
                        onClick={ () => history.push(`/document/transaction/${viewtransaction.id}`) }
                    >
                        Document
                    </Button>
                    <Button
                        variant="outlined"
                        className="mr-4"
                        aria-owns='simple-menu'
                        aria-haspopup="true"
                        onClick={() => history.push(`/payout/transaction/${viewtransaction.id}`)}
                        color="primary"
                    >
                        Payout & History
                    </Button>
                    
                    </div>
                </div>

                <div className="">
                   
                   
                   
                </div>
            </div>

            <Grid container spacing={3}>
                <Grid item md={8} xs={12}>
                    <Overview />
                </Grid>
                <Grid item md={4} xs={12}>
                    <PayNow />
                </Grid>
            </Grid>
        </div>
    )
}

export default Payment
