import React, { Component } from 'react'
import { Breadcrumb } from 'app/components'
import AccountType from './accounttype'
import { Card } from '@material-ui/core'

class Account extends Component {
    render() {
        return (
            <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                         
                            { name: 'Update Your Profile' },
                        ]}
                    />
                </div>
                <Card className="px-6 pt-2 pb-4">
                    <AccountType />
                </Card>
            </div>
        )
    }
}

export default Account
