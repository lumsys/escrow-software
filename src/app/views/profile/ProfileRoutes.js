import React from 'react'

const profileRoutes = [
    {
        path: '/profile/update',
        component: React.lazy(() => import('./UpdateProfile')),
    },
     {
        path: '/profile/view',
         component: React.lazy(() => import('./viewprofile')),
 },
 {
    path: '/profile/type',
     component: React.lazy(() => import('./accountType')),
}
]

export default profileRoutes
