import { useSelector } from "react-redux"
import {  Navigate, Outlet } from "react-router-dom"
import { loggedInSelector } from "redux/auth/selectors"


export const PrivateRoute = () => {
    const isLogged  = useSelector(loggedInSelector)
        // return (<Route {...propsRoute}>{isLogged ? children : <Navigate replace to="/register"/>}</Route>)
        if (!isLogged) {
    return <Navigate replace to="/login"/>
        }
        return <Outlet/>

    }
