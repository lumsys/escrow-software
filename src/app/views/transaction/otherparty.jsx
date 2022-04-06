import React, { Component } from 'react'
import { Breadcrumb } from 'app/components'
import { Grid, Card, Button,Icon } from '@material-ui/core'
import RowCard1 from './RowCard1'


 class AddOrder extends Component {
    render() {
        return (
            <div>
                
                <div className="mb-sm-30 px-6 pt-10 profile-top" style={{height:'7vh'}}>
                    <Breadcrumb
                        routeSegments={[
                         
                            { name: 'Other Party' },
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
                            Other Party
                        </Button>
    
                    </div>
                                  
                </div>
                <Grid container spacing={10} className="mt-10">
                   
                   <Grid item lg={8} md={8} sm={12} xs={12} style={{marginTop:-80}}>
                   <RowCard1 />
               </Grid>
               </Grid>

            </div>
        )
    }
}



export default AddOrder