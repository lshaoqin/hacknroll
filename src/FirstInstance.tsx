import React, { useEffect, useState } from 'react';
import getRequest from './services/requests';
import POPUP from './POPUP';


const HandleFirstInstance: React.FC = () => {
    const [IdFound, setIdFound] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        getRequest('comments/fetch', {session_id: localStorage.getItem('session_id')})
            .then((value: object) => {
            setIdFound(true);
            })
            .catch((error: any) => {
            setError(error.message);
            });
        }, [IdFound, setIdFound]);

  
    return (
      {IdFound} && <POPUP />
    );
  }

export default HandleFirstInstance;