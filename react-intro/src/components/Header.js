export function HeaderComponent(props){
  const msgText = ("Hello React")
  console.log("rendering Header");

  return (
    <header>
      <h1>{msgText.toUpperCase()+"!!"}</h1>
      <p>Isn't React Awesome?</p>
    </header>
  )
}
