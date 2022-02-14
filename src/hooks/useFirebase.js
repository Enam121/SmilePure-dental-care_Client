import initializeAuthentication from "../pages/Login page/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';


initializeAuthentication();

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  const registerUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError('');
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(newUser, 'POST');
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          // ...
        }).catch((error) => {
          // ...
        });
      })
      .catch((error) => {
        setError(error.message);
        // ..
      });

  }

  const loginUser = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setError('')
        const destination = location.state?.from || '/';
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        const newUser = { email: user.email, displayName: user.displayName };
        saveUser(newUser, 'PUT');
        setError('')
      }).catch((error) => {
        setError(error.message);

      });

  }

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({})
    }).catch((error) => {
      // An error happened.
    });
  }

  const saveUser = (userInfo, method) => {
    fetch('http://localhost:5000/users', {
      method: method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userInfo)
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          alert('User Create Successfully')
        }
      });

  };

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(result => setAdmin(result.admin))

  }, [user.email])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setLoading(false);
    });

  }, [auth])

  return {
    registerUser,
    loginUser, googleSignIn,
    logOut,
    user,
    error,
    admin,
    loading
  }

};

export default useFirebase;