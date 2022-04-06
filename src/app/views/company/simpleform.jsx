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
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'
import { CreateCompany } from 'app/redux/actions'


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
    },
    snackbar: {
        margin: theme.spacing(1),
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}))

const SimpleForm = () => {
    const [loading, setLoading ]= useState(false)
    const dispatch =  useDispatch();
    const classes = useStyles()
    const responses = useSelector(state => state.root.responses)
    const [company, setCompany] = useState({
        name: '',
        address: ''
    })

    useEffect(() => {
        Clear();
    },[responses])

    const Clear = () => {
        if(responses == null)
            return false;
        if(responses.status == true)
        {
            setCompany({ name: '', address: '' });
        }    
    }

    const handleSubmit = async () => {
        setLoading(true)
        const data = { ...company };
        await dispatch(CreateCompany(data));
        setLoading(false)
    }

    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...company }
        temp[name] = value
        setCompany(temp)
    }

    const {
        name,
        address
    } = company

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6} className="mt-5">
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="Company Name"
                            onChange={handleChange}
                            variant="outlined"
                            type="text"
                            name="name"
                            value={name || ''}
                            validators={[
                                'required'
                            ]}
                            errorMessages={['this field is required']}
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                    <TextValidator
                            className="mb-4 w-full"
                            label="Address"
                            variant="outlined"
                            onChange={handleChange}
                            type="text"
                            name="address"
                            value={address || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                      
                        
                    </Grid>
                </Grid>
                <div className="flex flex-wrap items-center mb-4">
                    <div className="relative">
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={loading}
                            type="submit"
                        >
                            Submit
                        </Button>
                        {loading && (
                            <CircularProgress
                                size={24}
                                className={
                                    classes.buttonProgress
                                }
                            />
                        )}
                    </div>
                                  
                </div>
            </ValidatorForm>
        </div>
    )
}

export default SimpleForm
