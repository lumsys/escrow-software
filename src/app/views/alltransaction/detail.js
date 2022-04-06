import React, { useEffect, useState } from 'react'
import { IconButton, Icon, Button, Grid, CircularProgress, Tooltip } from '@material-ui/core'
import Overview from '../allorders/overview'
import OtherParty from '../allorders/otherparty'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { UpdateTransaction } from 'app/redux/actions'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { SnackbarContent } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        right: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    snackbar: {
        margin: theme.spacing(1),
    },
}))
const Details = () => {
    const theme = useTheme()
    
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [open, setOpen] = React.useState(false)
    const history = useHistory()
    const [ loading,setLoading ] = useState(false)
    const viewtransaction = useSelector(state => state.root.viewtransaction) 
    const user = useSelector(state => state.root.user);
    const classes = useStyles()
    const dispatch = useDispatch()
    function handleClick(event) {
        setAnchorEl(event.currentTarget)
    }

    function handleClose() {
        setAnchorEl(null)
    }
    useEffect(() => {
        //GetData();
    },[])

    const GetData = async () => {
        setLoading(true)
        //await dispatch(GetOrder())
        setLoading(false)
    }

    const handleSave = async () => {
        setLoading(true)
        let data = { status : 'Approved', transactionId : viewtransaction.id }
        dispatch(UpdateTransaction(data))
        setLoading(false);
        handleClose()
        setOpen(false)
    }

    return (
        <div className="m-sm-30">
            {
              loading && (
                <CircularProgress
                    size={24}
                    className={
                        classes.buttonProgress
                    }
                />
            )}
             <div className="flex flex-wrap justify-between mb-6">
                <div>
                    <h3 className="mt-0 mb-4 font-medium text-28">
                        Transaction #{ viewtransaction != null &&  viewtransaction.transactionID}
                    </h3>
                    <div className="flex">
                    <Button
                        variant="outlined"
                        className="mr-4"
                        aria-owns='simple-menu'
                        aria-haspopup="true"
                        onClick={() => history.push(`/document/transaction/${viewtransaction.id}`)}
                        color="primary"
                    >
                        Documents
                    </Button>
                    <Button
                        variant="outlined"
                        className="mr-4"
                        aria-owns='simple-menu'
                        aria-haspopup="true"
                        onClick={() => history.push(`/witness/transaction/${viewtransaction.id}`)}
                        color="primary"
                    >
                        Witness
                    </Button>
                    <Button
                        variant="outlined"
                        className="mr-4"
                        aria-owns='simple-menu'
                        aria-haspopup="true"
                        onClick={() => history.push(`/message/transaction/${viewtransaction.id}`)}
                        color="primary"
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
                    <Button
                        variant="outlined"
                        className="mr-4"
                        aria-owns='simple-menu'
                        aria-haspopup="true"
                        onClick={() => history.push(`/flow/transaction/${viewtransaction.id}`)}
                        color="primary"
                    >
                        Transaction Flow
                    </Button>
                    </div>
                </div>

                <div className="">
                <Tooltip title="Manage Dispute on Transactions and other Setting Privileges">
                    <Button  variant="contained" color="primary">
                        Transaction Setting 
                    </Button>
                </Tooltip>       
                    
                </div>
            </div>
            {
                    viewtransaction.transactionwith != null && viewtransaction.transactionwith.id == user.id && viewtransaction.order.length > 0 && viewtransaction.transaction_status == 'Pending' && viewtransaction.transaction_update.length == 0 &&
                        <SnackbarContent
                        className={classes.snackbar}
                        style={{backgroundColor:'#1177DD', marginBottom:7}}
                        message={`Hi ${user.firstname}, Kindly accept and approve the Order requests Below.`}
                        action={
                        <Button  variant="contained"
                        color="primary"
                        className={classes.button} onClick = {() => setOpen(true) } color="secondary" size="small">
                        Accept Transaction Request
                        </Button>
                        
                    }
                    /> 
            }
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    Update Status
                </DialogTitle>
                <DialogContent style={{minWidth:400}}>
                    <DialogContentText>
                        I Agree and Accept to do Business with {viewtransaction.startedBy.firstname}. 
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary" autoFocus>
                        I Agree
                    </Button>
                </DialogActions>
            </Dialog>
            {
                viewtransaction.transactionwithId == user.id && viewtransaction.otherparty_category != 'Buyer' &&
                <SnackbarContent
                        className={classes.snackbar}
                        style={{backgroundColor:'#1177DD'}}
                        message={`Add all Buyer's Product Request`}
                        action={
                            <Button disabled={loading} onClick = { () => history.push(`/order/create/${viewtransaction.id}`)} variant="contained" color="secondary">
                                Add Product
                            </Button>
                        }
                />
            }

            {
                viewtransaction.startedById == user.id && viewtransaction.otherparty_category == 'Buyer' &&
                <SnackbarContent
                        className={classes.snackbar}
                        style={{backgroundColor:'#1177DD'}}
                        message={`Add all Buyer's Product Request`}
                        action={
                            <Button disabled={loading} onClick = { () => history.push(`/order/create/${viewtransaction.id}`)} variant="contained" color="secondary">
                                Add Product
                            </Button>
                        }
                />
            }

            {
                viewtransaction.startedById == user.id && viewtransaction.otherparty_category == null &&
                <SnackbarContent
                        className={classes.snackbar}
                        style={{backgroundColor:'#1177DD'}}
                        message={`Add all Buyer's Product Request`}
                        action={
                            <Button disabled={loading} onClick = { () => history.push(`/order/create/${viewtransaction.id}`)} variant="contained" color="secondary">
                                Add Product
                            </Button>
                        }
                />
            }
           
            <Grid style={{display: `${loading == true ? 'none' : `` }` }} container spacing={3}>
                <Grid item md={8} xs={12}>
                    <Overview />
                </Grid>
                <Grid item md={4} xs={12}>
                    <OtherParty />
                </Grid>
            </Grid>
        </div>
    )
}

export default Details
