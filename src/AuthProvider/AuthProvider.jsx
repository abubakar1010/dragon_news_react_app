import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
import { signOut } from "firebase/auth/cordova";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {

    return signOut(auth)
  }

  const login = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);

      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    user,
    logout,
    login
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
