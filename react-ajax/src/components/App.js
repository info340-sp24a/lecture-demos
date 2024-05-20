import React, { useState, useEffect } from 'react';

//example GitHub repo data
const EXAMPLE_DATA = [
  { full_name: "(example) react", html_url: "https://github.com/facebook/react" },
  { full_name: "(example) react-bootstrap", html_url: "https://github.com/react-bootstrap/react-bootstrap" },    
  { full_name: "(example) react-router", html_url: "https://github.com/remix-run/react-router" }
];


function App(props) {
  const { initialSearch } = props;
  const [stateData, setStateData] = useState(EXAMPLE_DATA);
  //control form

  const [errorMessage, setErrorMessage] = useState('');

  const [queryInput, setQueryInput] = useState('bootstrap');

  useEffect(() => {
    console.log("running effect hook");
    //do stuff with side effect
    const URL = "https://api.github.com/search/repositories"+"?q="+initialSearch;
    fetch(URL)
    .then((response) => {
      const encodingBuzzer = response.json(); //encodes the body
      return encodingBuzzer;
    })
    .then((data) => {
      const repoArray = data.items;
      setStateData(repoArray);
  
      //NOW I have the data I wanted
    })
    .catch((err) => {
      setErrorMessage('error');
    })

  

  }, [])






  const handleChange = (event) => {
    setQueryInput(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    //do something with form input!

    const URL = "https://api.github.com/search/repositories"+"?q="+queryInput;

    console.log("about to request")

    fetch(URL)
      .then((response) => {
        const encodingBuzzer = response.json(); //encodes the body
        return encodingBuzzer;
      })
      .then((data) => {
        console.log(data);
        const repoArray = data.items;
        setStateData(repoArray);

        //NOW I have the data I wanted
      })

    // const response = await fetch(URL);
    // const data = await response.json();
    // console.log(data);


  }


  //render the data
  const dataElemArray = stateData.map((repo) => {
    return <li key={repo.html_url}><a href={repo.html_url}>{repo.full_name}</a></li>
  })

  console.log("rendering content");

  return (
    <div className="container">
      <header><h1>AJAX Demo</h1></header> 

      <p>{errorMessage}</p>

      <form method="GET" action="https://api.github.com/search/repositories" onSubmit={handleSubmit}> 
        <input type="text" className="form-control mb-2" 
          name="q"
          placeholder="Search Github for..."
          value={queryInput} onChange={handleChange}
        />
        <input type="hidden" name="sort" value="stars" />
        <button type="submit" className="btn btn-primary">Search!</button>
      </form>

      <div className="mt-4">
        <h2>Results</h2>
        {/* results go here */}
        {dataElemArray}
      </div>
    </div>
  )
}

export default App;