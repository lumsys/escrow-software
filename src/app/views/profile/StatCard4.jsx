import React from 'react'
import { Grid, Card, IconButton, Icon } from '@material-ui/core'

const StatCard4 = () => {
    const statList = [
        {
            icon: 'colorize',
            amount: 48,
            title: 'Invoices',
        },
        {
            icon: 'attachment',
            amount: 291,
            title: 'Transactions',
        },
        {
            icon: 'mode_comment',
            amount: 291,
            title: 'Disputed',
        },
        {
            icon: 'remove_red_eye',
            amount: 110,
            title: 'Users',
        },
    ]

    return (
        <div>
            <Grid container spacing={3}>
                {statList.map((item, ind) => (
                    <Grid key={item.title} item md={6} xs={12}>
                        <Card
                            elevation={3}
                            className="p-5 flex-column justify-center items-center"
                        >
                            <div className="mb-6px">
                                <IconButton className="p-3 bg-light-gray">
                                    <Icon className="text-muted">
                                        {item.icon}
                                    </Icon>
                                </IconButton>
                            </div>

                            <h3 className="mt-1 text-32">
                                {item.amount.toLocaleString()}
                            </h3>
                            <p className="m-0 text-muted">{item.title}</p>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default StatCard4
