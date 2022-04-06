import NotFound from './NotFound'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'
import InvitedPage from './InvitedPage'
import JwtRegister from './register/JwtRegister'
import JwtLogin from './login/JwtLogin'
import React from 'react'
import { Redirect } from 'react-router-dom';
import Market from "../../src/homepage/Market/Market";
import Resources from '../../src/homepage/Resources/ResourceCenter';
import Aboutus from "../../src/homepage/Aboutus/AboutUs-page/aboutUs"


const sessionRoutes = [ {
        path: '/',
        component: Market,
        exact:true
    }, 
    {
         path: '/resource',
        component: Resources,
    },
    {   
         path: '/aboutus',
        component: Aboutus,
    },
    {
        path: '/auth/signup',
        component: JwtRegister,
    },
    {
        path: '/auth/signin',
        component: JwtLogin,
    },
    {
        path: '/auth/forgot-password',
        component: ForgotPassword,
    },
    {
        path: '/auth/reset-password',
        component: ResetPassword,
    },

    {
        path: '/auth/InvitedPage',
        component: InvitedPage,
    },

    {
        path: '/session/404',
        component: NotFound,
    },
]

export default sessionRoutes
