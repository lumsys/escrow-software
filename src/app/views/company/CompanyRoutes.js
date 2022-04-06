import React from 'react'

const profileRoutes = [
    {
        path: '/company/create',
        component: React.lazy(() => import('./Create')),
    },
     {
         path: '/company/Invite',
     component: React.lazy(() => import('./Invite')),
 },

 {
    path: '/company/view',
component: React.lazy(() => import('./view')),
}

]

export default profileRoutes
