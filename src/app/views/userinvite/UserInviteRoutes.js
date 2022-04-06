import React from 'react'

const userinviteRoutes = [
    {
        path: '/invite/user',
        component: React.lazy(() => import('../userinvite/Invite')),
    },
    {
        path: '/invited/user',
        component: React.lazy(() => import('../userinvite/Invited')),
    }
   
]

export default userinviteRoutes
