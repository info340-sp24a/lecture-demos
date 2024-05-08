import React, {useState} from 'react';

export function ComposeForm(props) {

  const { howToAddMessage } = props;

  const [typedText, setTypedText] = useState('')
  console.log(typedText);

  const handleChange = (event) => {
    const triedToChange = event.target.value;
    setTypedText(triedToChange);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit", typedText);
    howToAddMessage("Parrot", typedText, "general");
    setTypedText('');
  }

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        <textarea className="form-control" rows="2"   
          placeholder="Type a new message" 
          value={typedText}
          onChange={handleChange}
        ></textarea>
        <button className="btn btn-secondary" type="submit">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}