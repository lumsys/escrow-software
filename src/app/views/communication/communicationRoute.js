import React from 'react'

const communicateRoute = [
    {
        path: '/message/transaction/:id',
        component: React.lazy(() => import('./message')),
    }
   
]

export default communicateRoute
