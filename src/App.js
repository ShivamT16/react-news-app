import React from 'react';
import './App.css';
import { TopNews } from './features/TopNews';
import { NavigationBar } from './NavigationBar';

function App() {
  return (
    <div className="App">
     <h1>News Portal</h1>
     <NavigationBar />
     <TopNews />
    </div>
  );
}

export default App;
