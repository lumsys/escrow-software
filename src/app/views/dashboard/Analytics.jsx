import React, { Fragment } from 'react'
import { Grid, Card, Button } from '@material-ui/core'
import DoughnutChart from './shared/Doughnut'
import StatCards from './shared/StatCards'
import TopSellingTable from './shared/TopSellingTable'
import RowCards from './shared/RowCards'
import StatCards2 from './shared/StatCards2'
import UpgradeCard from './shared/UpgradeCard'
import Campaigns from './shared/Campaigns'
import { useTheme } from '@material-ui/styles'
import { SnackbarContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import history from 'history.js'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
    snackbar: {
        margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
}))

const Analytics = () => {
    const theme = useTheme()
    const classes = useStyles()
    const user = useSelector(state => state.root.user);
    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                {
                    user != null && user.address == null &&
                        <SnackbarContent
                        className={classes.snackbar}
                        style={{backgroundColor:'#1177DD'}}
                        message={`Welcome ${user.firstname}, Kindly Complete your Profile to Use this Platform`}
                        action={
                        <Button  variant="contained"
                        color="primary"
                        className={classes.button} onClick = {() => history.push('/profile/update')} color="secondary" size="small">
                        Complete Profile Now
                        </Button>
                        
                    }
                    /> 
                }

                {
                     user != null && user.companyId == null &&
                        <SnackbarContent
                        className={classes.snackbar}
                        style={{backgroundColor:'#1177DD'}}
                        message={`Change your Account Type to allows you to add your Employee to your Company Account`}
                        action={

                            <Button  variant="contained"
                            color="primary"
                            className={classes.button} onClick = {() => history.push('/profile/update')} color="secondary" size="small">
                            Update Now
                            </Button>
                    }
                    />
                }

                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                   
                        <StatCards />

                        <TopSellingTable />

                        <StatCards2 />

                        <h4 className="card-title text-muted mb-4">
                            Completed Transactions
                        </h4>
                        <RowCards />
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
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
                </Grid>
            </div>
        </Fragment>
    )
}

export default Analytics
