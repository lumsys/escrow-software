import React from 'react'

const witnessViewRoute = [
    {
        path: '/transaction/witnessview',
        exact: true,
        component: React.lazy(() => import('./witnessview')),
    },
    {
        path: '/transaction/witnessview/detail/:id',
        component: React.lazy(() => import('./witnessviewdetail')),
    },
    {
        path: '/transaction/witnessview/message/:id',
        component: React.lazy(() => import('./message')),
    },
    {
        path: '/payment/witnessview/transaction/:id',
        component: React.lazy(() => import('./payment')),
    }

    

]

export default witnessViewRoute
