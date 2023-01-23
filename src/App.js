import React from 'react'

function App() {
  return (
    <div>
      <h1 className="text-5xl font-bold underline text-center">
        HELLO TEAM FRONTEND!
      </h1>

      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          Things installed
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a href="/">TAILWIND</a>
          </li>
          <li>
            <a href="/">DAISY UI</a>
          </li>
          <li>
            <a href="/">REACT ICON</a>
          </li>
          <li>
            <a href="/">REACT ROUTER</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App
