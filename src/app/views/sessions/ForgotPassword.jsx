import React, { useState } from 'react'
import { Card, Grid, Button } from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { CircularProgress } from '@material-ui/core'
import { UserForgotPassword } from 'app/redux/actions'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: 800,
        borderRadius: 12,
        margin: '1rem',
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}))

const ForgotPassword = () => {
    const [loading, setLoading] = useState(false)
    const classes = useStyles()
    const [userInfo, setUserInfo] = useState({
        email: ''
    });
    const dispatch = useDispatch();
    const handleChange = ({ target: { name, value } }) => {
        setUserInfo({
            ...userInfo,
            [name]: value,
        })
    }

    const handleFormSubmit = async (event) => {
        const data = { ...userInfo };
        setLoading(true)
        await dispatch(UserForgotPassword(data));
        setLoading(false)
    }

    let { email } = userInfo

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
                                src="/assets/images/illustrations/fo.svg"
                                alt=""
                            />
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <div className="p-8 h-full bg-light-gray relative">
                            <ValidatorForm onSubmit={handleFormSubmit}>
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    label="Email"
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    size="small"
                                    value={email}
                                    validators={['required', 'isEmail']}
                                    errorMessages={[
                                        'this field is required',
                                        'email is not valid',
                                    ]}
                                />
                                <div className="flex items-center">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        disabled={loading}
                                        type="submit"
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
                                    <span className="ml-4 mr-2">or</span>
                                    <Link to="/auth/signin">
                                        <Button className="capitalize">
                                            Sign in
                                        </Button>
                                    </Link>
                                </div>
                            </ValidatorForm>
                        </div>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default ForgotPassword
