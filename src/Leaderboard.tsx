import React, { useEffect, useState } from 'react';
import './index.css';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import getRequest from './services/requests'

type Leaderboard = {
    word: string;
    guesses: number;
    points: number;
    userSelected: boolean;
}


const LeaderBoardList: React.FC = 
    () => {
        const [error, setError] = useState<string>("");
        const [leaderboard, setLeaderboard] = useState<Leaderboard[]>([]);

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

type Props = {
    leaderboard: Leaderboard[];
}

const HandleLeaderBoard:React.FC<Props> = ({leaderboard}) => {
    return (
        <>
            {leaderboard.map( (item, index) => (
                <div style={{margin: '25%'}} className = {item.userSelected ? "user-selected" : ""}>
                    <Card style={{ maxWidth: 600 }} key = {index}>
                        <CardContent>
                            <Typography variant='h4'  gutterBottom>
                                {item.word}
                            </Typography>
                            <Typography variant="body1">
                            There are {item.guesses - 1} other person(s) who guessed this.
                            {item.userSelected && <p>You picked this word!</p>}                            
                            </Typography>
                        </CardContent>
                    </Card>      
                </div>
            ))}
        </>
    )
}

export default LeaderBoardList;