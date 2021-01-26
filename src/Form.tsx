import React from "react";

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
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      " Your email is: " +
        state.email +
        " and your password is: " +
        state.password
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="text"
        name="email"
        value={state.email}
        onChange={handleChange}
        defaultValue={state.email}
      />
      <br></br>
      <label>Password:</label>
      <input
        type="text"
        name="password"
        value={state.password}
        onChange={handleChange}
        defaultValue={state.password}
      />
      <br></br>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
