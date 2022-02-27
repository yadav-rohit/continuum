import React from 'react';
import './App.css';
import './Form.css';
<<<<<<< Updated upstream
import Main from './Components/Main'
=======
import About from './Components/About'
>>>>>>> Stashed changes
import Contact from './Components/ContactUs'
import Team from './Components/Team'

import Header from './Components/Header';
import TransactionState from './context/TransactionState';

import Footer from './Components/Footer';


import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function App() {
    return ( <
            TransactionState >
            <
            div className = "flex flex-col md:min-h-screen  overflow-hidden  font-medium  bg-[#000000]" >
<<<<<<< Updated upstream

            <
=======
            <
            p > Hello < /p> <
>>>>>>> Stashed changes
            BrowserRouter >
            <
            Header / >
            <
            Routes >
            <
            Route exact path = "/"
            element = { < Main / > }
<<<<<<< Updated upstream
            /> <
            Route exact path = "/About"
            element = { < About / > }
            /> { / * < Route exact path = "/DonationPage"
            element = { < Dpage / > }
            /> */
        } { /* <Route exact path="/Helper" element={<HelpsSection/>} /> */ } <
=======
            /> { / * < Route exact path = "/About"
            element = { < About / > }
            /> */
        } { /* <Route exact path="/DonationPage" element={<Dpage/>} /> */ } { /* <Route exact path="/Helper" element={<HelpsSection/>} /> */ } <
>>>>>>> Stashed changes
        Route exact path = "/Contact"
    element = { < Contact / > }
    /> < /
    Routes > <
        /BrowserRouter> <
    Footer / >
        <
        /div> < /
<<<<<<< Updated upstream
        TransactionState >
=======
    TransactionState >
>>>>>>> Stashed changes
);
}

export default App;