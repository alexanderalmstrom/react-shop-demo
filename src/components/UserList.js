import { useQuery } from "@apollo/client";
import { USERS_QUERY } from "../graphql/users";

const UserList = () => {
  const { loading, error, data: users } = useQuery(USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {users?.allUsers?.data.map((user) => {
        return (
          <div key={user.email}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        );
      })}
    </>
  );
};

export default UserList;
