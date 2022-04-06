import React, { Component } from 'react'
import { Breadcrumb } from 'app/components'
import CompanyView from './CompanyView'
import { Card } from '@material-ui/core'


class View extends Component {
    render() {
        return (
            <div>
                <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                         
                            { name: 'View Company Staff' },
                        ]}
                    />
                </div>
                    <CompanyView/>
            </div>
            </div>
        )
    }
}

export default View