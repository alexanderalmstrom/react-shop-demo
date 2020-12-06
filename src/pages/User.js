// import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { getUser } from "../lib/auth";
import styles from "./User.module.scss";

export const User = () => {
  // const { name } = useParams();

  const user = getUser();

  return (
    <Layout>
      <div className={styles.root}>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </div>
    </Layout>
  );
};

export default User;
