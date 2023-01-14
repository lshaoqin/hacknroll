import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';




export default function App() {
    const [isSent, setIsSent] = useState(false);
    return (
        <>
            <h1>2nd popular word</h1>>
            <Image />
            <p> Guess the 2nd most popular word that describes this word </p>
            <Form />
        </>
    );
}

function Image() {
    
}

function Form() {
    const [text, setText] = useState("");
    return (
        <>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit;
                    }}>
                <textarea
                    text ={text}
                    onChange={e => setText(e.target.value)}
                    placeholder = "Insert text here"
                />

                <button 
                    type = "submit"
                    disabled={text.length === 0} 
                />
                    Submit answer
                </button>
            

            </form>
        </>

    );
  }
  
function handleSubmit() {

}


function handleLeaderBoard(){
    const [leaderboard, setLeaderboard] = useState([]);
    setLeaderboard({...leaderboard, 

    }) 

}


