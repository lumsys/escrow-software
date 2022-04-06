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
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { InviteUser } from 'app/redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
    },
    snackbar: {
        margin: theme.spacing(1),
    },
}))
const SimpleForm = () => {
    const [loading, setLoading ]= useState(false)
    const dispatch =  useDispatch();
    const classes = useStyles()
    const responses = useSelector(state => state.root.responses)
    const [invite, setInvite] = useState({
        name: '',
        email: '',
        message_for_invite:''
    })

    useEffect(() => {
        Clear();
    },[responses])

    const Clear = () => {
        if(responses == null)
            return false;
        if(responses.status == true)
        {
            setInvite({ name: '', email: '', message_for_invite:'' });
        }    
    }

    const handleSubmit = async () => {
        setLoading(true)
        const data = { ...invite };
        data.invitetype = 'Individual';
        await dispatch(InviteUser(data));
        setLoading(false)
    }

    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...invite }
        temp[name] = value
        setInvite(temp)
    }

    const {
        name,
        message_for_invite,
        email
    } = invite

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
            
                <Grid container spacing={6} className="mt-5">
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                     

                    <TextValidator
                            className="mb-4 w-full"
                            label="Name"
                            variant="outlined"
                            onChange={handleChange}
                            type="text"
                            name="name"
                            value={name || ''}
                            validators={['required']}
                            errorMessages={[
                                'this field is required',
                            ]}
                        />              
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="Email"
                            variant="outlined"
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={email || ''}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                                'this field is required',
                                'email is not valid',
                            ]}
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} style={{marginTop:-20}}>
                    <TextValidator
                            className="mb-4 w-full"
                            label="message"
                            variant="outlined"
                            onChange={handleChange}
                            type="text"
                            name="message_for_invite"
                            value={message_for_invite || ''}
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
                            Invite Now
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