import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const updateUserProfile = (name, photo,) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    };

    const logOut = () => {
        setIsLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then((res) => {
                        if (res.data.token) {
                            localStorage.setItem('access_token', res.data.token);
                        }
                    });
            } else {
                localStorage.removeItem('access_token');
            }
            setIsLoading(false);
        });
        return () => {
            return unsubscribe();
        };
    }, [auth, axiosPublic]);

    const authInfo = {
        user,
        isLoading,
        signIn,
        googleSignIn,
        createUser,
        updateUserProfile,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
