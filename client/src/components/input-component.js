import React from 'react';

function Input({ action, inputValue, setInputValue, onInputChange }) {
  const handleChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
    onInputChange(e.target.value);
  };

  if (action) {
    action(inputValue);
  }

  return (
    <div className="">
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;
