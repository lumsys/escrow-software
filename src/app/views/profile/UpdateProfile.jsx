import React, { Component } from 'react'
import { Breadcrumb } from 'app/components'
import SimpleForm from './simpleform'
import { Card } from '@material-ui/core'

class UpdateProfile extends Component {
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
                    <SimpleForm />
                </Card>
            </div>
        )
    }
}

export default UpdateProfile
