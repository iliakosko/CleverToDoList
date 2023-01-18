import React, {  useContext } from "react";


import { TodoContext } from "../context";

function Login(){

const {errorMessages, setErrorMessages} = useContext(TodoContext);
const {setIsSubmitted } = useContext(TodoContext);

const database = [
  {
    username: "user",
    password: "password"
  }
];

const errors = {
  uname: "invalid username",
  pass: "invalid password"
};

const handleSubmit = (event) => {
  event.preventDefault();
  let { uname, pass } = document.forms[0];
  const userData = database.find((user) => user.username === uname.value);

  if (userData) {
    if (userData.password !== pass.value) {
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      setIsSubmitted(true);
    }
  } else {
    setErrorMessages({ name: "uname", message: errors.uname });
  }
};

const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

return (
  <div className="Login">
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
  </div>
);
}


export default Login;