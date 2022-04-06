import React, { useState, useEffect } from 'react'
import { Breadcrumb } from 'app/components'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Autocomplete, createFilterOptions } from '@material-ui/lab'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { useDispatch, useSelector } from 'react-redux'
import { CompleteProfile, GetCities, GetCountries, GetStates } from 'app/redux/actions'
import { store } from 'app/redux/store/index'
import { MESSAGE } from 'app/redux/actions/constant'

const AccountType = () => {
    const dispatch = useDispatch();
   
    const [ accounttype, setAccountType ] = useState(null);
   
    const [ profile, setProfile ] = useState({
        lastname:'',
        firstname:'',
        phone_number:'',
        gender:'',
        address:'',
    })
    useEffect(() => {
       Process();
      
    }, [])

    const Process = async () => {
      //  setLoading(true);
        await dispatch(GetCountries());
       // setLoading(false);
    }

    const handleSubmit = async (e) => {
       
        if(accounttype == '')
            return store.dispatch({ type: MESSAGE, payload: { status : false, message: 'Account Type Required', type: 'error'} })
                 
      
    }

    
    const handleChange6 = async (event, newValue) => {
        if (newValue && newValue.label) {
            setAccountType(newValue.label)
        }
    }

    

    const {
        lastname,
        firstname,
        phone_number,
        address,
    } = profile

    return (

        <div>
        <div className="mb-sm-30 px-6 pt-5 profile-top" style={{height:'5vh'}}>
                    <Breadcrumb
                        routeSegments={[
                         
                            { name: 'Change Account Type' },
                        ]}
                    />
                </div>
    
    <div className="mb-sm-30 px-20" >

            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6} className="mt-20">
                   
                    <Grid item lg={6} md={6} sm={12} xs={12} style={{marginTop:-5}}>
                    <Autocomplete
        
                            //className="mb-4" 
                            onChange ={handleChange6}
                            options={[ { label:'Individual' }, { label: 'Business' } ]}
                            getOptionLabel={(option) => option.label}
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
                
               
                <Button color="primary" variant="contained" type="submit" style={{marginBottom:-40}}>
                    <Icon>send</Icon>
                    <span className="pl-2 capitalize">Submit</span>
                </Button>
            </ValidatorForm>
        </div>
        </div>
    )
}

export default AccountType
