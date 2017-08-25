import React from 'react';
import styles from '../styles/App.css';
import Plant from './Plant';


function App(){
  return (
    <div>
      <h1>Welcome to Water It</h1>
      <p>We will help you stay organized and on time with your plants watering needs.</p>
      <Plant />
    </div>
  );
}

export default App;
