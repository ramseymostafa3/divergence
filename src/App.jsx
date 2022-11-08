import './App.css';
import React from 'react'
import { Navigate, Route, Routes, useLocation, BrowserRouter as Router } from 'react-router-dom'
import SignIn from './components/SigninScreen/SignIn'
import PreSignUp from './components/PreSignUpScreen/PreSignUp'
import SignUp from './components/SignUpScreen/SignUpScreen'
import ForgotPassword from './components/ForgotPasswordScreen/ForgotPassword'
import CreateNewPassword from './components/CreateNewPasswordScreen/CreateNewPassword'
import Pricing from './components/PricingScreen/Pricing'
import SetupPayment from './components/SetupPaymentScreen/SetupPayment'
import SelectBroker from './components/SelectBrokerScreen/SelectBroker'
import { RequireAuth } from './components/RequireAuth/RequireAuth'
import Toasts from './components/Toasts/Toasts'
import { titles } from './fixtures'
import { useEffect } from 'react'

import Home from "pages/home";
import Transactions from "pages/transactions";
import Positions from "pages/positions";
import Summary from "pages/summary";
import TradeSetUp from "pages/tradesetup";
import General from "pages/general";
import Admin from "pages/admin";

import "assets/css/dashmix.css";
import "assets/css/responsive.css";
import "App.css";


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/register' element={<PreSignUp />} />
        <Route path='/create-account' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route element={<RequireAuth redirectTo='/login' />}>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/transactions"} element={<Transactions />} />
          <Route exact path={"/positions"} element={<Positions />} />
          <Route exact path={"/summary"} element={<Summary />} />
          <Route exact path={"/tradesetup"} element={<TradeSetUp />} />
          <Route exact path={"/general"} element={<General />} />
          <Route exact path={"/admin"} element={<Admin />} />
          <Route exact path={"/pricing"} element={<Pricing />} />
          <Route exact path={"/setup-payment"} element={<SetupPayment />} />
          <Route exact path={"/select-broker"} element={<SelectBroker />} />
        </Route>
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/create-password' element={<CreateNewPassword />} />
        {/* <Route path="/verifyEmailOTP" element={<VerifyEmailOTP />} /> */}
        {/* <Route path="/verifyPhoneOTP" element={<VerifyPhoneOTP />} /> */}
        {/* <Route path="/forgotPasswordVerifyOTP" element={<ForgotPasswordVerifyOTP/>}/> */}
        {/* <Route path="/verifyPhoneNumber" element={<VerifyPhoneNumber/>}/> */}
        {/* <Route path='*' element={<Navigate to='/login' replace />} /> */}
      </Routes>
      <Toasts />
    </div>
  )
}

export default App
