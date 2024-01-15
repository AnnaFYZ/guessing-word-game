// import "./App.css";
import {useState} from 'react';


function Input({action}) {
  const [inputValue, setInputValue] = useState("");
  if (action) {
    action(inputValue);
  };

  return (
    <div className="input">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
