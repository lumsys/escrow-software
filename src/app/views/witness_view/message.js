import React from 'react'
import { IconButton, Icon, Button, Grid } from '@material-ui/core'
import OverviewMessage from './overviewmessage'
import AddMessage from './addmessage'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { GetMessages } from 'app/redux/actions'

const Message = () => {
    const history = useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const viewtransaction = useSelector(state => state.root.viewwitnesstransaction)
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
                        onClick={ () => history.push(`/transaction/witnessview/detail/${viewtransaction.id}`) }
                        color="primary"
                    >
                        Order
                    </Button>
                    </div>
                </div>

                <div className="">
                   
                   
                   
                </div>
            </div>

            <Grid container spacing={3}>
                <Grid item md={8} xs={12}>
                    <OverviewMessage />
                </Grid>
                <Grid item md={4} xs={12}>
                    <AddMessage />
                </Grid>
            </Grid>
        </div>
    )
}

export default Message
