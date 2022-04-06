import {
    PATH,
    LOGIN,
    COMPANY,
    REGISTER,
    INVITEUSER,
    UPDATEPROFILE,
    MESSAGE,
    COMPLETEPROFILE,
    STATES,
    COUNTRIES,
    CITIES,
    TRANSACTIONS,
    ORDERS,
    WITNESSES,
    WITNESS_PENDING,
    OTHERPARTY_PENDING,
    OTHERPARTYINFORMATION,
    OTHERPARTYINFORMATION_INVITE,
    AGREEMENT,
    SENDMESSAGE,
    CHATMESSAGES,
    WITNESSTRANSACTIONS,
    UPDATEUSER,
    VIEWTRANSACTION
} from './constant';
import axios from 'axios';
import { store } from '../store/index';

const INSTANCE = axios.create({
    baseURL: `${PATH}`,
    timeout: 200000,
    headers: {
              'Content-Type': 'application/json', 
               'Accept': 'application/json'
            }
});

function DisplayMessage(err)
{

    if(err == undefined)
        return false;
    if(err.status == 422)
    {
        if(err.data.errors != undefined)
        {
            Object.keys(err.data.errors.message).forEach(function(key){
                Object.keys(err.data.errors.message[key]).forEach(function(key2){
                    let responses = {
                        status: false,
                        type: 'error',
                        message: err.data.errors.message[key][key2][0]
                    }
                    store.dispatch({ type: MESSAGE, payload: responses });
                });
            });
        }
    }else if(err.status == 404)
    {
       
        if(err.data.errors != undefined)
        {
            let responses = {
                status: false,
                type: 'error',
                message: err.data.errors.message
            }
            store.dispatch({ type: MESSAGE, payload: responses });
        }
    }else if(err.status == 400)
    {
            let responses = {
                status: false,
                type: 'error',
                message: err.data.errors.message
            }
            store.dispatch({ type: MESSAGE, payload: responses });
    }else if(err.status == 403)
    {
            let responses = {
                status: false,
                type: 'error',
                message: err.data.errors.message
            }
            store.dispatch({ type: MESSAGE, payload: responses });
    }
}

function ErrorResponses(error,type) {
    let message = '';

    if(typeof error === 'object')
    {
      Object.keys(error).forEach(function(key){
          message += error[key] + '\n';
      });
    }
    else {
          message = error;
    }

    let responses = {
        status: false,
        type: type,
        message: message
    }
    store.dispatch({ type: MESSAGE, payload: responses });
    //await dispatch({ type: MESSAGE, payload: responses })

}

function GetToken()
{
    return store.getState().root.token == null ? sessionStorage.getItem('token') : store.getState().root.token
}

export function HideMessage()
{
    return {
        type: MESSAGE,
        payload:null
    }
}



