import React from 'react'
import { Redirect } from 'react-router-dom'

import dashboardRoutes from './views/dashboard/DashboardRoutes'
import utilitiesRoutes from './views/utilities/UtilitiesRoutes'

import materialRoutes from './views/material-kit/MaterialRoutes'
import chartsRoute from './views/charts/ChartsRoute'
import dragAndDropRoute from './views/Drag&Drop/DragAndDropRoute'

import formsRoutes from './views/forms/FormsRoutes'
import mapRoutes from './views/map/MapRoutes'
import profileRoutes from './views/profile/ProfileRoutes'
import companyRoutes from './views/company/CompanyRoutes'
import userinvite from './views/userinvite/UserInviteRoutes';
import RequestRoutes from './views/request/RequestRoutes';
import AlltransactionRoutes from './views/alltransaction/AlltransactionRoutes'
import docRoute from './views/documents/docRoute'
import witnessRoute from './views/witness/witnessRoute'
import communicateRoute from './views/communication/communicationRoute'
import AllOrderRoutes from './views/allorders/AllOrderRoutes'
import witnessViewRoute from './views/witness_view/witnessViewRoute'
import paymentRoute from './views/payment/paymentRoute'
import payoutRoute  from './views/payout/payoutRoute'


const redirectRoute = [
    {
        path: '/dashboard/analytics',
        exact: true,
        component: () => <Redirect to="/dashboard/analytics" />,
    },
]

const errorRoute = [
    {
        component: () => <Redirect to="/session/40489" />,
    },
]

const routes = [
    ...dashboardRoutes,
    ...profileRoutes,
    ...AlltransactionRoutes,
    ...witnessRoute,
    ...witnessViewRoute,
    ...paymentRoute,
    ...payoutRoute,
    ...AllOrderRoutes,
    ...communicateRoute,
    ...docRoute,
    ...userinvite,
   // ...settings,
    ...companyRoutes,
    ...RequestRoutes,
    ...materialRoutes,
    ...utilitiesRoutes,
    ...chartsRoute,
    ...dragAndDropRoute,
    ...formsRoutes,
    ...mapRoutes,
    ...redirectRoute,
    ...errorRoute
]

export default routes
