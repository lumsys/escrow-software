import React from 'react'

const TransactionUserRoutes = [
    {
        path: '/transaction/create',
        component: React.lazy(() => import('./newtrans'))
    },
    {
        path: '/transaction/addorder',
         component: React.lazy(() => import('./addorder')),
 },
 {
    path: '/transaction/otherparty',
     component: React.lazy(() => import('./otherparty')),
},
{
    path: '/transaction/otherpartyf',
     component: React.lazy(() => import('./otherpartyform')),
},
{
    path: '/transaction/witness',
     component: React.lazy(() => import('./witness')),
},

{
    path: '/transaction/addwitnessf',
     component: React.lazy(() => import('./addwitnessform')),
},
{
    path: '/transaction/uploadfield',
     component: React.lazy(() => import('./uploadfield')),
}
    
]

export default TransactionUserRoutes
