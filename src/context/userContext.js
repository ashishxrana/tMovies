import {createContext,useContext,useState} from "react";
import { Redirect } from 'react-router';
import{
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
    sendPasswordResetEmail,
    GoogleAuthProvider, 
    signInWithPopup,
    GithubAuthProvider,
  } from "firebase/auth";
import {auth} from "../Firebase";
export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const setErrorComponents=(value)=>{
    setError(value)
  }
  var count=0;
  useState(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        console.log("check");
        count+=1;
        console.log(count)
        if(count>=2){
        setUser(res);
        }
      } else {
        setUser(null);
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const registerUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() =>
        updateProfile(auth.currentUser, {
          displayName: name
        })
      )
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
  };

  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res), setUser(1))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };

  const logoutUser = () => {
    console.log("check123")
    signOut(auth);
    <Redirect to="/"/>
    setUser(null);
  };

  const signInWithGithub = () => {
    setError("");
    signInWithPopup(auth, new GithubAuthProvider())
      .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      setError(error);
    });
};
  const [index, setIndex] = useState(true);
  const contextValue = {
    user,
    loading,
    error,
    setUser,
    signInUser,
    registerUser,
    logoutUser,
    forgotPassword,
    index, 
    setIndex,
    setErrorComponents,
    signInWithGoogle,
    signInWithGithub,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};