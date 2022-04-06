import React from 'react'
import { IconButton, Icon, Button, Grid } from '@material-ui/core'
import Overview from './overview'
import CreateDoc from './createdoc'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SnackbarContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: 800,
        borderRadius: 12,
        margin: '1rem',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    snackbar: {
        margin: theme.spacing(1),
    },
}))

const Details = () => {
    const history = useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const classes = useStyles()
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
                    {/* <div className="flex">
                        <div className="px-3 text-11 py-3px border-radius-4 text-white bg-green mr-3">
                            Paid
                        </div>
                        <div className="px-3 text-11 py-3px border-radius-4 text-white bg-secondary">
                            Unfulfilled
                        </div>
                    </div> */}
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
                        message={`Upload any binding Document between the buyer and Seller. Once a party uploads, the other party has access to download, edit and re-upload.`}
                />
            <Grid container spacing={3}>
                <Grid item md={8} xs={12}>
                    <Overview />
                </Grid>
                <Grid item md={4} xs={12}>
                    <CreateDoc />
                </Grid>
            </Grid>
        </div>
    )
}

export default Details