export function UserLogin(data, props)
{
    return function(dispatch,getState)
    {
        return INSTANCE.post('auth/login',data)
        .then(async (response) => {
            if(response.data.success === true){
                await dispatch({ type: LOGIN, payload: response.data });
                await dispatch({ type: MESSAGE, payload: { status : true, message: 'Login Successful', type: 'success'} })
                sessionStorage.setItem('token',response.data.token)
                props.history.push('/dashboard/analytics')
            }else{  
                ErrorResponses(response.data.errors,'error')

            }
        }).catch(err => {
            //alert(JSON.stringify(err))
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function ReceiveInvite(data, props)
{
    return function(dispatch,getState)
    {
        
        return INSTANCE.post('invite/receiveInvitedUser',data)
        .then(async (response) => {
            if(response.data.success === true){
                await dispatch({ type: MESSAGE, payload: { status : true, message: 'Registration Successful', type: 'success'} })
                props.history.push('/auth/signin');
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}
export function UserRegister(data, props)
{
    
    return function(dispatch,getState)
    {
        
        return INSTANCE.post('auth/register',data)
        .then(async (response) => {
            if(response.data.success === true){

                await dispatch({ type: REGISTER, payload: response.data });
                await dispatch({ type: MESSAGE, payload: { status : true, message: 'Registration Successful', type: 'success'} })
                props.history.push('/auth/signin');
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function UserForgotPassword(data)
{
    return function(dispatch,getState)
    {
        
        return INSTANCE.post('auth/forgotpassword',data)
        .then(async (response) => {
            if(response.data.success === true){
                await dispatch({ type: MESSAGE, payload: { status : true, message: 'A Link has been sent to your Email', type: 'success'} })

            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function UserResetPassword(data)
{
    
    return function(dispatch,getState)
    {
        return INSTANCE.put('auth/resetpassword',data)
        .then(async (response) => {
            if(response.data.success === true){
                //alert(JSON.stringify(response.data))
                await dispatch({ type: MESSAGE, payload: { status : true, message: 'Password Reset Successfully...You can Proceed to Login', type: 'success'} })
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            //alert(JSON.stringify(err.response))
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function UpdateAccountType(data)
{

    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.post('profile/updateaccounttype',data)
        .then(async (response) => {
            if(response.data.success === true){
                await dispatch({ type: MESSAGE, payload: { status : true, message: 'Account Type has been Updated', type: 'success'} })
                await dispatch({ type: UPDATEUSER, payload: response.data })
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}
export function InviteUser(data)
{

    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.post('invite/inviteuser',data)
        .then(async (response) => {
            if(response.data.success === true){
                await dispatch({ type: MESSAGE, payload: { status : true, message: 'Invitee has been notified via Email', type: 'success'} })
                
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function Invited(type)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.get(`invite/get_invite/${type}`)
        .then(async (response) => {
            if(response.data.success === true){
                await dispatch({ type: INVITEUSER, payload: response.data })
                
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function CompleteProfile(data)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.post('profile/complete_profile',data)
        .then(async (response) => {
            if(response.data.success === true){

                await dispatch({ type: COMPLETEPROFILE, payload: response.data });
                await dispatch({ type: MESSAGE, payload: { status : true, message: 'Profile Updated Successsfully', type: 'success'} })
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function CreateCompany(data)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.post('company/create_company',data)
        .then(async (response) => {
            if(response.data.success === true){

                await dispatch({ type: COMPANY, payload: response.data });
                await dispatch({ type: MESSAGE, payload: { status : true, message: 'Company Created Successsfully', type: 'success'} })
            }else{  
                //alert(JSON.stringify(response.data))
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            //alert(JSON.stringify(err.response))
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function GetCompany()
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.get('company/get_company')
        .then(async (response) => {
            if(response.data.status === 'success'){

                await dispatch({ type: COMPANY, payload: response.data });
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function GetCountries()
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.get('address/countries')
        .then(async (response) => {
            if(response.data.success === true){
                await dispatch({ type: COUNTRIES, payload: response.data });
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function GetStates(id)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        dispatch({ type: MESSAGE, payload: { status : true, message: 'Fetching States....', type: 'info'} })

        return AUTH.get(`address/states/${id}`)
        .then(async (response) => {
            if(response.data.success === true){
                await dispatch({ type: MESSAGE, payload: null })
                await dispatch({ type: STATES, payload: response.data });
            }else{  
              ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}
export function GetCities(id)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.get(`address/cities/${id}`)
        .then(async (response) => {
            if(response.data.success === true){
                await dispatch({ type: CITIES, payload: response.data });
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}
export function CreateNewTransaction()
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.post(`transaction/create_transaction`, {})
        .then(async (response) => {
            if(response.data.success === true){
                await dispatch({ type: MESSAGE, payload: { status : true, message: 'Transaction Started Successsfully', type: 'success'} })
                let transactions = store.getState().root.transactions;
                transactions.push(response.data.transaction)
                await dispatch({ type: TRANSACTIONS, payload: { transactions : transactions } });
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}
export function GetTransaction()
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.get(`transaction/get_transactions`)
        .then(async (response) => {
            if(response.data.success === true){
                await dispatch({ type: TRANSACTIONS, payload: response.data });
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}
export function AddTransactionWith(data)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.post(`transaction/transactionwith`, data)
        .then(async (response) => {
            if(response.data.success === true){
                await dispatch({ type: MESSAGE, payload: { status : true, message: 'Other Party Created Successsfully', type: 'success'} })
                let transactions = store.getState().root.transactions;
                let index = transactions.findIndex(x => x.id == data.transactionId)
                if(response.data.status == 1)
                    transactions[index].transactionwith = response.data.transaction.transactionwith
                else if(response.data.status == 2)
                    transactions[index].invited = response.data.invited
                else if(response.data.status == 3)
                    transactions[index].invited = response.data.invited.invite
                await dispatch({ type: TRANSACTIONS, payload: { data : transactions } });
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}
export function CreateNewOrder(data)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.post(`order/create_order`, data)
        .then(async (response) => {
           
            if(response.data.success === true){
                //alert(JSON.stringify(response.data))
                let transactions = store.getState().root.transactions;
                let index = transactions.findIndex(x => x.id == data.transactionId)
                transactions[index].order.push(response.data.order)
                await dispatch({ type: TRANSACTIONS, payload: { data : transactions } });
                await dispatch({ type: MESSAGE, payload: { status : true, message: 'Order Created Successsfully', type: 'success'} })

            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function GetOrder()
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.get(`order/get_order`)
        .then(async (response) => {
            if(response.data.success === true){
                await dispatch({ type: ORDERS, payload: response.data });
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function CreateWitness(data)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.post(`transaction/add_witness`, data)
        .then(async (response) => {
            if(response.data.success === true){
                await dispatch({ type: MESSAGE, payload: { status : true, message: 'Witness Created Successsfully', type: 'success'} })
               
                if(response.data.status == 1)
                {
                    let witnesses = store.getState().root.witnesses;
                    witnesses.push(response.data.witness)
                    await dispatch({ type: WITNESSES, payload: { witnesses : witnesses } });
                }else {
                   
                }
                
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function GetWitness(transactionId)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.get(`transaction/get_witnesses/${transactionId}`)
        .then(async (response) => {
            if(response.data.success === true){
                await dispatch({ type: WITNESSES, payload: response.data });
                await dispatch({ type: WITNESS_PENDING, payload: response.data });
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function CreateOtherParty(data)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.post(`transaction/transactionwith`, data)
        .then(async (response) => {
            if(response.data.success === true){
                await dispatch({ type: MESSAGE, payload: { status : true, message: 'Other Party Information Created Successsfully', type: 'success'} })
                if(response.data.status == 1)
                    await dispatch({ type: OTHERPARTYINFORMATION, payload: response.data });
                else if(response.data.status == 2)
                    await dispatch({ type: OTHERPARTYINFORMATION_INVITE, payload:  response.data })                  
                
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function GetOtherParty(transactionId)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.get(`transaction/transactionwith/${transactionId}`)
        .then(async (response) => {
            if(response.data.success === true){
                await dispatch({ type: OTHERPARTYINFORMATION, payload:  response.data })   
                await dispatch({ type: OTHERPARTYINFORMATION_INVITE, payload:  response.data })
                
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function CreateAgreement(data)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.post(`agreement/create_agreement`, data)
        .then(async (response) => {
            if(response.data.success === true){
                    await dispatch({ type: MESSAGE, payload: { status : true, message: 'Document Created Successsfully', type: 'success'} })

                    await dispatch({ type: AGREEMENT, payload: response.data });                  
                
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function GetAgreements(transactionId)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.get(`agreement/get_agreement/${transactionId}`)
        .then(async (response) => {
            if(response.data.success === true){
                    await dispatch({ type: AGREEMENT, payload: response.data });                  
                
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            alert(JSON.stringify(err))
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function SendMessage(data)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.post(`message/send`, data)
        .then(async (response) => {
            if(response.data.success === true){
                    await dispatch({ type: MESSAGE, payload: { status : true, message: 'Message Sent Successsfully', type: 'success'} })

                    await dispatch({ type: CHATMESSAGES, payload: response.data });                  
                
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function GetMessages(transactionId)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.get(`message/get/${transactionId}`)
        .then(async (response) => {
            if(response.data.success === true){
                    await dispatch({ type: CHATMESSAGES, payload: response.data });                  
                
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}
export function SendWitnessMessage(data)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.post(`witnessview/send`, data)
        .then(async (response) => {
            if(response.data.success === true){
                    await dispatch({ type: MESSAGE, payload: { status : true, message: 'Message Sent Successsfully', type: 'success'} })

                    await dispatch({ type: CHATMESSAGES, payload: response.data });                  
                
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function GetWitnessMessages(transactionId)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.get(`witnessview/get_message/${transactionId}`)
        .then(async (response) => {
            if(response.data.success === true){
                    await dispatch({ type: CHATMESSAGES, payload: response.data });                  
                
            }else{  
                alert(JSON.stringify(response.data))
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            alert(JSON.stringify(err.response))
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function GetWitnessTransaction()
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.get(`witnessview/invitedtransactions`)
        .then(async (response) => {
            if(response.data.success === true){
                    await dispatch({ type: WITNESSTRANSACTIONS, payload: response.data });                  
                
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function SendMessageWitness(data)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.post(`message/send`, data)
        .then(async (response) => {
            if(response.data.success === true){
                    let viewtransaction = store.getState().root.viewwitnesstransaction
                    // let transactions = store.getState().root.transactions

                    // let index = transactions.findIndex(x => x.id == data.transactionId)
                    // transactions[index].transaction_message.push(response.data.data)
                    viewtransaction.transaction_message.push(response.data.data)
                    console.log(JSON.stringify(viewtransaction.transaction_message))
                    await dispatch({ type: VIEWTRANSACTION, payload: { transaction : viewtransaction } });
                    //await dispatch({ type: TRANSACTIONS, payload: { data : transactions } });      
                    await dispatch({ type: MESSAGE, payload: { status : true, message: 'Message Sent Successsfully', type: 'success'} })
            
                
            }else{  
                alert(JSON.stringify(response.data))
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            alert(JSON.stringify(err.response))
            DisplayMessage(err.response,'error')
        }); 
    }
}

export function UpdateTransaction(data)
{
    return function(dispatch,getState)
    {
        const AUTH = axios.create({
            baseURL: `${PATH}`,
            timeout: 20000,
            headers: {
                      'Content-Type': 'application/json', 
                       'Accept': 'application/json',
                       'Authorization': `Bearer ${ GetToken() }`
                    }
        });
        return AUTH.post(`transaction/update_transaction`, data)
        .then(async (response) => {
            if(response.data.success === true){
                let viewtransaction = store.getState().root.viewtransaction
                viewtransaction.status = data.status;
                await dispatch({ type: VIEWTRANSACTION, payload: { transaction : viewtransaction }})   
                let transactions = store.getState().root.transactions
                let index = transactions.findIndex(x => x.id == viewtransaction.id)
                transactions[index].status = data.status;
                await dispatch({ type: TRANSACTIONS, payload: { data : transactions }})  
                await dispatch({ type: MESSAGE, payload: { status : true, message: 'Transaction Request Accepted Successsfully', type: 'success'} })

                
            }else{  
                ErrorResponses(response.data.errors,'error')
            }
        }).catch(err => {
            DisplayMessage(err.response,'error')
        }); 
    }
}
