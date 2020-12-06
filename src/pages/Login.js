import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import styles from "./Login.module.scss";
import Layout from "../components/Layout";
import { LOGIN_USER } from "../graphql/users";
import { isLoggedIn, getRoute, setToken, setUser } from "../lib/auth";

const Auth = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [loginUser, { loading, error, data = {} }] = useMutation(LOGIN_USER);

  if (isLoggedIn()) history.push(getRoute());

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    try {
      await loginUser({
        variables: {
          email,
          password,
        },
      });

      setMessage("Login successful!");
    } catch (err) {
      console.error(err);

      setMessage("Login failed.");
    }
  };

  useEffect(() => {
    if (data.loginUser) {
      const { token, user } = data.loginUser;

      setEmail("");
      setPassword("");

      setToken(token);
      setUser(user);
    }
  }, [data.loginUser]);

  return (
    <Layout>
      <form method="post" className={styles.root}>
        <h1 className={styles.heading}>Login</h1>
        <input
          className={styles.input}
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <button
          className={styles.submit}
          type="submit"
          onClick={handleSubmit}
          disabled={email.length < 1 || password.length < 1}
        >
          Login
        </button>
        {loading && <p>Loading...</p>}
        {message && <p>{message}</p>}
        {error && <p>{JSON.stringify(error, null, 2)}</p>}
      </form>
    </Layout>
  );
};

export default Auth;
