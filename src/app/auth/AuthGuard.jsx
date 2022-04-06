import React, {
    // useContext,
    useEffect,
    useState,
} from 'react'
import { Redirect, useLocation } from 'react-router-dom'
// import AppContext from "app/appContext";
//import useAuth from 'app/hooks/useAuth'
import { useSelector } from 'react-redux'
// const getUserRoleAuthStatus = (pathname, user, routes) => {
//   const matched = routes.find((r) => r.path === pathname);

//   const authenticated =
//     matched && matched.auth && matched.auth.length
//       ? matched.auth.includes(user.role)
//       : true;
//   console.log(matched, user);
//   return authenticated;
// };

const AuthGuard = ({ children }) => {
    // const {
    //     isAuthenticated
    // } = useAuth()

    const IsLoggedIn = useSelector(state => state.root.IsLoggedIn );
    //const { isAuthenticated } = user.isAuthenticated;

    const [previouseRoute, setPreviousRoute] = useState(null)
    const { pathname } = useLocation()

    // const { routes } = useContext(AppContext);
    // const isUserRoleAuthenticated = getUserRoleAuthStatus(pathname, user, routes);
    // let authenticated = isAuthenticated && isUserRoleAuthenticated;

    // IF YOU NEED ROLE BASED AUTHENTICATION,
    // UNCOMMENT ABOVE TWO LINES, getUserRoleAuthStatus METHOD AND user VARIABLE
    // AND COMMENT OUT BELOW LINE
    //let authenticated = isAuthenticated

    useEffect(() => {
        if (previouseRoute !== null) setPreviousRoute(pathname)
    }, [pathname, previouseRoute])

    if (IsLoggedIn) return <>{children}</>
    else {
        return (
            <Redirect
                to={{
                    pathname: '/auth/signin',
                    state: { redirectUrl: previouseRoute },
                }}
            />
        )
    }
}

export default AuthGuard
