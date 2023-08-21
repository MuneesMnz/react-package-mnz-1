import React from "react";
import { render } from "react-dom";
import { TextInput } from "./lib";

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <TextInput label={"email"} placeholder={"Email address"} type="email" />
      <TextInput label={"password"} placeholder={"Password"} type="password" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
