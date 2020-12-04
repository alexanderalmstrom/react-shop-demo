import Layout from "./Layout";
import UserList from "./UserList";

import styles from "./Users.module.scss";

const Users = () => {
  return (
    <Layout>
      <div className={styles.root}>
        <UserList />
      </div>
    </Layout>
  );
};

export default Users;
