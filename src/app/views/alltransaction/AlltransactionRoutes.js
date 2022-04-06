import React from 'react'

const AlltransactionRoutes = [
    {
        path: '/transaction/request',
        component: React.lazy(() => import('./transaction')),
    },
    {
        path: '/transaction/details/:id',
        component: React.lazy(() => import('./detail')),
    },
    {
        path: '/transaction/transactionwith/:id',
        component: React.lazy(() => import('./transactionwith')),
    },
    {
        path: '/flow/transaction/:id',
        component: React.lazy(() => import('./flow')),
    }
   
]

export default AlltransactionRoutes
