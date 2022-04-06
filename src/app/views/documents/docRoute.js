import React from 'react'

const docRoute = [
    {
        path: '/document/transaction',
        component: React.lazy(() => import('./documents')),
    }
   
]

export default docRoute
