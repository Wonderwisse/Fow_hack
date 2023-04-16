import React from 'react';
import { useRouter } from 'next/router';

const  login = () => {

  const router = useRouter();

  const handleUserLogin = () => {
    // Add your logic for user login
    // Redirect to user page after successful login
    router.push('../screens/homepage');
  }

  const handleFarmerLogin = () => {
    // Add your logic for farmer login
    // Redirect to farmer page after successful login
    router.push('../farmer/fhomepage');
  }
    return (
      <div className="login-container">
        <h1 className="login-header">Login</h1>
        <form className="login-form" action="">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required />
          <input type="button" value="User Login" onClick={handleUserLogin} />
          <input type="button" value="Farmer Login" onClick={handleFarmerLogin} />
        </form>
        <p>If you don't have an account yet, click <a href="#">here</a> to sign up.</p>
	      <p>If you forgot your password, click <a href="#">here</a> to reset it.</p>
      </div>


    );
  }

export default login;