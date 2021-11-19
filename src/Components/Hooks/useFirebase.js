import { useEffect, useState } from "react";
import initAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

initAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //using google
  const signInUsingGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUser(user.email, user.displayName, "PUT");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //user email password
  const customSignUpWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const customSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //set name
  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const profileName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {});
  };
  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };
  // observe whether user auth state change or not//
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  //cheak admin fetch
  useEffect(() => {
    fetch(`https://fierce-ridge-17971.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  // Save signup user
  const saveUser = (email, profileName, method) => {
    const user = { email, profileName };
    fetch("https://fierce-ridge-17971.herokuapp.com/users", {
      method: method,
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    error,
    name,
    admin,
    setUser,
    logOut,
    signInUsingGoogle,
    handleName,
    profileName,
    isLoading,
    customSignUpWithEmailAndPassword,
    customSignInWithEmailAndPassword,
    saveUser,
  };
};
export default useFirebase;
