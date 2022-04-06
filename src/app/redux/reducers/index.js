import { act } from 'react-dom/test-utils'
import {
    LOGIN,
    REGISTER,
    INVITEUSER,
    PATH,
    COMPANY,
    MESSAGE,
    LOGOUT,
    COMPLETEPROFILE,
    COUNTRIES,
    STATES,
    CITIES,
    TRANSACTIONS,
    WITNESSES,
    ORDERS,
    CHATMESSAGES,
    WITNESS_PENDING,
    OTHERPARTY_PENDING,
    VIEWTRANSACTION,
    OTHERPARTYINFORMATION,
    OTHERPARTYINFORMATION_INVITE,
    AGREEMENT,
    WITNESSTRANSACTIONS,
    VIEWWITNESSTRANSACTION,
    UPDATEUSER
} from '../actions/constant'

const initialState = {
    user:null,
    token:null,
    IsRegister:false,
    IsLoggedIn:false,
    company:null,
    responses:null,
    inviteduser:null,
    countries:null,
    states:[],
    cities:[],
    transactions:[],
    orders:[],
    witnesses:[],
    chatmessages:[],
    pendingwitnesses:[],
    pendingtransactions:[],
    viewtransaction:null,
    otherpartyinformation:null,
    otherpartyinformation_invite:null,
    agreements:[],
    witnesstransactions:[],
    viewwitnesstransaction:null


}

export function RootReducer(state = initialState, action)
{
    if(action.type === LOGIN){
        return Object.assign({}, state, {
            user: {...action.payload.data, id: parseInt(action.payload.data.id) },
            IsLoggedIn:true,
            token:action.payload.token
        });
    }
    if(action.type === UPDATEUSER){
        return Object.assign({}, state, {
            user: {...action.payload.data, id: parseInt(action.payload.data.id) },
        });
    }
    if(action.type === MESSAGE){
        return Object.assign({}, state, {
            responses: action.payload
        });
    }
    if(action.type === REGISTER)
    {
        return Object.assign({}, state, {
            user: {...action.payload.data, id: parseInt(action.payload.data.id) },
            IsRegister:true
        })
    }
    if(action.type === COMPLETEPROFILE)
    {
        return Object.assign({}, state, {
            user: action.payload.user
        })
    }
    if(action.type === INVITEUSER)
    {
        return Object.assign({}, state, {
            inviteduser: action.payload.data
        })
    }
    if(action.type === COMPANY)
    {
        return Object.assign({}, state, {
            company: action.payload.data
        })
    }
    if(action.type === COUNTRIES)
    {
        return Object.assign({}, state, {
            countries: action.payload.data
        })
    }
    if(action.type === STATES)
    {
        state.states = []
        return Object.assign({}, state, {
            states: state.states.concat(action.payload.data)
        })
    }
    if(action.type === CITIES)
    {
        state.cities = []
        return Object.assign({}, state, {
            cities: state.cities.concat(action.payload.data)
        })
    }
    if(action.type === TRANSACTIONS)
    {
        state.transactions = []

        return Object.assign({}, state, {
            transactions: state.transactions.concat(action.payload.data)
        })
    }
    if(action.type === WITNESSTRANSACTIONS)
    {
        state.witnesstransactions = []

        return Object.assign({}, state, {
            witnesstransactions: state.witnesstransactions.concat(action.payload.data)
        })
    }
    if(action.type === VIEWTRANSACTION)
    {
        return Object.assign({}, state, {
            viewtransaction: action.payload.transaction
        })
    }

    if(action.type === VIEWWITNESSTRANSACTION)
    {
        return Object.assign({}, state, {
            viewwitnesstransaction: action.payload.transaction
        })
    }
    
    if(action.type === WITNESSES)
    {
        state.witnesses = []
        return Object.assign({}, state, {
            witnesses: state.witnesses.concat(action.payload.witnesses)
        })
    }

    if(action.type === AGREEMENT)
    {

        state.agreements = []
        return Object.assign({}, state, {
            agreements: state.agreements.concat(action.payload.data)
        })
    }
    if(action.type === WITNESS_PENDING)
    {
        state.pendingwitnesses = []
        return Object.assign({}, state, {
            pendingwitnesses: state.pendingwitnesses.concat(action.payload.invited)
        })
    }
    if(action.type === OTHERPARTYINFORMATION)
    {
        return Object.assign({}, state, {
            otherpartyinformation: action.payload.transaction
        })
    }
    if(action.type === OTHERPARTYINFORMATION_INVITE)
    {
        return Object.assign({}, state, {
            otherpartyinformation_invite: action.payload.invited
        })
    }
    if(action.type === OTHERPARTY_PENDING)
    {
        state.pendingtransactions = []
        return Object.assign({}, state, {
            pendingtransactions: state.pendingtransactions.concat(action.payload.invited)
        })
    }
    if(action.type === ORDERS)
    {
        state.orders = []
        return Object.assign({}, state, {
            orders: state.orders.concat(action.payload.orders)
        })
    }
    if(action.type === CHATMESSAGES)
    {
        if(state.viewtransaction.id != action.payload.data.transactionId)
            state.chatmessages = []
            
        return Object.assign({}, state, {
            chatmessages: state.chatmessages.concat(action.payload.data)
        })
    }
    if(action.type === LOGOUT){
        return Object.assign({}, state, {
            user:null,
            token:null,
            IsRegister:false,
            IsLoggedIn:false,
            company:null,
            responses:null
        });
    }
    
    return state;
}

