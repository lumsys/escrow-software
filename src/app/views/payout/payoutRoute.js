import React from 'react'

const payoutRoute = [
    {
        path: '/payout/transaction/:id',
        component: React.lazy(() => import('./payout')),
    }
   
]

export default payoutRoute
