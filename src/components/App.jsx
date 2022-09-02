import React from "react";
import Login from "./login";
import Register from "./registered";
var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered === true ? <Register /> : <Login />}
    </div>
  );
}

export default App;
