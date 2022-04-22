import { makeStyles } from '@material-ui/core';
import { AccountBalanceTwoTone } from '@material-ui/icons';
import React from 'react';
import './App.css';
import {createTheme, ThemeProvider } from '@material-ui/core'
import Navbar from './components/navbar.js'
import HomePage from './components/homePage.js';
import Inflation from './components/unitOnePartTwo.js';
import Footer from './components/footer.js'
import BanksPartOne from './components/banks.js';
import BanksPartTwo from './components/banksPartTwo.js';
import BanksPartThree from './components/banksPartThree.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Units from './components/units.js'
import Credit from './components/credit';
import CreditPartTwo from './components/creditPartTwo';
import TaxesPartOne from './components/taxesPartOne';
import Insurance from './components/insurancePartOne';
import InvestingPartOne from './components/investingPartOne';
import InvestingPartTwo from './components/investingPartTwo';
import InvestingPartThree from './components/investingPartThree';
import HigherEducationPartOne from './components/higherEducationPartOne';
import HigherEducationPartTwo from './components/higherEducationPartTwo';
import Congrats from './components/congrats';
function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact element = {<HomePage/>}></Route>
          <Route path="inflation/" exact element = {<Inflation/>}></Route>
          <Route path="bpone" exact element = {<BanksPartOne/>}></Route>
          <Route path="bptwo" exact element = {<BanksPartTwo/>}></Route>
          <Route path="bpthree" exact element = {<BanksPartThree/>}></Route>
          <Route path="units" exact element = {<Units/>}></Route>
          <Route path="credit" exact element = {<Credit/>}></Route>
          <Route path="creditparttwo" exact element = {<CreditPartTwo/>}></Route>
          <Route path="taxespartone" exact element = {<TaxesPartOne/>}></Route>
          <Route path="Insurance" exact element = {<Insurance/>}></Route>
          <Route path="Investingpartone" exact element={<InvestingPartOne/>}></Route>
          <Route path="Investingparttwo" exact element={<InvestingPartTwo/>}></Route>
          <Route path="highereducationpartone" exact element={<HigherEducationPartOne/>}></Route>
          <Route path="investingpartthree" exact element={<InvestingPartThree/>}></Route>
          <Route path="highereducationparttwo" exact element={<HigherEducationPartTwo/>}></Route>
          <Route path="congrats" exact element={<Congrats/>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default App;
