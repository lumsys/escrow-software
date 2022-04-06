import { authRoles } from './auth/authRoles'

export const navigations = [
    {
        name: 'Dashboard',
        path: '/dashboard/analytics',
        icon: 'dashboard',
    },
    {
        label: 'User Invite',
        type: 'label',
    },
    {
        name: 'User Invite',
        icon: 'person_add',
        children: [
            {
                name: 'Invite User',
                path: '/invite/user',
                iconText: 'A',
            },
            {
                name: 'Invited User',
                path: '/invited/user',
                iconText: 'A',
            },
        ],
    },
    {
        label: 'User Profile',
        type: 'label',
    },
    {
        name: 'Profile',
        icon: 'card_travel',
      //  badge: { value: '30+', color: 'secondary' },
        children: [
            {
                name: 'Update Profile',
                path: '/profile/update',
                iconText: 'A',
            },
            {
                name: 'View',
                path: '/profile/view',
                iconText: 'B',
            },
            {
                name: 'Account Type',
                path: '/profile/type',
                iconText: 'c',
            },
           
        ],
    },
    {
        label: 'Company SetUp',
        type: 'label',
    },
    {
        name: 'Company',
        icon: 'account_balance',
     //   badge: { value: '30+', color: 'secondary' },
        children: [
            {
                name: 'Create',
                path: '/company/create',
                iconText: 'A',
            },
            {
                name: 'Invite Company Staff',
                path: '/company/Invite',
                iconText: 'B',
            },

            {
                name: 'View Company Staff',
                path: '/company/view',
                iconText: 'c',
            },
           
        ],
    },

    {
        label: 'Transactions',
        type: 'label',
    },
    {
        name: 'Transaction',
        icon: 'group',
     //   badge: { value: '30+', color: 'secondary' },
        children: [
            {
                name: 'View',
                path: '/transaction/request',
                iconText: 'B',
            },
            {
                name: 'Witness',
                path: '/transaction/witnessview',
                iconText: 'C',
            }
           
        ],
    },

]
