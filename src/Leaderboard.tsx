import React, { useEffect, useState } from 'react';
import './index.css';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import getRequest from './services/requests'


/*const testValue = {
    word: "test",
    guesses: 3,
    points: 5,
    userSelected: false,
}

const testValue2 = {
    word: "testasdasd",
    guesses: 3,
    points: 5,
    userSelected: false,
}

const testValue3 = {
    word: "testasdasd",
    guesses: 3,
    points: 5,
    userSelected: true,
}

const setStyle = {
    userSelected: {
        Color: "yellow",
    }
}*/

const LeaderBoardList: React.FC = 
    () => {
        const [error, setError] = useState<string>("");
        const [leaderboard, setLeaderboard] = useState<Leaderboard[]>([/*testValue,testValue2,testValue3*/]);

        useEffect(() => {
            getRequest('comments/fetch', {session_id: localStorage.getItem('session_id')})
              .then((value: object) => {
                const board = value as Leaderboard[];
                setLeaderboard(board);
              })
              .catch((error: any) => {
                setError(error.message);
              });
          }, [leaderboard, setLeaderboard]);


        if (error) {
            return <h1>{error}</h1>;
        }

        if (leaderboard) {
            return (
                <HandleLeaderBoard leaderboard={leaderboard} />
            )
        }
        
        return(
            <h2>Loading...</h2>
        )
    }

type Leaderboard = {
    word: string;
    guesses: number;
    points: number;
    userSelected: boolean;
}
    

type Props = {
    leaderboard: Leaderboard[];
}

const HandleLeaderBoard:React.FC<Props> = ({leaderboard}) => {
    return (
        <>
            {leaderboard.map( (item, index) => (
                <div style={{margin: '3%'}}>
                    <Card style={{ maxWidth: 600 }} key = {index} >
                        <CardContent className = {item.userSelected ? "userSelected" : ""}>
                            <Typography variant='h4'  gutterBottom>
                                {item.word}
                            </Typography>
                            <Typography variant="body1">
                            There are {item.guesses - 1} other person(s) who guessed this.
                            {item.userSelected && <p><b>You picked this word!</b></p>}
                            </Typography>
                        </CardContent>
                    </Card>      
                </div>
            ))}
        </>
    )
}

export default LeaderBoardList;