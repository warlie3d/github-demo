import { useState } from "react";

function Input({ setUser }) {
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = encodeURI(`https://api.github.com/users/${username}`); // naaltunian
    const response = await fetch(url);
    const data = await response.json();
    setUsername("");
    setUser(data);
  };

  const clear = () => {
    setUsername("");
    setUser(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={username}onChange={(e) => setUsername(e.target.value)}placeholder="username"
        />
        <input type="submit" />
      </form>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default Input;
