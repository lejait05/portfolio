import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {createBrowserHistory} from "history";
import App from './components/App';
import Jokes from "./components/Jokes";
import MusicMaster from './projects/music-master/src/index';
import EvensOrOdds from "./projects/evens-or-odds";
// import 'bootstrap/dist/css/bootstrap.min.css';
import  './index.css';
import Header from "./components/Header";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter history={ createBrowserHistory()}>
    <Routes>
        < Route path='/' element={<Header><App/></Header>}/>
        <Route path='/jokes' element={<Header><Jokes/></Header>}/>
        <Route path='/music-master' element={<Header><MusicMaster/></Header>}/>
    <Route path='/evens-or-odds' element={<Header><EvensOrOdds/></Header>}/>
    </Routes>
</BrowserRouter>);
