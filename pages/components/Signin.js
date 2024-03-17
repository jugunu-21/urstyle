import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const SignIn = () => {
  const signInWithEmail = () => {
    // Implement email/password sign-in here
  };

  const signInWithGoogle = () => {
    // Implement Google sign-in here
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={signInWithEmail}>Sign In with Email</button>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;