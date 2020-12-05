import Layout from "../components/Layout";
import UserList from "../components/UserList";

import styles from "./Users.module.scss";

const Users = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <h1>Users</h1>
        <UserList />
      </div>
    </Layout>
  );
};

export default Users;
