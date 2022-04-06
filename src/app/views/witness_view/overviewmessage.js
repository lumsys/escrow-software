import React, { useEffect, useState } from 'react'
import {
    Grid,
    Divider,
    Card,
    Typography
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { GetWitnessMessages } from 'app/redux/actions';


const OverviewMessage = () => {
    const messages = useSelector(state => state.root.chatmessages);
    const viewtransaction = useSelector(state => state.root.viewwitnesstransaction)
    const [ loading, setLoading ] = useState(false)
    const user = useSelector(state => state.root.user)
    const dispatch = useDispatch()
    useEffect(() => {
        GetData()
    },[]);

    const GetData = async () => {
        setLoading(true)
        await dispatch(GetWitnessMessages(viewtransaction.id))
        setLoading(false)
    }


    return (
        <div>
        {
            messages.length == 0 &&
            <Card>
            <div style={{padding:10, display:'flex', justifyContent:'center',alignItems:'center'}}>
                <Typography variant="subtitle1">
                    No Message Yet
                </Typography>
                <br />
            </div>
            </Card>
        }
        
        {
             messages.length > 0 &&
             messages.map((message) => 
            <Card style={{marginTop:5}}>
               
                <div style={{padding:20}}>
                    <div className="flex">
                        {
                            message.sendById == user.id &&
                            <div style={{textTransform:'uppercase'}} className="px-3 text-11 py-3px border-radius-4 text-white bg-green mr-3">
                                {user.firstname} { user.lastname}
                            </div>
                        }
                        {
                            message.sendById != user.id &&
                            <div style={{textTransform:'uppercase'}} className="px-3 text-11 py-3px border-radius-4 text-white bg-secondary mr-3">
                                {message.sendBy.firstname} {message.sendBy.firstname}
                            </div>
                        }
                    </div>
                    <Typography variant="subtitle1">
                        {message.message}
                    </Typography>
                    <br />
                </div>
            </Card>
        )}
    </div>
    );

}
export default OverviewMessage
