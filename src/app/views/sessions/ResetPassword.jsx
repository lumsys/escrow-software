import React, { useState } from 'react'
import { Card, Grid, Button } from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import { UserResetPassword } from '../../redux/actions';
import { CircularProgress } from '@material-ui/core'
import { store } from 'app/redux/store/index'
import { MESSAGE } from 'app/redux/actions/constant'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: 800,
        borderRadius: 12,
        margin: '1rem',
    },
}))

const ResetPassword = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState({
        code:"",
        password:"",
        password_confirmation:""
    });
    const handleChange = ({ target: { name, value } }) => {
    
        setData({
            ...data,
            [name]: value,
        })
    }

    const handleFormSubmit = async () => {
        let send = { ...data }
        if(data.password != data.password_confirmation)
            return store.dispatch({ type: MESSAGE, payload: { status : false, message: 'Password Mismatched', type: 'error'} })
        setLoading(true);
        await dispatch(UserResetPassword(send))
        setLoading(false);
    }

    let { password,code,password_confirmation } = data

    return (
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
        >
            <Card className={classes.card}>
                <Grid container>
                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <div className="p-8 flex justify-center items-center h-full">
                            <img
                                className="w-full"
                                src="/assets/images/illustrations/col.svg"
                                alt=""
                            />
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <div className="p-8 h-full bg-light-gray relative">
                            <ValidatorForm onSubmit={handleFormSubmit}>
                                <TextValidator
                                    className="mb-6 w-full"ait
                                    variant="outlined"
                                    label="Code"
                                    onChange={handleChange}
                                    type="text"
                                    name="code"
                                    size="small"
                                    value={code || ''}
                                    validators={['required']}
                                    errorMessages={[
                                        'this field is required'
                                    ]}
                                />

                            <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    label="Password"
                                    onChange={handleChange}
                                    type="password"
                                    name="password"
                                    size="small"
                                    value={password || ''}
                                    validators={['required']}
                                    errorMessages={[
                                        'this field is required',
                                        'password is not valid',
                                    ]}
                                />

<TextValidator
                            className="mb-4 w-full"
                            variant="outlined"
                            label="Confirm Password"
                            onChange={handleChange}
                            name="password_confirmation"
                            size="small"
                            type="password"
                            value={password_confirmation || ''}
                            validators={['required']}
                            errorMessages={[
                                'this field is required',
                                "password didn't match",
                            ]}
                        />
                                
                                <div className="flex items-center">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={loading}
                                    >
                                        Reset Password
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
                            </ValidatorForm>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default ResetPassword
