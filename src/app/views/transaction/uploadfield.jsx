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

const UploadField = () => {
    const dispatch = useDispatch();
    const classes = useStyles()
    const [ loading, setLoading ] = useState(false);
    const countries = useSelector(state => state.root.countries);
    const country_states = useSelector(state => state.root.states);
    const state_cities = useSelector(state => state.root.cities);
    const [ file, setFile] = useState(null);
    const responses = useSelector(state => state.root.responses);
    const [ start , setStart ] = useState(false);
    const [ profile, setProfile ] = useState({
        lastname:'',
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
            //setProfile({ lastname: '', firstname: '', phone_number:'',gender:'',address:'' });
            setFile(null);
        }    
    }

    const Process = async () => {
        setLoading(true);
        await dispatch(GetCountries());
        setLoading(false);
    }

    const handleSubmit = async (e) => {
       
                 
        setLoading(true);
        setStart(true);
        let formdata = new FormData();
        
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


<div className="mb-sm-30 px-6 pt-10 profile-top" style={{height:'7vh'}}>
                    <Breadcrumb
                        routeSegments={[
                         
                            { name: 'Upload File' },
                        ]}
                    />
                </div>


            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6} className="mt-5">
                   
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
                    <span className="pl-2 capitalize">Upload</span>
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

export default UploadField
