import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
    
    const {user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center items-center py-4">
            <span className="loading loading-bars loading-sm"></span>
        </div>
    }

    if (user) {
        return children
    }

    return (
        <div>
            <Navigate to='/Login'></Navigate>
        </div>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.object
}

export default PrivateRoute;