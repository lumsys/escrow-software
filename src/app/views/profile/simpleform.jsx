import React, { useState, useEffect } from 'react'
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
import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}))

const SimpleForm = () => {
    const dispatch = useDispatch();
    const classes = useStyles()
    const [ loading, setLoading ] = useState(false);
    const countries = useSelector(state => state.root.countries);
    const country_states = useSelector(state => state.root.states);
    const state_cities = useSelector(state => state.root.cities);
    
    const [ country, setCountry] = useState(null);
    const [state, setState] = useState(null);
    const [ city, setCities ] = useState(null);
    const [ gender, setGender ] = useState(null);
    const [ accounttype, setAccountType ] = useState(null);
    const [ file, setFile] = useState(null);
    const responses = useSelector(state => state.root.responses);
    const [ start , setStart ] = useState(false);
    const [ profile, setProfile ] = useState({
        lastname:'',
        firstname:'',
        phone_number:'',
        gender:'',
        address:'',
    })
    useEffect(() => {
       Process();
       //alert(JSON.stringify(state_cities))
    }, [])

    useEffect(() => {
        Clear();
    },[responses])

    const Clear = () => {
        if(responses == null)
            return false;
        if(responses.status == true && start == true)
        {
            setProfile({ lastname: '', firstname: '', phone_number:'',gender:'',address:'' });
            setFile(null);
            setAccountType(null);
            setGender(null);
            setCities(null);
            setState(null);
            setCountry(null);
        }    
    }

    const Process = async () => {
        setLoading(true);
        await dispatch(GetCountries());
        setLoading(false);
    }

    const handleSubmit = async (e) => {
        if(profile.lastname == '')
            return store.dispatch({ type: MESSAGE, payload: { status : false, message: 'LastName Required', type: 'error'} })
        if(gender == '')
            return store.dispatch({ type: MESSAGE, payload: { status : false, message: 'Gender Required', type: 'error'} })
        if(country == '')
            return store.dispatch({ type: MESSAGE, payload: { status : false, message: 'Country Required', type: 'error'} })
        if(state == '')
            return store.dispatch({ type: MESSAGE, payload: { status : false, message: 'State Required', type: 'error'} })
        if(city == '')
            return store.dispatch({ type: MESSAGE, payload: { status : false, message: 'City Required', type: 'error'} })
        if(accounttype == '')
            return store.dispatch({ type: MESSAGE, payload: { status : false, message: 'Account Type Required', type: 'error'} })
                 
        setLoading(true);
        setStart(true);
        let formdata = new FormData();
        formdata.append('lastname',profile.lastname);
        formdata.append('firstname',profile.firstname);
        formdata.append('phone_number',profile.phone_number);
        formdata.append('gender',profile.gender);
        formdata.append('address',profile.address);
        formdata.append('country',country);
        formdata.append('state',state);
        formdata.append('city',city);
        formdata.append('gender',gender);
        formdata.append('accounttype',accounttype);
        if(file != null) formdata.append('profile_image',file);
        await dispatch(CompleteProfile(formdata));
        setLoading(false)
        setStart(false);
    }

    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...profile }
        temp[name] = value
        setProfile(temp)
    }

 
    const handleChange2 = async (event, newValue) => {
        if (newValue && newValue.id) {
            setCountry(newValue.id)
            await dispatch(GetStates(newValue.id));
        }
    }
    const handleChange3 = async (event, newValue) => {
        if (newValue && newValue.id) {
            setState(newValue.id)
            await dispatch(GetCities(newValue.id));
        }
    }

    const handleChange4 = async (event, newValue) => {
        if (newValue && newValue.id) {
            setCities(newValue.id)
        }
    }

    const handleChange5 = async (event, newValue) => {
        if (newValue && newValue.label) {
            setGender(newValue.label)
        }
    }
    const handleChange6 = async (event, newValue) => {
        if (newValue && newValue.label) {
            setAccountType(newValue.label)
        }
    }

    const handleChange7 = (e) => {
        let file = e.target.files[0];
        if(file == null) return false
        let size = e.target.files[0] / 1000000
        if(size > 2.0)
        {
            return store.dispatch({ type: MESSAGE, payload: { status : false, message: 'File Size is too Large (Maximum of 3MB is required)', type: 'error'} })

        }
        setFile(file)
    }

    const {
        lastname,
        firstname,
        phone_number,
        address,
    } = profile

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6} className="mt-5">
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                     

                    <TextValidator
                            className="mb-4 w-full"
                            label="User Name"
                            variant="outlined"
                            onChange={handleChange}
                            type="text"
                            name="firstname"
                            value={firstname || ''}
                            validators={['required']}
                            errorMessages={[
                                'this field is required',
                            ]}
                        />              
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="Lastname"
                            variant="outlined"
                            onChange={handleChange}
                            type="text"
                            name="lastname"
                            value={lastname || ''}
                            validators={['required']}
                            errorMessages={[
                                'this field is required'
                            ]}
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12} style={{marginTop:-20}}>
                    <TextValidator
                            className="mb-4 w-full"
                            label="Phone Number"
                            variant="outlined"
                            onChange={handleChange}
                            type="number"
                            name="phone_number"
                            value={phone_number || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid> 
                    <Grid item lg={6} md={6} sm={12} xs={12} style={{marginTop:-20}}>
                    <Autocomplete
                            className="mb-4 w-full"
                            onChange ={handleChange5}
                            options={[ { label: 'Male' },
                            { label: 'Female' }]}
                            getOptionLabel={(option) => option.label}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Gender"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />   
                    </Grid>   
                    <Grid item lg={6} md={6} sm={12} xs={12} style={{marginTop:-20}}>
                    <Autocomplete
                            
                            className="mb-4 w-full"
                            onChange ={handleChange2}
                            options={countries}
                            name="country"
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    name="country"
                                    label="Country"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        /> 
                    </Grid>  
                    <Grid item lg={6} md={6} sm={12} xs={12} style={{marginTop:-20}}>
                    <Autocomplete
                            className="mb-4 w-full"
                            onChange ={handleChange3}
                            options={country_states == null ? [] : country_states}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="State"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        /> 
                    </Grid>  
                    <Grid item lg={6} md={6} sm={12} xs={12} style={{marginTop:-20}}>
                    <Autocomplete
                            className="mb-4 w-full"
                            onChange ={handleChange4}
                            options={state_cities == null ? [] : state_cities}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="City"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        /> 
                    </Grid> 
                    <Grid item lg={6} md={6} sm={12} xs={12} style={{marginTop:-20}}>
                        <TextValidator
                            className="mb-4 w-full"
                            onChange = {handleChange}
                            label="Address"
                            variant="outlined"
                            type="text"
                            name="address"
                            value={ address || ''}
                            validators={['required']}
                            errorMessages={[
                                'this field is required'
                            ]}
                        />   

                    </Grid> 
                    <Grid item lg={6} md={6} sm={12} xs={12} style={{marginTop:-20}}>
                    <Autocomplete
                            className="mb-4 w-full"
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
                    <Grid item lg={6} md={6} sm={12} xs={12} style={{marginTop:-20}}>
                        <TextValidator
                            className="mb-4 w-full"
                            onChange = {handleChange7}
                            label="Profile Image"
                            variant="outlined"
                            type="file"
                            name="profile_image"
                           
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
                        className={
                            classes.buttonProgress
                        }
                    />
                )}
            </ValidatorForm>
        </div>
    )
}

export default SimpleForm
