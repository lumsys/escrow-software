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

const Documents = () => {
    const viewtransaction = useSelector(state => state.root.viewwitnesstransaction)
    const dispatch = useDispatch()
    const [ loading, setLoading ] = useState(false)
    const classes = useStyles()
  
    return (
        <Card className="p-4">
            <div className="mb-4 flex justify-between items-center">
                <h4 className="m-0 font-medium">Documents</h4>
                <div className="text-muted text-13 font-medium">
                    {format(new Date(), 'MMM dd, yyyy')} at{' '}
                    {format(new Date(), 'HH:mm:aa')}
                </div>
            </div>

            <Divider className="mb-6" />

          {
              viewtransaction.transaction_agreement.length > 0 &&
                <div className="">
                <div className="">
                    <div className="py-3">
                        <Grid container>
                            <Grid item lg={6} md={6} sm={6} xs={6}>
                                <h6 className="m-0 font-medium">
                                    Uploaded
                                </h6>
                            </Grid>
                           </Grid>
                    </div>

                    <Divider />

                    {viewtransaction.transaction_agreement.map((doc) => (
                        <div key={doc.id} className="py-4">
                            <Grid>
                            <div className="">
                                      
                                      <div className="">
                                          <h6 style={{textTransform:'capitalize'}} className="mt-0 mb-3 text-15 text-primary">
                                              {doc.uploadedBy.firstname}  {doc.uploadedBy.lastname}
                                          </h6>
                                          <p className="mt-0 mb-6px text-13">
                                     
                                              <span className="font-medium">
                                                  {format(new Date(doc.created_at), 'MMM dd, yyyy')}
                                              </span>
                                          </p>
                                          <div className="">
                                              <small style={{cursor:'pointer'}} className="border-radius-4 bg-error text-white px-2 py-2px">
                                                  Download
                                              </small>
                                          
                                          </div>
                                         
                                      </div>
                                  </div>
                               </Grid>
                        </div>
                    ))}
                </div>
            </div>
          }   
           {
                    viewtransaction.transaction_agreement.length == 0 &&
                    <div className="min-w-600">
                    <div className="py-3">
                    <div className="flex">
                            
                            <div className="flex-grow">
                                <h6 className="mt-0">
                                    No Document Added Yet
                                </h6>
                            
                            </div>
                        </div>
                    </div>
                    </div>
                }
        </Card>
    )
}


export default Documents
