import React, { useEffect } from "react";
import { TextField } from "@material-ui/core";
import getRequest from "../services/requests";
import { postRequest } from "../services/requests";
import SendButton from "../components/SendButton";

type GameParams = {
    picture: string;
    day: number;
}

const Game: React.FC = () => {
    const [params, setParams] = React.useState<GameParams>();
    const [error, setError] = React.useState<string>();
    const [word, setWord] = React.useState<string>();

    useEffect(() => {
        getRequest('game', {})
        .then((response: object) => {
            setParams(response as GameParams);
        })
        .catch((error: any) => {
            setError(error);
        });
    }, []);

    function submitHandler() {
        postRequest('game', {'session_id': localStorage.getItem('session_id'), 'guess':word})
    }
    
    return (
        <div>
        {(params)
        ?
        <div>
        <img src={params?.picture} alt=''></img>
        <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="word"
              label="Enter your word here"
              name="word"
              autoComplete="E.g. 'Cat'"
              inputProps={{ maxLength: 12 }}
              autoFocus
              onChange={event => setWord(event.target.value)}
            />
        <SendButton onClick={submitHandler} />
        </div>
        :(error)
        ?<div>
            <h2>{error}</h2>
        </div>
        :<h2>Loading...</h2>}
        </div>
    )
        }

export default Game;