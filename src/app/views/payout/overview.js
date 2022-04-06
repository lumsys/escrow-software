import React from 'react'
import {
    Grid,
    Divider,
    Card,
    CircularProgress
} from '@material-ui/core'
import { format } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import { GetAgreements } from 'app/redux/actions'
import { useState, useEffect } from 'react'
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
}))

const Overview = () => {
    const payments = [];//useSelector(state => state.root.agreements)
    const viewtransaction = useSelector(state => state.root.viewtransaction)
    const dispatch = useDispatch()
    const [ loading, setLoading ] = useState(false)
    const classes = useStyles()
    useEffect(() => {
        
    },[]);

    const GetData = async () => {
        setLoading(true)
        //await dispatch(GetAgreements(viewtransaction.id))
        setLoading(false)
    }
    return (
        <Card className="p-4">
            <div className="mb-4 flex justify-between items-center">
                <h4 className="m-0 font-medium">Payout History</h4>
                <div className="text-muted text-13 font-medium">
                    {format(new Date(), 'MMM dd, yyyy')} at{' '}
                    {format(new Date(), 'HH:mm:aa')}
                </div>
            </div>

            <Divider className="mb-6" />
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
              payments.length > 0 &&
                <div className="overflow-auto">
                <div className="min-w-600">
                    <div className="py-3">
                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <h6 className="m-0 font-medium">
                                    Uploaded By
                                </h6>
                            </Grid>
                            <Grid
                                item
                                lg={3}
                                md={3}
                                sm={3}
                                xs={3}
                                className="text-center"
                            >
                                <h6 className="m-0 font-medium">Date Uploaded</h6>
                            </Grid>
                           
                            <Grid
                                item
                                lg={2}
                                md={2}
                                sm={2}
                                xs={2}
                                className="text-center"
                            >
                                <h6 className="m-0 font-medium">Download</h6>
                            </Grid>
                        </Grid>
                    </div>

                    <Divider />

                    {payments.map((doc) => (
                        <div key={doc.id} className="py-4">
                            <Grid container alignItems="center">
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <div className="flex">
                                      
                                        <div className="flex-grow">
                                            <h6 style={{textTransform:'capitalize'}} className="mt-0 mb-3 text-15 text-primary">
                                                {doc.uploadedBy.firstname}  {doc.uploadedBy.lastname}
                                            </h6>
                                           
                                        </div>
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    lg={3}
                                    md={3}
                                    sm={3}
                                    xs={3}
                                    className="text-center"
                                >
                                     <p className="mt-0 mb-6px text-13">
                                       
                                        <span className="font-medium">
                                              {format(new Date(doc.created_at), 'MMM dd, yyyy')}
                                        </span>
                                    </p>
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
                                        <small style={{cursor:'pointer'}} className="border-radius-4 bg-error text-white px-2 py-2px">
                                            Download
                                        </small>
                                       
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    ))}
                </div>
            </div>
          }   
           {
                    payments.length == 0 &&
                    <div className="min-w-600">
                    <div className="py-3">
                    <div className="flex">
                            
                            <div className="flex-grow">
                                <h6 className="mt-0">
                                    No Payment Made Yet
                                </h6>
                            
                            </div>
                        </div>
                    </div>
                    </div>
                }
        </Card>
    )
}


export default Overview
