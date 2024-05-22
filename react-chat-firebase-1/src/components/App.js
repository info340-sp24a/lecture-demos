import React, {useEffect, useState} from 'react';

import { getDatabase, ref, set as firebaseSet, push as firebasePush, onValue } from 'firebase/database';

import { Routes, Route, Outlet, Navigate, useNavigate } from 'react-router-dom';

import { HeaderBar } from './HeaderBar.js';

import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';

import INITIAL_CHAT_LOG from '../data/chat_log.json'
import DEFAULT_USERS from '../data/users.json';

function App(props) {
  const [messageStateArray, setMessageStateArray] = useState([]);
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //initialize;

  const navigateTo = useNavigate(); //navigation hook


  useEffect(() => {
    const db = getDatabase();
    const messageRef = ref(db, 'allMessages');

    // addEventListener('database Change', () => {})
    onValue(messageRef, (snapshot) => {
      console.log("database changed!");
      const allMessageObj = snapshot.val();
      const keyArray = Object.keys(allMessageObj);
      const allMessageArray = keyArray.map((key) => {
        const transformed = allMessageObj[key];
        transformed.firebaseKey = key;
        return transformed;
      })

      console.log(allMessageArray);

      setMessageStateArray(allMessageArray)

    })


  }, [])


  //effect to run when the component first loads!
  useEffect(() => {
    //log in a default user
    changeUser(DEFAULT_USERS[1])

  }, []) //array is list of variables that will cause this to rerun if changed

  const changeUser = (userObj) => {
    console.log("changing user to", userObj.userName);
    setCurrentUser(userObj);
    if(userObj.userId !== null){
      navigateTo('/chat/'); //go to chat after login
    }
  }

  const addMessage = (userObj, text, channel) => {
    const newMessageObj = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": text,
      "timestamp": Date.now(),
      "channel": channel
    }
    // const newMessageArray = [...messageStateArray, newMessageObj];
    // setMessageStateArray(newMessageArray); //update state & rerender

    //put the message into Firebase DB
    const db = getDatabase();
    const messageRef = ref(db, 'allMessages');

    //          where to put, what to put
    //firebaseSet(messageRef, newMessageObj);
    firebasePush(messageRef, newMessageObj);
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} />

      <Routes>
        <Route index element={ <Static.WelcomePage /> }/>
        <Route path="/about" element={ <Static.AboutPage /> } />

        <Route element={<ProtectedPage currentUser={currentUser} />} >
          <Route path="chat/:chanName?" element={
            <ChatPage 
              currentUser={currentUser} 
              messageArray={messageStateArray}
              addMessageFunction={addMessage}
              />
          } />
        </Route>
        <Route path="/signin" element={ 
          <SignInPage currentUser={currentUser} changeUserFunction={changeUser} />} 
        />
        <Route path="*" element={<Static.ErrorPage />} />
      </Routes>
    </div>
  );
}

function ProtectedPage(props) {
  const {currentUser} = props;

  //...determine if user is logged in
  if(currentUser.userId === null) { //not undefined
    return <Navigate to="/signin"/>
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}

export default App;