import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

function UserView() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>List of user</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error:{user.error}</div> : null}
      {!user.loading && user.user.length ? (
        <ul>
          {user.user.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default UserView;
