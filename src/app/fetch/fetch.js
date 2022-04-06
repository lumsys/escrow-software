import { store } from "../redux/store/index";
import axios from 'axios';
import { PATH, MESSAGE, TRANSACTIONS, VIEWTRANSACTION } from "../redux/actions/constant";

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
    }else {
        if(err.data.errors != undefined)
        {
            let responses = {
                status: false,
                type: 'error',
                message: err.data.errors.message
            }
            store.dispatch({ type: MESSAGE, payload: responses });
        }
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
async function StartTransaction()
{
    const AUTH = axios.create({
        baseURL: `${PATH}`,
        timeout: 20000,
        headers: {
                  'Content-Type': 'application/json', 
                   'Accept': 'application/json',
                   'Authorization': `Bearer ${store.getState().root.token}`
                }
    });
    return AUTH.post(`transaction/create_transaction`, {})
    .then(async (response) => {
        if(response.data.success === true){
            store.dispatch({ type: MESSAGE, payload: { status : true, message: 'Transaction Started Successsfully', type: 'success'} })
           
            let transactions = store.getState().root.transactions;

            transactions.push(response.data.transaction)

            await store.dispatch({ type: TRANSACTIONS, payload: { data : transactions } });
            
            await store.dispatch({ type: VIEWTRANSACTION, payload: response.data });
            return { success: true, transaction : response.data.transaction};

        }else {
            ErrorResponses(response.data.errors,'error')
            return { success: false, transaction : null};
        }
    }).catch(err => {
        DisplayMessage(err.response,'error')
        return { success: false, transaction : null};
    });  
}

export {
    StartTransaction
}