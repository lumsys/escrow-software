import React from 'react'

const AllOrderRoutes = [
    {
        path: '/order/request',
        component: React.lazy(() => import('./orders')),
    },
    {
        path: '/order/create/:id',
        component: React.lazy(() => import('./create')),
    }
   
]

export default AllOrderRoutes
