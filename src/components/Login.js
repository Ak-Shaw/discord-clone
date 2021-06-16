import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from '../app/firebase';
import '../styles/Login.css';

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/discord.svg"
          alt="discord-logo"
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
