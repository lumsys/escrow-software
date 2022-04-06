import React, { Component } from 'react'
import { Breadcrumb } from 'app/components'
import TopSellingTable1 from './TopSellingTable1'
import StatCard6 from './StatCard6'
import RowCard1 from './RowCard1'
import { Grid, Card, Button,Icon } from '@material-ui/core'


 class Newtrans extends Component {
    render() {
        return (
            <div>
                
                 <div className="mb-sm-30 px-6 pt-10 profile-top" style={{height:'7vh'}}>
                    <Breadcrumb
                        routeSegments={[
                         
                            { name: 'Create Transaction ' },
                        ]}
                    />
                </div>

<div className="flex flex-wrap mb-40">
                    <div className="relative">
                        <Button
                            variant="contained"
                            color="primary"
                            //disabled={loading}
                            type="submit"
                        >
                            Create Transaction
                        </Button>
    
                    </div>
                                  
                </div>
                <Grid container spacing={10} className="mt-10">
                   
                <Grid item lg={8} md={8} sm={12} xs={12} style={{marginTop:-80}}>
                   <TopSellingTable1 />
               </Grid>
               </Grid>

            </div>
        )
    }
}



export default Newtrans