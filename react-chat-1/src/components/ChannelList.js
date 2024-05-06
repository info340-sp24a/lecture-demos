
export function ChannelList(props) {

  //temp constant ['','','']
  const CHANNEL_NAMES = ['general', 'social', 'random', 'birds', 'channel-5'];

  const elemArray = CHANNEL_NAMES.map((channelString) => {
    const transformed = (
      <li key={channelString}>
        <a className="text-white" href={"/"+channelString}>{channelString}</a>
      </li>
    )
    return transformed;
  })

  //want: [<>,<>,<>]
  // const elemArray = [
  //   <li>general</li>,
  //   <li>social</li>,
  //   <li>randon</li>,
  //   <li>dogs</li>
  // ]

  //delete li # 3
  //rename li # 3


  return (
    <nav className="bg-secondary text-white px-0 pe-3 py-3">
      <ul>
        {elemArray}
      </ul>
    </nav>
  )
}