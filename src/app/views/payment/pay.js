import React, { useState } from 'react'
import { Divider, Card, Avatar, Button, Grid, CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Rating } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { VIEWTRANSACTION } from 'app/redux/actions/constant'
import { CreateAgreement } from 'app/redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    avatar: {
        border: '4px solid rgba(var(--body), 0.03)',
        boxShadow: theme.shadows[3],
    },
}))

const PayNow = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const viewtransaction = useSelector(state => state.root.viewtransaction)
    const dispatch = useDispatch()
    const theme = useTheme()
    const [ loading, setLoading ] = React.useState(false)
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const [ file, setfile ] = React.useState(null)
    function handleClickOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }
    const handleChange = (event) => {
        setfile(event.target.files[0]);
    }
    const handleSave = async () => {
        setLoading(true)
       
        setLoading(false);
    }
    return (
        <div>
        {
            loading && (
            <CircularProgress
                size={24}
                className={
                    classes.buttonProgress
                }
            />
        )}
        <Card className="p-4">
             <div className="mb-4 flex justify-between items-center">
                <h4 className="m-0 font-medium">Pay to Escrow Account</h4>
               
            </div>

            <Divider className="mb-6" />

            <div className="flex-column justify-center items-center mb-6">
                <Button
                    variant="contained"
                    className="mr-4"
                    aria-owns='simple-menu'
                    aria-haspopup="true"
                    color="primary"
                    onClick={handleClickOpen}
                >
                   Pay Now 
                </Button>
            </div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    Upload New Document
                </DialogTitle>
                <DialogContent style={{minWidth:400}}>
                    <DialogContentText>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <input 
                            type="file"
                            className="mb-3 w-full"
                            label="Email"
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary" autoFocus>
                        Upload
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
        </div>
    )
}

export default PayNow
