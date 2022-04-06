import React, { Component } from 'react'
import { Breadcrumb } from 'app/components'
import NewTrans from './newtrans'
import { Card } from '@material-ui/core'

class Create extends Component {
    render() {
        return (
            <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                         
                            { name: 'Create Transaction' },
                        ]}
                    />
                </div>
                <Card className="px-6 pt-2 pb-4">
                    <NewTrans />
                </Card>
            </div>
        )
    }
}

export default Create
