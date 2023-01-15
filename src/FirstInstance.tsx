import React, { useEffect, useState } from 'react';
import getRequest from './services/requests';
import POPUP from './POPUP';


const HandleFirstInstance: React.FC = () => {
    const [IdFound, setIdFound] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        getRequest('get_id', {session_id: localStorage.getItem('session_id')})
            .then((value: object) => {
            setIdFound(true);
            })
            .catch((error: any) => {
            setError(error.message);
            });
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