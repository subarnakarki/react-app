import React from 'react';
import './App.css';
import team from './team.js';
import Card from './card.js';

function App() {
  return (
    team.map((team) => {
      let {image, name, profession, summary, id} = team;
      return( 
      <Card image={image} name={name} profession={profession} summary={summary} key={id} />);
      ;
    })
  );
}

export default App;
