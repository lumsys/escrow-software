import React, { Component, useState } from 'react'
import { Breadcrumb } from 'app/components'
import SimpleForm from './simpleform'
import { Card, Grid, Button, CircularProgress } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { useDispatch } from 'react-redux'
import { UpdateAccountType } from '../../redux/actions';
import { TextField } from '@material-ui/core'
import { Autocomplete, createFilterOptions } from '@material-ui/lab'

const UpdateProfile = () => {

    const [ accounttype, setaccounttype ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const dispatch = useDispatch()

    const handleChange = async (event, newValue) => {
        if (newValue && newValue.name) {
            setaccounttype(newValue.name)
        }
    }
    const handleSubmit = async (e) => {
        setLoading(true)
        
        if(accounttype == '') return false;
        let data = { account_type : accounttype}
        await dispatch(UpdateAccountType(data))
        setLoading(false)
        //setaccounttype('')
    }
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
                <div>
                    <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                        <Grid container spacing={6} className="mt-5">
                            <Grid item lg={6} md={6} sm={12} xs={12} style={{marginTop:0}}>
                            <Autocomplete
                                    
                                    className="mb-4 w-full"
                                    onChange ={handleChange}
                                    options={[{name: 'Individual'},{name: 'Business'}]}
                                    name="accounttype"
                                    getOptionLabel={(option) => option.name}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Account Type"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    )}
                                /> 
                            </Grid>  
                        
                        
                        </Grid>
                    
                        <Button 
                            color="primary" 
                            variant="contained" 
                            type="submit"
                            disabled={loading}
                        >

                            <span className="pl-2 capitalize">Submit</span>
                        </Button>
                        {loading && (
                            <CircularProgress
                                size={24}
                            />
                        )}
                    </ValidatorForm>
                </div>
                </Card>
            </div>
        )
}

export default UpdateProfile
