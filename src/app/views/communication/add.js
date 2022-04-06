import React from 'react'
import { Divider, Card, Avatar, Button, Grid, TextField, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SendMessage } from 'app/redux/actions'
import { useDispatch, useSelector } from 'react-redux'

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


const Add = () => {
    const classes = useStyles()
    const [loading, setLoading ] = React.useState(false)
    const [ content, setContent ] = React.useState('')
    const viewtransaction = useSelector(state => state.root.viewtransaction)
    const dispatch = useDispatch()
    const handleChange = ({ target: { name, value } }) => {
        setContent(value)
    }

    const handleFormSubmit = async (e) => {
        setLoading(true)
       
        const data = { message: content, transactionId: viewtransaction.id };
        await dispatch(SendMessage(data));
        setLoading(false)
        setContent('')
    }
    
    return (
        <div>
        <Card className="p-4">
             <div className="mb-4 flex justify-between items-center">
                <h4 className="m-0 font-medium">Send Message</h4>
                
            </div>

            <Divider className="mb-6" />

            <div className="flex-column justify-center items-center mb-6">
            <div className="" style={{width:'90%'}}>
                        <TextField
                            className="mb-6 w-full"
                            variant="outlined"
                            onChange= {handleChange}
                            value = {content}
                            id="outlined-multiline-static"
                            label="Send Message"
                            multiline
                            rows={4}
                    />
                    <div className="flex flex-wrap items-center mb-4">
                        <div className="relative">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick = { handleFormSubmit }
                                disabled={loading}
                                type="submit"
                            >
                                Send
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
            </div>
            </div>
           
        </Card>
        </div>
    )
}

export default Add
