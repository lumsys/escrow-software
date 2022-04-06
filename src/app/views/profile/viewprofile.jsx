import React, { useState, useEffect } from 'react'
import { Breadcrumb } from 'app/components'
import './viewprofile.css'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
    TextField,
    MenuItem,
    IconButton,
} from '@material-ui/core'
import clsx from 'clsx'
import { Divider, Card, Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Rating } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'

import StatCard4 from './StatCard4'
import { useSelector } from 'react-redux'
import { useTheme } from '@material-ui/styles'
import DoughnutChart from '../dashboard/shared/Doughnut'


const useStyles = makeStyles(({ palette, ...theme }) => ({
    avatar: {
        border: '4px solid rgba(var(--body), 0.03)',
        boxShadow: theme.shadows[3],
    },
}))
const ViewProfile = () => {
    const classes = useStyles()
    const user = useSelector(state => state.root.user);
    const theme = useTheme()
    return (
        <div>
            <div className="mb-sm-30 px-6 pt-5 profile-top" style={{height:'40vh'}}>
                    <Breadcrumb
                        routeSegments={[
                         
                            { name: 'View Profile ' },
                        ]}
                    />
                </div>
               
                <div className="analytics m-sm-30" style={{position:'relative',top:-150}}>
                  
                   

                    <Grid container spacing={3}>
                        <Grid item md={4} xs={12}>
                            <StatCard4 />
                        </Grid>
                       
                        <Grid item md={4} xs={12}>
                        <Card className="px-6 py-4 mb-6">
                            <div className="card-title">Transaction Charts</div>
                            <div className="card-subtitle">Last 30 days</div>
                            <DoughnutChart
                                height="300px"
                                color={[
                                    theme.palette.primary.dark,
                                    theme.palette.primary.main,
                                    theme.palette.primary.light,
                                ]}
                            />
                        </Card>

                        
                        </Grid>
                        <Grid item md={4} xs={12}>
                        <Card className="p-4">
                            <div className="mb-4 flex justify-between items-center">
                                <h4 className="m-0 font-medium">Profile</h4>
                                <Link className="text-primary" >
                                    Details
                                </Link>
                            </div>

                            <Divider className="mb-6" />

                            <div className="flex-column justify-center items-center mb-6">
                                <Avatar
                                    className={clsx('w-100 h-100 mb-6', classes.avatar)}
                                    src="/assets/images/faces/5.jpg"
                                />
                                <h5>{user.firstname} {user.lastname}</h5>
                                <p className="text-primary mt-0 mb-2">
                                    {user.email}
                                </p>
                                <p className="mt-0">{user.phone_number}</p>
                                <p className="mt-0">{user.account_type}</p>
                                {/* <Rating readOnly={true} value={4} /> */}
                            </div>

                            <Divider className="mb-6" />

                            <div className="mb-6">
                                <p className="font-medium mb-3">Address</p>
                                <p className="mt-0 mb-1">{user.address}</p>
                                <p className="m-0">{ user.city != null && user.city.name}, { user.state != null && user.state.name}, { user.country != null && user.country.name}</p>
                            </div>

                           
                        </Card>
    
                        </Grid>
                    </Grid>
                </div>
        </div>
       
    )
}

export default ViewProfile
