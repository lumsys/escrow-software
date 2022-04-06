import React from 'react'

const docRoute = [
    {
        path: '/witness/transaction/:id',
        component: React.lazy(() => import('./witness')),
    }
   
]

export default docRoute
