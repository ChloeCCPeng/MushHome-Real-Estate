import React, { useState, useContext } from "react";
import { Button, Error, Input, FormField, Label } from "../styles";
import { Link, useNavigate } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { UserContext } from './UserContext';


function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useContext (UserContext)
  const { setCurrentUser } = useContext (UserContext)

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    console.log('handleSubmit')
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
        console.log("logged in");
        navigate("/")
      })
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleLoginClick(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then((res) => {
      if (res.ok) {
        res.json().then((currentUser) => setCurrentUser(currentUser))
      } else alert("Invalid login. Please try again.")
    })
  }

  return (
    <>
      <NavBar handleLoginClick={handleLoginClick}/>
      <form onSubmit={handleSubmit} >
        <FormField>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            class="text-black"
          />
        </FormField>
        <FormField>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            class="text-black"
          />
        </FormField>
        <FormField>
          <Button variant="fill" color="primary" type="submit">
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </FormField>
        <FormField class="text-black">
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField>
      </form>

    </>
  );
}

export default LoginForm;