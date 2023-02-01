import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from './store/store';
import { Provider } from 'react-redux';
import { NewExpense } from './pages/newExpense';
import { AllGroups } from './pages/allGroups';
import { CostBreakdown } from './pages/costBreakdown';
import { ViewGroup } from './pages/viewGroup';
import { Overview } from './pages/overview';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Overview />}></Route>
              <Route path="/pages/allGroups" element={<AllGroups />}></Route>
              <Route path="/pages/newExpense" element={<NewExpense />}></Route>
              <Route path="/pages/costBreakdown" element={<CostBreakdown />}></Route>
              <Route path="/pages/viewGroup" element={<ViewGroup />}></Route>
          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
