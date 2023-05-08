import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Buchung from './buchung'
import Reservierungen from './reservierungen';

function Main() {
    return (
        
            <Routes>
                <Route path='/' element={<Buchung />} />
                <Route path='/Buchung' element={<Buchung />} />
                <Route path='/Reservierungen' element={<Reservierungen />} />
            </Routes>
        
    )
}

export default Main
