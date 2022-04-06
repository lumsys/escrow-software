import '../fake-db'
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import AppContext from './contexts/AppContext'
import history from 'history.js'
import routes from './RootRoutes'
import { store } from './redux/store/index'
import { Store } from './redux/Store'
import { GlobalCss, MatxSuspense, MatxTheme, MatxLayout } from 'app/components'
import sessionRoutes from './views/sessions/SessionRoutes'
import AuthGuard from './auth/AuthGuard'
import { AuthProvider } from 'app/contexts/JWTAuthContext'
import { SettingsProvider } from 'app/contexts/SettingsContext'
import DisplayMessage from './views/message/message'
import Market from './src/homepage/Market/Market';
import Resources from './src/homepage/Resources/ResourceCenter';
import Aboutus from './src/homepage/Aboutus/AboutUs-page/aboutUs';

const App = () => {
    //const newstore = {...store, ...Store}
    return (
        <AppContext.Provider value={{ routes }}>
            <Provider store={store}>
                <SettingsProvider>
                    <MatxTheme>
                        <GlobalCss />
                     {/*   <Search />*/}
                        <BrowserRouter basename={process.env.PUBLIC_URL}>
                        <DisplayMessage />
                        <Router history={history}>
                            <AuthProvider>
                                <MatxSuspense>
                                    <Switch>
                                    {/* <Route                                               
                                                path="/"
                                                component={Market}
                                            />
                                    <Route                                               
                                                path="/resource"
                                                component={Resources}
                                            />
                                    <Route                                               
                                                path="/aboutus"
                                                component={Aboutus}
                                            /> */}
                                        {/* AUTHENTICATION PAGES (SIGNIN, SIGNUP ETC.) */}
                                        {sessionRoutes.map((item, i) => (
                                            <Route
                                                key={i}
                                                path={item.path}
                                                component={item.component}
                                                exact={item.exact}
                                            />
                                        ))}
                                        {/* AUTH PROTECTED DASHBOARD PAGES */}
                                        <AuthGuard>
                                            <MatxLayout />{' '}
                                            {/* RETURNS <Layout1/> component */}
                                        </AuthGuard>
                                    </Switch>
                                </MatxSuspense>
                            </AuthProvider>
                        </Router>
                        </BrowserRouter>
                    </MatxTheme>
                </SettingsProvider>
            </Provider>
        </AppContext.Provider>
         
    )
}

export default App
