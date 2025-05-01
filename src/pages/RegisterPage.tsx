import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<null | string>(null);

  const navigate = useNavigate();

  async function handleRegister() {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError(null);

    try {
      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate("/posts");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  return (
    <>
      <h1>Register</h1>
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
      <input
        type="password"
        placeholder="Confirm Password"
        required
        minLength={6}
        maxLength={20}
        pattern="[a-zA-Z0-9 ]+"
        title="Only letters and spaces are allowed"
        autoComplete="off"
        spellCheck="false"
        autoCapitalize="off"
        autoCorrect="off"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}/>
      <button onClick={handleRegister}>Register</button>
      <Link to="/login">Log In</Link>
    </>
  );
};

export default RegisterPage;
