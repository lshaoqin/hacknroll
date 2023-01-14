import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { setDefaultResultOrder } from 'dns';
import getRequest from './services/requests'




export default function HandleStats (stats : object[]){
    return (
        <>
            <h1>Player Statistics</h1>
            <p> Total Score: {stats.totalScore} <br/>
                Days Player: {stats.daysPlayed} <br />
                Past 5 guesses:                
            </p>
            
            {stats.map( (item, index) => (
                <div style={{margin: '25%'}}>
                    <Card sx={{ maxWidth: 600 }} key = {index}>
                        <CardContent>
                            <Typography variant='h4'  gutterBottom>
                                {item.word}
                            </Typography>
                            <Typography variant="body1">
                             {item.points - 1} on {item.day} 
                            </Typography>
                        </CardContent>
                    </Card>      
                </div>
                ))}
        </>
    )
}
