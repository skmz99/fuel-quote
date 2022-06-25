import React from "react";
import './App.css';
import FuelQuoteForm from "./FuelQuoteForm";
import FuelQuoteHistory from "./FuelQuoteHistory";
//Some reason index.js and App.js need this exact line (line 6) in each file for routing to work
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";

function App(){
    return(
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/FuelQuoteForm" element={<FuelQuoteForm/>}/>
        <Route exact path="/FuelQuoteHistory" element={<FuelQuoteHistory/>}/>
      </Routes>
    );
}
export default App;
