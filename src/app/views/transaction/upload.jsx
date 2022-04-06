import React, { Component } from 'react'
import { Breadcrumb } from 'app/components'
import UploadField from './uploadfield'
import { Grid, Card, Button,Icon } from '@material-ui/core'


 class Upload extends Component {
    render() {
        return (
            <div>
                
                 <div className="mb-sm-30 px-6 pt-5 profile-top" style={{height:'40vh'}}>
                    <Breadcrumb
                        routeSegments={[
                         
                            { name: 'Witness Page' },
                        ]}
                    />
                </div>

<div className="flex flex-wrap mb-4">
                    <div className="relative">
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Upload
                        </Button>
    
                    </div>
                                  
                </div>
                <Grid container spacing={3}>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                   <UploadField />
               </Grid>
               </Grid>

            </div>
        )
    }
}



export default Upload