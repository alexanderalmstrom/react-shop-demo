import { useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import styles from "./Auth.module.scss";
import Layout from "./Layout";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [loginUser, { loading, error, data = {} }] = useMutation(gql`
    mutation LoginUser($email: String!, $password: String!) {
      loginUser(data: { email: $email, password: $password }) {
        token
        user {
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
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="text"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          onClick={async (e) => {
            e.preventDefault();

            setMessage("");

            try {
              await loginUser({ variables: { email, password } });
            } catch (err) {
              console.error(err);
            }
          }}
        >
          Login
        </button>
        {loading && <p>Loading...</p>}
        {message && <pre>{JSON.stringify(message, null, 2)}</pre>}
      </form>
    </Layout>
  );
};

export default Auth;
