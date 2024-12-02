import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [coffeesData, setCoffeesData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState([]);
    const [isTrue, setIsTrue] = useState(false);
    const [loading, setLoading] = useState(true);


    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInAccount = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const signInAccountWithGoogle = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('Current User', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => unSubscribe();
    }, [])

    const values = {
        createNewUser,
        setErrorMessage,
        errorMessage,
        signInAccount,
        user,
        setUser,
        LogOutUser,
        signInAccountWithGoogle,
        isTrue,
        setIsTrue,
        loading,
        setLoading,
        coffeesData,
        setCoffeesData
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}

export default AuthProvider;