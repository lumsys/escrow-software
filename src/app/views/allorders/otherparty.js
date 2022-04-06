import React, { useState, useEffect} from 'react'
import { Divider, Card, Avatar, Button, CircularProgress } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { Rating } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { GetOtherParty } from 'app/redux/actions'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    avatar: {
        border: '4px solid rgba(var(--body), 0.03)',
        boxShadow: theme.shadows[3],
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}))

const OtherParty = () => {
    const classes = useStyles()
    const history = useHistory()
    const viewtransaction = useSelector(state => state.root.viewtransaction)
    const otherpartyinformation = useSelector(state => state.root.otherpartyinformation)
    const otherpartyinformation_invite = useSelector(state => state.root.otherpartyinformation_invite)
    const dispatch = useDispatch()
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        GetData()
    },[viewtransaction])

    const GetData = async () => {
        setLoading(true)
        await dispatch(GetOtherParty(viewtransaction.id))
        setLoading(false)
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
            {
                loading == false && otherpartyinformation != null && 
                <Card className="p-4">
                    <div className="mb-4 flex justify-between items-center">
                        <h4 className="m-0 font-medium">Customer</h4>
                    </div>

                    <Divider className="mb-6" />

                    <div className="flex-column justify-center items-center mb-6">
                        <Avatar
                            className={clsx('w-100 h-100 mb-6', classes.avatar)}
                            src="/assets/images/faces/5.jpg"
                        />
                        <h5>{otherpartyinformation.transactionwith.firstname} { otherpartyinformation.transactionwith.lastname}</h5>
                        <p className="text-primary mt-0 mb-2">
                            {otherpartyinformation.transactionwith.email}
                        </p>
                      
                    </div>

                    <Divider className="mb-6" />

                    <div>
                        <p className="font-medium mb-3">{otherpartyinformation.transactionwith.address}</p>
                        <p className="m-0">{ otherpartyinformation.transactionwith.cityId != null && otherpartyinformation.transactionwith.city.name}, { otherpartyinformation.transactionwith.stateId != null && otherpartyinformation.transactionwith.state.name}, { otherpartyinformation.transactionwith.countryId != null && otherpartyinformation.transactionwith.country.name}</p>
                    </div>
                </Card>
            }
        {
            loading == false && otherpartyinformation_invite != null &&
            <Card className="p-4">
                    <div className="mb-4 flex justify-between items-center">
                        <h4 className="m-0 font-medium">Invited User</h4>
                    </div>

                    <Divider className="mb-6" />

                    <div className="flex-column justify-center items-center mb-6">
                        <Avatar
                            className={clsx('w-100 h-100 mb-6', classes.avatar)}
                            src="/assets/images/faces/5.jpg"
                        />
                        <h5>{otherpartyinformation_invite.name}</h5>
                        <p className="text-primary mt-0 mb-2">
                            {otherpartyinformation_invite.email}
                        </p>
                    </div>
                </Card>
        }
        {
            loading == false && otherpartyinformation_invite == null && otherpartyinformation == null &&
            <Card className="p-4">
                <div className="mb-4 flex justify-between items-center">
                    <h4 className="m-0 font-medium">Customer</h4>
                   
                </div>

                <Divider className="mb-6" />

                <div className="flex-column justify-center items-center mb-6">
                    <Button
                        variant="contained"
                        className="mr-4"
                        aria-owns='simple-menu'
                        aria-haspopup="true"
                        color="primary"
                        onClick = { () => history.push(`/transaction/transactionwith/${viewtransaction.id}`) }
                    >
                        Add Buyer / Seller
                    </Button>
                </div>
            </Card>
        }
        
        </div>
    )
}

export default OtherParty
