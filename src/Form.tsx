import React, { useRef } from "react";

interface State {
  email: string;
  password: string;
}
function Form() {
  let [state, setState] = React.useState<State>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    console.log(state);
  };
  const textInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("State is :", state.password);
    fetch("/login", {
      method: "POST",
      body: JSON.stringify({ state }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={state.email}
        onChange={handleChange}
        //  ref={textInputRef}
      />
      <br></br>
      <label>Password:</label>
      <input
        type="text"
        name="password"
        value={state.password}
        onChange={handleChange}
        //  ref={passwordInputRef}
      />
      <br></br>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
