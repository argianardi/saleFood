import './styles/App.css';
import React from 'react';

function App() {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">
        Click
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a href="/">Item 1</a>
        </li>
        <li>
          <a href="/">Item 2</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
