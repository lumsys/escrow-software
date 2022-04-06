import React from 'react'
import { Grid, Card, Icon, IconButton, Tooltip, Avatar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import { Invited } from 'app/redux/actions'
import { useEffect } from 'react'
import history from 'history.js'
import { SnackbarContent } from '@material-ui/core'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))

const CompanyView = () => {
    const classes = useStyles()
    const dispatch = useDispatch();
    const invited = useSelector(state => state.root.inviteduser);
    useEffect(()=>{
        GetInvited();
        //alert(JSON.stringify(invited))
    },[])
    const GetInvited = async () => {
        await dispatch(Invited('Company'));
    }
    return (
        <Grid container spacing={3} className="mb-3">
        {
            invited != null &&
            invited.map((invite) =>
                <Grid item xs={12} md={6}>
                    <Card
                        className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                        elevation={6}
                    >
                        <div className="flex items-center">
                            <Avatar
                                        className={clsx('w-60 h-60', classes.avatar)}
                                        src="/assets/images/face-4.jpg"
                                    />
                            <div className="ml-4">
                                <h5 className="m-0 mb-2">{invite.name}</h5>
                                {
                                    invite.myprofile != null &&
                                    <small className="border-radius-4 bg-success text-white px-2 py-2px">
                                            Has Joined 
                                    </small>
                                }
                                {
                                    invite.myprofile == null &&
                                    <small className="border-radius-4 bg-primary text-white px-2 py-2px">
                                            Yet to Join
                                    </small>
                                }
                               
                                {/* <p class="mb-0 mt-2 text-muted font-normal capitalize">{invite.myprofile != null && invite.myprofile.email}</p> */}
                            </div>
                            
                        </div>
                        <div class="flex m-2">
                            <button style={{padding:'0.4rem',borderRadius:5,border:'none'}} className="MuiButtonBase-root MuiButton-root MuiButton-text bg-light-primary hover-bg-primary text-primary px-5 mr-1 MuiButton-textSizeSmall MuiButton-sizeSmall" >CHAT</button>   
                            <button style={{padding:'0.4rem',borderRadius:5,border:'none'}} className="MuiButtonBase-root MuiButton-root MuiButton-text bg-light-primary hover-bg-primary text-primary px-5 mr-1 MuiButton-textSizeSmall MuiButton-sizeSmall" >PROFILE</button>   
        
                        </div>                     
                    </Card>
                </Grid>
        )}
        {
            invited != null && invited.length == 0 &&
            <Grid item xs={12} md={12}>
             <SnackbarContent
                        className={classes.snackbar}
                        style={{backgroundColor:'#1177DD'}}
                        message="You have not Introduced anyone to Escrow"
                        action={
                        <Button  variant="contained"
                        color="primary"
                        className={classes.button} onClick = {() => history.push('/company/Invite')} color="secondary" size="small">
                        Invite Someone
                        </Button>
                        
                    }
            /> 
           </Grid>
        }
      
    </Grid>
    )
}

export default CompanyView
