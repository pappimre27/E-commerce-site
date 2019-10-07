import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import './sign-in-and-sign-up.scss';
import SignUp from '../../components/sign-up/SignUp';

const SignInAndSignUp = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
