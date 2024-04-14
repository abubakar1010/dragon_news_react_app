import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types"
import { Spinner } from "@material-tailwind/react";

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className=" flex justify-center items-center h-screen"><Spinner color="green"  className=" w-8 h-8" /></div>
    }

    if (user) {
        
        return children
    }
    return (
        <Navigate state={location.pathname} to={"/login"} ></Navigate>
    );
};

PrivateRoute.propTypes = {

    children: PropTypes.node
}

export default PrivateRoute;