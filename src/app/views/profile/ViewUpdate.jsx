import React, { Component } from 'react'
import { Breadcrumb } from 'app/components'
import ViewUpdate from './viewupdate'
import { Card } from '@material-ui/core'

class ViewProfile extends Component {
    render() {
        return (
            <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                         
                            { name: 'View Your Profile' },
                        ]}
                    />
                </div>
                <Card className="px-6 pt-2 pb-4">
                    <ViewProfile />
                </Card>
            </div>
        )
    }
}

export default UpdateProfile
