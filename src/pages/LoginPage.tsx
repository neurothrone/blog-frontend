import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<null | string>(null);

  const navigate = useNavigate();

  async function handleLogin() {
    setError(null);

    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/posts");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  return (
    <>
      <h1>Log In</h1>
      {error && <p>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        required
        autoFocus
        autoComplete="off"
        spellCheck="false"
        autoCapitalize="off"
        autoCorrect="off"
        pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*"
        title="Enter a valid email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
      <input
        type="password"
        placeholder="Password"
        required
        minLength={6}
        maxLength={20}
        pattern="[a-zA-Z0-9 ]+"
        title="Only letters and spaces are allowed"
        autoComplete="off"
        spellCheck="false"
        autoCapitalize="off"
        autoCorrect="off"
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleLogin}>Log In</button>
      <Link to="/register">Register</Link>
    </>
  );
};

export default LoginPage;
