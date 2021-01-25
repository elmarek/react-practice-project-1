import React from "react";

interface State {
  name: string;
  email: string;
  password: string;
}
function Form() {
  let [state, setState] = React.useState<State>({
    name: "",
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
      `Your name is: ` +
        state.name +
        " Your email is: " +
        state.email +
        " and your password is: " +
        state.password
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        defaultValue={state.name}
      />

      <br></br>
      <label>Email:</label>
      <input type="text" name="email" value={state.email} />
      <br></br>
      <label>Password:</label>
      <input type="text" name="password" value={state.password} />
      <br></br>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
