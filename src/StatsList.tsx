import React, { useEffect, useState } from 'react';
import './index.css';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import getRequest from './services/requests';




const StatsList: React.FC = 
    () => {
        const [error, setError] = useState<string>("");
        const [stats, setStats] = useState<Stats>();

        useEffect(() => {
            getRequest('get_id', {session_id: localStorage.getItem('session_id')})
              .then((value: object) => {
                const statsBoard = value as Stats;
                setStats(statsBoard);
              })
              .catch((error: any) => {
                setError(error.message);
              });
          }, [stats, setStats]);


        if (error) {
            return <h1>{error}</h1>;
        }

        if (stats) {
            return (
                <HandleStats stats = {stats} />
            )
        }
        
        return(
            <h2>Loading...</h2>
        )
    }




type Previous = {
    day:number;
    guess:string;
    points:number;
}

type Stats = {
    points: number;
    daysPlayed: number;
    previous: Previous[];
}

type Props = {
    stats: Stats;
}


const HandleStats:React.FC<Props> = ({stats}) => {
    return (
        <>
            
                        
      
            <h1>Player Statistics</h1>
            <p> Total Score: {stats.points} <br/>
                Days Played: {stats.daysPlayed} <br />
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

export default StatsList;
