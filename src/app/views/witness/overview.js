import React, { useEffect } from 'react'
import {
    Grid,
    Divider,
    Card,
    TextField,
    Icon,
    Button,
    IconButton,
    CircularProgress
} from '@material-ui/core'
import { format } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import { GetWitness } from 'app/redux/actions'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}))
const Overview = () => {
    const viewtransaction = useSelector(state => state.root.viewtransaction)
    const [ loading, setLoading ] = React.useState(false) 
    const dispatch = useDispatch()
    const witnesses = useSelector(state => state.root.witnesses)
    const pendingwitnesses = useSelector(state => state.root.pendingwitnesses)
    const classes = useStyles()
    useEffect(() => {
        GetData();
    },[])

    const GetData = async () => {
        setLoading(true)
        await dispatch(GetWitness(viewtransaction.id))
        setLoading(false)
    } 
    return (
        <div>
        {
            loading == false && witnesses.length > 0 &&
            <Card className="p-4">
                <div className="mb-4 flex justify-between items-center">
                    <h4 className="m-0 font-medium">Witnesses</h4>
                    <div className="text-muted text-13 font-medium">
                        {format(new Date(), 'MMM dd, yyyy')} at{' '}
                        {format(new Date(), 'HH:mm:aa')}
                    </div>
                </div>

                <Divider className="mb-6" />

            

                <div className="overflow-auto">
                    <div className="min-w-600">
                        <div className="py-3">
                            <Grid container>
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <h6 className="m-0 font-medium">
                                        Name
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
                                    <h6 className="m-0 font-medium">Email</h6>
                                </Grid>
                            
                                <Grid
                                    item
                                    lg={2}
                                    md={2}
                                    sm={2}
                                    xs={2}
                                    className="text-center"
                                >
                                    <h6 className="m-0 font-medium">Date Added</h6>
                                </Grid>
                            </Grid>
                        </div>

                        <Divider />

                        {witnesses.length > 0 && witnesses.map((witness) => (
                            <div key={witness.id} className="py-4">
                                <Grid container alignItems="center">
                                    <Grid item lg={6} md={6} sm={6} xs={6}>
                                        <div className="flex">
                                            {/* <img
                                                className="border-radius-4 w-100 mr-3"
                                                src={product.imgUrl}
                                                alt={product.title}
                                            /> */}
                                            <div className="flex-grow">
                                                <h6 className="mt-0 mb-3 text-15 text-primary">
                                                    {witness.user.firstname} {witness.user.lastname}
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
                                                {witness.user.email}
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
                                            <small style={{cursor:'pointer'}} className="border-radius-4 bg-secondary text-white px-2 py-2px">
                                                JOINED
                                            </small>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        }
        {
            loading == false && pendingwitnesses.length > 0 &&
            <Card className="p-4">
                <div className="mb-4 flex justify-between items-center">
                    <h4 className="m-0 font-medium">Pending Witnesses</h4>
                    <div className="text-muted text-13 font-medium">
                        {format(new Date(), 'MMM dd, yyyy')} at{' '}
                        {format(new Date(), 'HH:mm:aa')}
                    </div>
                </div>

                <Divider className="mb-6" />

            

                <div className="overflow-auto">
                    <div className="min-w-600">
                        <div className="py-3">
                            <Grid container>
                                <Grid item lg={3} md={3} sm={3} xs={3}>
                                    <h6 className="m-0 font-medium">
                                        Name
                                    </h6>
                                </Grid>
                                <Grid
                                    item
                                    lg={5}
                                    md={5}
                                    sm={5}
                                    xs={5}
                                    className="text-center"
                                >
                                    <h6 className="m-0 font-medium">Email</h6>
                                </Grid>
                            
                                <Grid
                                    item
                                    lg={4}
                                    md={4}
                                    sm={4}
                                    xs={4}
                                    className="text-center"
                                >
                                    <h6 className="m-0 font-medium">Status</h6>
                                </Grid>
                            </Grid>
                        </div>

                        <Divider />

                        {pendingwitnesses.map((witness) => (
                            <div key={witness.id} className="py-4">
                                <Grid container alignItems="center">
                                    <Grid item lg={3} md={3} sm={3} xs={3}>
                                        <div className="flex">
                                          
                                            <div className="flex-grow">
                                                <h6 className="mt-0 mb-3 text-15 text-primary">
                                                    {witness.invite.name}
                                                </h6>
                                               
                                              
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid
                                        item
                                        lg={4}
                                        md={4}
                                        sm={4}
                                        xs={4}
                                        className="text-center"
                                    >
                                        <p className="mt-0 mb-6px text-13">
                                            
                                            <span className="font-medium">
                                                {witness.invite.email}
                                            </span>
                                        </p>
                                    </Grid>
                                
                                    <Grid
                                        item
                                        lg={4}
                                        md={4}
                                        sm={4}
                                        xs={4}
                                        className="text-center"
                                    >
                                        <div className="flex justify-end items-center">
                                            <small style={{cursor:'pointer'}} className="border-radius-4 bg-error text-white px-2 py-2px">
                                                PENDING
                                            </small>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        }
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
                    witnesses.length == 0 && pendingwitnesses.length == 0 &&
                    <Card className="p-4">
                    <div className="min-w-600">
                    <div className="py-3">
                    <div className="flex">
                            
                            <div className="flex-grow">
                                <h6 className="mt-0">
                                    No Witness Added Yet
                                </h6>
                            
                            </div>
                        </div>
                    </div>
                    </div>
                    </Card>
                }
        </div>
    )
}

const dummyProductList = [
    {
        id: '323sa680b32497dsfdsgga21rt47',
        imgUrl: '/assets/images/products/speaker-1.jpg',
        price: 324.0,
        amount: 10,
        title: 'Bass Speaker Black',
        category: 'audio',
        brand: 'Microlab',
        item: '2019 6582 2365',
    },
    {
        id: '323sa680b324976dfgga21rt47',
        imgUrl: '/assets/images/products/speaker-2.jpg',
        price: 454.0,
        amount: 15,
        title: 'Bass Speaker',
        category: 'audio',
        brand: 'Microlab',
        item: '2019 6582 2365',
    },
]

export default Overview
