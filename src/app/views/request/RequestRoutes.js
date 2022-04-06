import React from 'react'

const RequestRoutes = [
    {
        path: '/request/transaction',
        component: React.lazy(() => import('./index')),
    }
   
]

export default RequestRoutes
