import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { USER_TYPE_1, USER_TYPE_2 } from "../graphQl/Query";

function User() {
  let [userList, setUserList] = useState([]);
  let { data, error, loading } = useQuery(USER_TYPE_1);

  useEffect(() => {
    // on mount i want call server data
    if (data !== undefined) {
      setUserList(data.getUserList);
    }
  }, [data]);
  return (
    <>
      <table border={1} width="100%" cellSpacing={0} cellPadding={10}>
        <thead>
          <tr>
            <th width="10%">Sr No</th>
            <th width="50%">Name</th>
            <th width="15%">Gender</th>
            <th width="25%">Email</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {user.first_name} {user.last_name}
                </td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default User;
