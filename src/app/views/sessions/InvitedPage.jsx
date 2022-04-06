import React, { useState } from 'react'
import {
    Card,
    Checkbox,
    FormControlLabel,
    Grid,
    Button,
} from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import useAuth from 'app/hooks/useAuth'
import history from 'history.js'
import { useDispatch } from 'react-redux'
import { ReceiveInvite } from 'app/redux/actions'
import { CircularProgress } from '@material-ui/core'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    cardHolder: {
        background: '#1A2038',
    },
    card: {
        maxWidth: "1000px",
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

const InvitedPage = (props) => {
    const classes = useStyles()
    const [userInfo, setUserInfo] = useState({
        firstname:'',
        lastname:'',
        email: '',
        password: '',
        password_confirmation:'',
        agreement:''
    })
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...userInfo }
        temp[name] = value
        setUserInfo(temp)
    }

    const handleFormSubmit = async (event) => {
       const data = { ...userInfo };
       setLoading(true)
       await dispatch(ReceiveInvite(data, props));
       setLoading(false)
    }

    let { firstname, lastname, email, password, password_confirmation,agreement } = userInfo

    return (
        <div
            className={clsx(
                'flex justify-center items-center  min-h-full-screen',
                classes.cardHolder
            )}
        >
            <Card style={{width:"800px"}} className={classes.card}>
               
                <div className= "flex justify-center" style={{padding:15}}>
                <h4>Welcome</h4>
                </div>
                <div className= "flex justify-center">
                <Grid item lg={5} md={5} sm={5} xs={12}>
                        <div className="p-8  h-full">
                        <h4>Kindly create your profile by simply filling the below fields.</h4>
                            <img
                                className="w-full"
                                src="/assets/images/illustrations/col.svg"
                                alt=""
                            />
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <div className="p-8 h-full">
                            <ValidatorForm onSubmit={handleFormSubmit}>
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="First Name"
                                    onChange={handleChange}
                                    type="text"
                                    name="firstname"
                                    value={firstname}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                               
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="Last Name"
                                    onChange={handleChange}
                                    type="text"
                                    name="lastname"
                                    value={lastname}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <TextValidator
                                    className="mb-6 w-full"
                                    variant="outlined"
                                    size="small"
                                    label="Email"
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    value={email}
                                    validators={['required', 'isEmail']}
                                    errorMessages={[
                                        'this field is required',
                                        'email is not valid',
                                    ]}
                                />
                                <TextValidator
                                    className="mb-4 w-full"
                                    label="Password"
                                    variant="outlined"
                                    size="small"
                                    onChange={handleChange}
                                    name="password"
                                    type="password"
                                    value={password}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                                <TextValidator
                                    className="mb-4 w-full"
                                    label="Password"
                                    variant="outlined"
                                    size="small"
                                    onChange={handleChange}
                                    name="password_confirmation"
                                    type="password"
                                    value={password_confirmation}
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                />
                               
                                <div className="flex items-center">
                                    <Button
                                        className="capitalize"
                                        variant="contained"
                                        disabled={loading}
                                        color="primary"
                                        type="submit"
                                    >
                                        Create Profile
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
                        </div>
                    {/* </Grid>
                
                </Grid> */}
            </Card>
        </div>
    )

}


export default InvitedPage
