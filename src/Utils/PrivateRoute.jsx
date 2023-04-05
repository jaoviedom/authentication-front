import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../Context/AuthContext";


const PrivateRoute = () => {
  let {user} = useContext(AuthContext)
  return user ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute;