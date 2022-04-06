import React, { useEffect, useState } from 'react'
import { IconButton, Icon, Button, Grid, CircularProgress } from '@material-ui/core'
import Orders from './orders'
import Documents from './documents'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
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
}))
const Details = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const history = useHistory()
    const [ loading,setLoading ] = useState(false)
    const viewtransaction = useSelector(state => state.root.viewwitnesstransaction) 
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
                        onClick={() => history.push(`/transaction/witnessview/message/${viewtransaction.id}`)}
                        color="primary"
                    >
                        Message
                    </Button>
                    <Button
                        variant="outlined"
                        className="mr-4"
                        aria-owns='simple-menu'
                        aria-haspopup="true"
                        onClick={() => history.push(`/payment/witnessview/transaction/${viewtransaction.id}`)}
                        color="primary"
                    >
                        Payment & History
                    </Button>
                    </div>
                </div>

               
            </div>

            <Grid style={{display: `${loading == true ? 'none' : `` }` }} container spacing={3}>
                <Grid item md={8} xs={12}>
                    <Orders />
                </Grid>
                <Grid item md={4} xs={12}>
                    <Documents />
                </Grid>
            </Grid>
        </div>
    )
}

export default Details
