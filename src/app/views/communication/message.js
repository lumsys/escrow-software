import React from 'react'
import { IconButton, Icon, Button, Grid } from '@material-ui/core'
import Overview from './overview'
import Add from './add'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SnackbarContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(({ palette, ...theme }) => ({
    snackbar: {
        margin: theme.spacing(1),
    },
}))

const Message = () => {
    const history = useHistory()
    const classes = useStyles()
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
                        aria-owns='simple-menu'
                        aria-haspopup="true"
                        onClick={ () => history.push(`/transaction/details/${viewtransaction.id}`) }
                        color="primary"
                    >
                        Order
                    </Button>
                    <Button
                        variant="outlined"
                        className="mr-4"
                        aria-owns='simple-menu'
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
                        onClick={ () => history.push(`/witness/transaction/${viewtransaction.id}`) }
                        color="primary"
                    >
                        Witness
                    </Button>
                    <Button
                        variant="outlined"
                        className="mr-4"
                        aria-owns='simple-menu'
                        aria-haspopup="true"
                        onClick={() => history.push(`/payment/transaction/${viewtransaction.id}`)}
                        color="primary"
                    >
                        Payment & History
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
            <SnackbarContent
                        className={classes.snackbar}
                        style={{backgroundColor:'#1177DD'}}
                        message={`Send Message to Buyer / Seller / Witness. Receivers are notified via Email. `}
                />
            <Grid container spacing={3}>
                <Grid item md={8} xs={12}>
                    <Overview />
                </Grid>
                <Grid item md={4} xs={12}>
                    <Add />
                </Grid>
            </Grid>
        </div>
    )
}

export default Message
