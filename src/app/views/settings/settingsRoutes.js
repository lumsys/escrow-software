import React from 'react'

const SettingsRoutes = [
    {
        path: '/settings/type',
        component: React.lazy(() => import('./accountype'))
    },
    {
        path: '/transaction/',
         component: React.lazy(() => import('./addorder')),
 }

    
]

export default SettingsRoutes
