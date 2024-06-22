import React from 'react';
import './App.css';
import { TopNews } from './features/TopNews';
import { NavigationBar } from './NavigationBar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { NewsDetail } from './features/NewsDetail';
import { Favourites } from './features/Favourites';

function App() {
  return (
    
    <div className="App">

     <Router>

     <NavigationBar />
     
     <Routes>
      <Route path="/" element={<TopNews />} />
      <Route path="/news/article/:id" element={<NewsDetail />} />
      <Route path="/news/favourites" element={<Favourites />} />
     </Routes>
     </Router>
    </div>

    
  );
}

export default App;
