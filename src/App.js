import React, { useState, useEffect } from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';

import './App.css';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import StakeContainer from './components/stake/StakeContainer';

import { store } from './redux/store';
import { setStatusThunk, getDataThunk, setManageData, setWorklockData } from './redux/reducers';
import * as t from './redux/actionTypes';

const history = createBrowserHistory();
const ethereum = window.ethereum;


const App = props => {
   const [amount, setAmount] = useState(null);

   useEffect(() => {
      metamaskChecking();
   });

   const handleAmountState = amount => setAmount(amount);

   const metamaskChecking = (address = null) => {
      if (typeof window.ethereum !== 'undefined') {
         const ethereum = window.ethereum;
         if (ethereum.selectedAddress !== null || address) {
            // to put BSC network integration with CFP and SWT abis
            if (ethereum.networkVersion === '97' || ethereum.networkVersion === undefined) {
               props.getDataThunk();
               ethereum.on('accountsChanged', () => {
                  metamaskChecking();
                  // store.dispatch(setWorklockData({}, true));
                  // store.dispatch(setManageData({}, true));
               });
            } else {
               props.setStatusThunk(t.WRONG);
            }
         } else {
            props.setStatusThunk(t.CONNECT, handleConnectClick);
         }
      } else {
         props.setStatusThunk(t.INSTALL);
      }
   };

   const handleConnectClick = () => {
      ethereum.enable()
         .then(ob => metamaskChecking(ob[0]))
         .catch(err => console.error(err.message));
   };

   return (
      <Router history={history}>
         <div className="my_wrapper">
            <Header />

            <div className="my_content_wrapper">
               <Route path="/" exact>
                  <Route
                      path="/"
                      render={() => (
                          <StakeContainer
                              amount={amount}
                              handleAmount={handleAmountState}
                          />
                      )}
                  />
               </Route>

            </div>

            <Footer />
         </div>
      </Router>
   );
};

const mapStateToProps = ({ user }) => ({
   account: user.account,
});

export default connect(mapStateToProps, { setStatusThunk, getDataThunk })(App);
