import React, { useState } from 'react';

import { ComposeForm } from './ComposeForm.js';

import INITIAL_CHAT_LOG from '../data/chat_log.json'

export function ChatPane(props) {
  console.log("rendering ChatPane");
  const { currentChannel, currentUser } = props;

  const [msgStateArray, setMsgStateArray] = useState(INITIAL_CHAT_LOG); 
  console.log(msgStateArray);

  // //goood: compute based on state
  // const numMsgs = msgStateArray.length;
  // //bad
  // const [numMsg, setNumMsg] = useState(INITIAL_CHAT_LOG.length)


  //STATE MANAGEMENT: how do we change
  const addMessage = function(userObj, messageText, channel) {
    console.log(userObj);
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel
    }
    console.log("new message", newMessage);

    const newArray = [...msgStateArray, newMessage];
    setMsgStateArray(newArray); //update the board & re-render
  }


  //RENDERING: what do we look like

  //* Data Processing *//
  //data: an array of messages [{}, {}]
  const orderedMessageArray = msgStateArray
    .sort((m1, m2) => m2.timestamp - m1.timestamp); //reverse chron order

  //filter for only channel stuff
  const channelMessages = orderedMessageArray.filter((msgObj) => {
    return msgObj.channel === currentChannel;
  })

  //* displaying display - what does it look like *//
  //DOM content [<MessageItem/>, <MessageItem/>]
  const messageItemArray = channelMessages.map((chatObj) => {
      const elem = <MessageItem messageData={chatObj} key={chatObj.timestamp} />
      return elem; //put it in the new array!
  });

  return (
    <> {/* fake div */}
      <div className="scrollable-pane pt-2 my-2">
          {/* conditional rendering */}
          { messageItemArray.length === 0 && 
            <p>No messages yet</p>
          }

          {messageItemArray}
        </div>

        <ComposeForm currentChannel={currentChannel} addMessageFunction={addMessage} currentUser={currentUser} />
    </>
  )
}

function MessageItem(props) {
  const messageData = props.messageData;
  const {userName, userImg, text} = messageData;

  const handleClick = (event) => {
    console.log("You like a post by "+userName);
  }

  let buttonColor = "grey";

  return (
   <div className="message d-flex mb-3">
    <div className="me-2">
      <img src={userImg} alt={userName+"'s avatar"}/>
    </div>
    <div className="flex-grow-1">
      <p className="user-name">{userName}</p>
      <p>{text}</p>
      <button className="btn like-button" onClick={handleClick}>
          <span className="material-icons" style={{ color: buttonColor }}>favorite_border</span>
      </button>
    </div>
   </div> 
  )
}