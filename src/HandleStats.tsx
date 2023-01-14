import React from 'react';
import './index.css';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';

type Previous = {
    day:number;
    guess:string;
    points:number;
}

type Stats = {
    points:number;
    daysPlayed:number;
    previous: Previous[];

}
const HandleStats:React.FC<Stats> = (stats) => {
    return (
        <>
            <h1>Player Statistics</h1>
            <p> Total Score: {stats.points} <br/>
                Days Player: {stats.daysPlayed} <br />
                Past 5 guesses:                
            </p>
            
            {stats.previous.map( (item, index) => (
                <div style={{margin: '25%'}}>
                    <Card style={{ maxWidth: 600 }} key = {index}>
                        <CardContent>
                            <Typography variant='h4'  gutterBottom>
                                {item.guess}
                            </Typography>
                            <Typography variant="body1">
                             {item.points} on {item.day} 
                            </Typography>
                        </CardContent>
                    </Card>      
                </div>
                ))}
        </>
    )
}

export default HandleStats;
