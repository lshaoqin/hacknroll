import React, { useEffect, useState } from 'react';
import getRequest from './services/requests';
import POPUP from './POPUP';

type User = {
  session_id: string
}
const HandleFirstInstance: React.FC = () => {
    const [IdFound, setIdFound] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
      if(localStorage.getItem('session_id') === null) {
        getRequest('get_id', {})
            .then((value: object) => {
              const user = value as User
              console.log(value)
              localStorage.setItem('session_id', user.session_id)
            setIdFound(true);
            })
            .catch((error: any) => {
            setError(error.message);
            });}
        }, [IdFound, setIdFound]);

  
    return (
       <>
        {{IdFound} && <div 
            style = {{transform: 'translate(45%, -2%)'}} >
                <POPUP />
        </div>}
      </>
    );
  }

export default HandleFirstInstance;