import { HeaderComponent } from "./Header"
import { MessageItem } from "./Messages"

export function App(props){

  return (
    <>
      <HeaderComponent />
      <ul>
        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
      </ul>
    </>

  )
}
