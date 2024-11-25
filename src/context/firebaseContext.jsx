import React, { createContext, useContext } from "react";
import { auth, db, storage } from "../config/firebaseConfig";

const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
    const firebaseServices = {
        auth,
        db,
        storage,
    };

    return (
        <FirebaseContext.Provider value={firebaseServices}>
            {children}
        </FirebaseContext.Provider>
    );
};

export const useFirebase = () => useContext(FirebaseContext);
