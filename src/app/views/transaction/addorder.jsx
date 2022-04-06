import React, { Component } from 'react'
import { Breadcrumb } from 'app/components'
import TopSellingTable2 from './TopSellingTable2'
import { Grid, Card, Button,Icon } from '@material-ui/core'


 class AddOrder extends Component {
    render() {
        return (
            <div>
                
                <div className="mb-sm-30 px-6 pt-10 profile-top" style={{height:'7vh'}}>
                    <Breadcrumb
                        routeSegments={[
                         
                            { name: 'Add Order' },
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
                            Add Order
                        </Button>
    
                    </div>
                                  
                </div>
                <Grid container spacing={10} className="mt-10">
                   
                 <Grid item lg={8} md={8} sm={12} xs={12} style={{marginTop:-80}}>
                   <TopSellingTable2 />
               </Grid>
               </Grid>

            </div>
        )
    }
}



export default AddOrder