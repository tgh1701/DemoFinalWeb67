import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {username, password});
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{
          padding: 10,
          marginBottom: 20,
        }}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
      />
      <input
        style={{
          padding: 10,
          marginBottom: 20,
        }}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
