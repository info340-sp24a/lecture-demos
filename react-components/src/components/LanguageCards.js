export function CardList(props) {

  //what I have: [{}, {}, {}]
  const dataArray = [
    {"title": "Hypertext Markup Language", "img": "html-icon.png"},
    {"title": "Cascading Style Sheets", "img": "css-icon.png"},
    {"title": "JavaScript", "img": "js-icon.png"},
    {"title": "React", "img": "react-icon.png"},
    {"title": "Firebase", "img": "firebase-icon.png"},
    {"title": "Monkeys", "img": "..."}
  ]

  const cardArray = dataArray.map((langObj) => {
    if(langObj.title === "React"){
      return <LanguageCard language={langObj.title} imgUrl={"img/"+langObj.img} currentlyStudying={true}/>
    }

    const transformed = (
      <LanguageCard language={langObj.title} imgUrl={"img/"+langObj.img} currentlyStudying={langObj.title==="React"} />
    )

    return transformed;
  })



  //what I want: [<>, <>, <>]
  // const cardArray = [
  //   <LanguageCard language={dataArray[0].title} imgUrl="img/html-icon.png" />,
  //   <LanguageCard language={dataArray[1].title} imgUrl="img/css-icon.png" />,
  //   <LanguageCard language={dataArray[2].title} imgUrl="img/js-icon.png" />,
  //   <LanguageCard language="React" currentlyStudying={true} />,
  //   <LanguageCard language="Firebase" />  
  // ]

  return (
    <div id="all-cards" className="row">
      {cardArray}
    </div>
  )
}

function LanguageCard(props) {
  // console.log(props);
  
  // const language = props.language;
  // const imgUrl = props.imgUrl;
  // const currentlyStudying = props.currentlyStudying;
  const { language, imgUrl, currentlyStudying } = props

  //based on the props, what do I look like?
  let className = "card col-6 p-2"; 
  if(currentlyStudying){
    className += " bg-warning";
  }

  return (
    <div className={className}>
      <img src={imgUrl} alt="html 5 logo" />
      <h3>{language}</h3>
    </div>
  )
}