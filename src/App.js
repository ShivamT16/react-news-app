import React from 'react';
import './App.css';
import { TopNews } from './features/TopNews';
import { NavigationBar } from './NavigationBar';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { NewsDetail } from './features/NewsDetail';

function App() {
  return (
    
    <div className="App">

     <Router>
     <Link to="/">React News Portal</Link>
     <NavigationBar />
     
     <Routes>
      <Route path="/" element={<TopNews />} />
      <Route path="/news/article/:id" element={<NewsDetail />} />
     </Routes>
     </Router>
    </div>

    
  );
}

export default App;
