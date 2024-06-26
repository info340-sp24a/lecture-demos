import React, {useState } from 'react';

import { HeaderBar } from './HeaderBar.js';
import { ChannelList } from './ChannelList.js';
import { ChatPane } from './ChatPane.js';
import * as Static from './StaticPages.js';

function App(props) {
  const channelNamesArray = ["general", "channel-2", "birds", "dank-memes", "random"];

  const defaultUser =   {userId: "parrot", userName: "Parrot", userImg: '/img/Parrot.png'}

  const [currentUser, setCurrentUser] = useState(defaultUser);

  const [currentChannel, setCurrentChannel] = useState('general');

  //function to change the channel
  const changeChannel = (newChannel) => {
    //if channel name is bad, don't do anything
    setCurrentChannel(newChannel); //change state and rerender
  }

  //function to change the user
  const changeUser = (newUserObj) => {
    setCurrentUser(newUserObj);
  }

  return (
    <div className="container-fluid d-flex flex-column">
      <HeaderBar currentUser={currentUser} changeUserFunction={changeUser} />
      <div className="row flex-grow-1">
        <div className="col-3">
          <ChannelList 
            channelNames={channelNamesArray} 
            currentChannel={currentChannel}
            changeChannelFunction={changeChannel} 
            />
        </div>
        <div className="col d-flex flex-column">
          <ChatPane currentChannel={currentChannel} currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
}

export default App;