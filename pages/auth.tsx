import React, { useState } from 'react';
import styled from 'styled-components';

import Login from '../components/auth/Login';
import Page from '../components/common/Page';
import Signup from '../components/auth/Signup';
import TransparentButton from '../components/common/TransparentButton';

const Auth = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <Page title="Login or Sign up">
      {showSignUp ?
        <>
          <Signup />
          <Message>
            Already have an account?&nbsp;
            <TransparentButton type="button" onClick={() => { setShowSignUp(false); }}>Click here to login.</TransparentButton>
          </Message>
        </>
        
      :
        <>
          <Login />
          <Message>
            Don't have an account?&nbsp;
            <TransparentButton type="button" onClick={() => { setShowSignUp(true); }}>Click here to sign up.</TransparentButton>
          </Message>

        </>
      }
    </Page>
  )
};

const Message = styled.div`
  margin-top: 20px;
`;

export default Auth;
