import React, { useEffect } from "react";
import { TextField } from "@material-ui/core";
import getRequest from "../services/requests";
import { postRequest } from "../services/requests";
import SendButton from "../components/SendButton";
import { makeStyles } from "@material-ui/core";
import HandleFirstInstance from "../FirstInstance";


type GameParams = {
    picture: string;
    day: number;
}

const useStyles = makeStyles(() => ({
    textArea: {
        width: 200,
        height: 20,
    },
    submitButton: {
        marginLeft: -45,
        marginTop: 45,
    }
  }));

const Game: React.FC = () => {
    const classes = useStyles()

    const [params, setParams] = React.useState<GameParams>();
    const [error, setError] = React.useState<string>();
    const [word, setWord] = React.useState<string>();

    useEffect(() => {
        getRequest('game', {})
        .then((response: object) => {
            setParams(response as GameParams);
            console.log(response)
        })
        .catch((error: any) => {
            setError(error);
        });
    }, []);

    function submitHandler() {
        postRequest('game', {'session_id': localStorage.getItem('session_id'), 'guess': word, 'round_id':params?.day})
        .then((response: object) => {
            console.log(response)
        })
        .catch((error: any) => {
            setError(error);
        });
    }
    
    return (
        <div>
        <a href="/statistics"> Link to statistics</a>
        <HandleFirstInstance />

        {(params)
        ?
        <div style={{alignItems:"center", justifyContent:"center"}}>
            <h2> Second guess - Day {params.day}</h2>
        <img src={params.picture} alt=''></img>
        <div style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
        <TextField
        className={classes.textArea}
              variant="outlined"
              margin="normal"
              fullWidth
              id="word"
              label="Second guess!"
              name="word"
              inputProps={{ maxLength: 12 }}
              autoFocus
              onChange={event => setWord(event.target.value)}
            />
            <div className={classes.submitButton}>
        <SendButton onClick={submitHandler} />
        </div>
        </div>
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