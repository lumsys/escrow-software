import React, { Component } from 'react'
import { Breadcrumb } from 'app/components'
import SimpleForm from './simpleform'
import { Card } from '@material-ui/core'
import StatCards from './StatCards'

class Invited extends Component {
    render() {
        return (
            <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                         
                            { name: 'Invite New User to Escrow' },
                        ]}
                    />
                </div>
                <StatCards />
            </div>
        )
    }
}

export default Invited
