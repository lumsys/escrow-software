import React, { useEffect } from 'react'
import { Divider, Card, Avatar, Button, Grid, TextField, CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Rating } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import { useTheme } from '@material-ui/core/styles'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { useSelector, useDispatch } from 'react-redux'
import { CreateWitness, GetWitness } from 'app/redux/actions'


const useStyles = makeStyles(({ palette, ...theme }) => ({
    avatar: {
        border: '4px solid rgba(var(--body), 0.03)',
        boxShadow: theme.shadows[3],
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
    
}))


const CreateDoc = () => {
    const classes = useStyles()
    const [loading, setLoading ] = React.useState(false)
    const responses = useSelector(state => state.root.responses)
    const viewtransaction = useSelector(state => state.root.viewtransaction)
    const [ witness, setWitness ] = React.useState({
        name : '',
        email:''
        
    });
    const dispatch = useDispatch()



    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...witness }
        temp[name] = value
        setWitness(temp)
    }
    const handleFormSubmit = async (e) => {
        setLoading(true)
        let data = { ...witness, transactionId : parseInt(viewtransaction.id) }
        await dispatch(CreateWitness(data))
        setLoading(false)
    }
    useEffect(() => {
        Clear();
    },[responses])

    const Clear = async () => {
        if(responses == null)
            return false;
        if(responses.status == true)
        {
            await GetWitness(viewtransaction.id)
            setWitness({ name: '', email: '' });
        }    
    }
    return (
        <div>
        <Card className="p-4">
             <div className="mb-4 flex justify-between items-center">
                <h4 className="m-0 font-medium">Add Witness</h4>
            </div>

            <Divider className="mb-6" />

            <div className="flex-column justify-center items-center mb-6">
            <div className="" style={{width:'90%'}}>
                <ValidatorForm onSubmit={handleFormSubmit}>
                    <TextValidator
                        className="mb-6 w-full"
                        variant="outlined"
                        size="small"
                        label="Name"
                        onChange={handleChange}
                        value={witness.name}
                        type="text"
                        name="name"
                        validators={['required']}
                        errorMessages={[
                            'this field is required'
                        ]}
                    />
                    <TextValidator
                        className="mb-3 w-full"
                        label="Email"
                        variant="outlined"
                        onChange={handleChange}
                        value={witness.email}
                        size="small"
                        name="email"
                        type="text"
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    <div className="flex flex-wrap items-center mb-4">
                        <div className="relative">
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={loading}
                                type="submit"
                            >
                                Add Witness
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
            </div>
           
        </Card>
        </div>
    )
}

export default CreateDoc
