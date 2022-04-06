import React, { Component } from 'react'
import { Breadcrumb } from 'app/components'
import InviteCompany from './InviteCompany'
import { Card } from '@material-ui/core'


class Invite extends Component {
    render() {
        return (
            <div>
                <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                         
                            { name: 'Invite Company' },
                        ]}
                    />
                </div>
                <Card className="px-6 pt-2 pb-4">
                    <InviteCompany />
                </Card>
            </div>
            </div>
        )
    }
}

export default Invite