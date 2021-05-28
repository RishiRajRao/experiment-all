import React from 'react';

function App6() {
  let inputValue = React.createRef();
 
  let handleSubmit = e => {
    alert(`Input value: ${inputValue.current.value}`);
    e.preventDefault();
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputValue} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
 }

 export default App6;

 //For creating a reference instead of making a controlled component.