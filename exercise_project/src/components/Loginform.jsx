import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value)
  };

  const handlePassword = (event) => {
    setPassword(event.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="username" onInput={handleUsername} value={username} id="username" name="username" placeholder="inserisci username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" onInput={handlePassword} value={password} id="password" name="password" placeholder="inserisci password" />
      </div>
      <button type="submit">Login</button>
    </form>
  )
};



export default LoginForm