import data from "./data";
import React, { useState } from "react";
import RenderEmail from "./components/RenderEmail";

function App() {
  const [useEmails, setEmails] = useState(data)
  return (
    <div className="App">
      <h1>{JSON.stringify(useEmails)}</h1>
      {useEmails.map((email) => (
        <span>
          {email.id}
          {email.title}
          {email.status}
          <button onClick={setEmails(email.id = 1)}>Marcar como lida</button>
          <br />
        </span>
      ))}

    </div>
  );
}

export default App;
