import INITIAL_CHAT_LOG from '../data/chat_log.json'

export function MessagePane(props) {

  //[{},{}, {}]
  console.log(INITIAL_CHAT_LOG);

  const messageItemArray = INITIAL_CHAT_LOG.map((msgObj) => {
    const transformed = (
      <MessageItem
        key={msgObj.timestamp} 
        messageData={msgObj}
      />
    )
    return transformed;
  })

  return (
    <div className="mx-3">
      {messageItemArray}
      {/* <MessageItem userName="Eagle" text="I am eagle" />
      <MessageItem userName="Parrot" text="I am parrot" />
      <MessageItem userName="Zebra" text="ZEEBRAAA" /> */}
    </div>
  )
}

function MessageItem(props) {
  console.log(props);
  const {userName, userImg, text} = props.messageData;
  // const userName = props.userName;
  // const text = props.text;

  const handleClick = (event) => {
    console.log("You like a post by "+userName);
  }

  return (
    <div className="message">
      <div>
        <img className="me-1" src={userImg} alt={userName+"'s avatar"} />
        <strong>{userName}</strong>
      </div>
      <p>{text}</p>
      <p>
        {/* button.addEventListener('click', whatToDoWhenClicked */}
        <button 
          className="btn btn-secondary"
          onClick={handleClick}
        >Like</button>
      </p>
    </div>
  )
}