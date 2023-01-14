import React from 'react';
import Game from './views/game';
import './App.css';

function App() {
  return (
    <div className="App">
      <Game/>
    </div>
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


