import { useRef } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log(enteredEmail, enteredPassword);

    // NOTE: Be careful when using DOM Updating like this; 
    // Because not recommended this method for resetting to values.
    // email.current.value = '';
    // password.current.value = '';

    event.target.reset(); // This is imperative code again but you can write less code with this method.
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            autoComplete="off"
            ref={email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            autoComplete="off"
            ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
