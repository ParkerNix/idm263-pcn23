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
import { CreateGroup } from './pages/createGroup';
import { AddFriends } from './pages/friends';
import { SearchFriends } from './pages/searchFriends';
import { NoFriends } from './pages/noFriends';
import { Profile } from './pages/profile';
import { FriendProfile } from './pages/friendProfile';
import { Groups } from './pages/groups';
import { EditGroup } from './pages/editgroup';
import { AddedFriend } from './pages/addedFriend';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}></Route>
              <Route path="/pages/allGroups" element={<AllGroups />}></Route>
              <Route path="/pages/newExpense" element={<NewExpense />}></Route>
              <Route path="/pages/createGroup" element={<CreateGroup />}></Route>
              <Route path="/pages/friends" element={<AddFriends />}></Route>
              <Route path="/pages/searchFriends" element={<SearchFriends />}></Route>
              <Route path="/pages/noFriends" element={<NoFriends />}></Route>
              <Route path="/pages/profile" element={<Profile />}></Route>
              <Route path="/pages/friendProfile" element={<FriendProfile />}></Route>
              <Route path="/pages/groups" element={<Groups />}></Route>
              <Route path="/pages/editgroup" element={<EditGroup />}></Route>
              <Route path="/pages/addedFriend" element={<AddedFriend />}></Route>
          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
