import * as React from 'react';
import AuthenticationService from '../../services/AuthenticationService';
import { Forbidden } from '../Forbidden/Forbidden';



export const ProtectedComponent: React.FC<{component: any}> = (props) => {
  const isAuthenticated = AuthenticationService.isUserLoggedIn();

  return (
    <>
      {isAuthenticated ?
        props?.component :
        <Forbidden/>
      }
    </>
  );
};


