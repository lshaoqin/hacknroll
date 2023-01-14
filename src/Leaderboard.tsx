import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { setDefaultResultOrder } from 'dns';
import getRequest from './services/requests'

type Leaderboard = {
    word: string;
    guesses: number;
    points: number;
    userSelected: boolean;
}


const LeaderBoardList: React.FC<Leaderboard> = 
    ({word, guesses, points, userSelected}: Leaderboard) => {
        const [error, setError] = useState<string>("");
        const [leaderboard, setLeaderboard] = useState<Leaderboard[]>([]);

        useEffect(() => {
            getRequest('comments/fetch', {post_id: post_id})
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
                <HandleLeaderBoard leaderboard />
            )
        }
    }



function HandleLeaderBoard(leaderboard : Leaderboard[]){
    return (
        <>
            {leaderboard.map( (item, index) => (
                <div style={{margin: '25%'}} className = {item.userSelected ? "user-selected" : ""}>
                    <Card sx={{ maxWidth: 600 }} key = {index}>
                        <CardContent>
                            <Typography variant='h4'  gutterBottom>
                                {item.word}
                            </Typography>
                            <Typography variant="body1">
                            There are {item.guesses - 1} other person(s) who guessed this.
                            {item.userSelected} && You picked this word!                            
                            </Typography>
                        </CardContent>
                    </Card>      
                </div>
                )}
        </>
    )
}

