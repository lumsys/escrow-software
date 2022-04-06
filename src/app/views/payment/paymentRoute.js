import React from 'react'

const paymentRoute = [
    {
        path: '/paynow/transaction',
        component: React.lazy(() => import('./pay')),
    },
    {
        path: '/payment/transaction/:id',
        component: React.lazy(() => import('./payment')),
    }
   
]

export default paymentRoute
