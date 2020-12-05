import { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import styles from "./Auth.module.scss";
import Layout from "../components/Layout";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [loginUser, { loading, error, data = {} }] = useMutation(gql`
    mutation LoginUser($email: String!, $password: String!) {
      loginUser(data: { email: $email, password: $password }) {
        token
        user {
          _id
          name
          email
          role
        }
      }
    }
  `);

  useEffect(() => {
    if (data.loginUser) {
      console.log(data.loginUser);

      setEmail("");
      setPassword("");

      setMessage(data.loginUser);
    }
  }, [data.loginUser]);

  useEffect(() => {
    if (error) {
      setMessage(error);
    }
  }, [error]);

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
          onClick={async (e) => {
            e.preventDefault();

            setMessage("");

            try {
              await loginUser({ variables: { email, password } });
            } catch (err) {
              console.error(err);
            }
          }}
          disabled={email.length < 1 || password.length < 1}
        >
          Login
        </button>
        {loading && <p>Loading...</p>}
        {message && (
          <pre className={styles.message}>
            {JSON.stringify(message, null, 2)}
          </pre>
        )}
      </form>
    </Layout>
  );
};

export default Auth;
