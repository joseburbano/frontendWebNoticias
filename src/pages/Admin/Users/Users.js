import React, { useState, useEffect } from "react";
import { getAccessTokenApi } from "../../../api/auth";
import { getUsersActiveApi } from "../../../api/user";
//importar componente
import ListUsers from "../../../components/Admin/Users/ListUsers";

import "../../../scss/Users.scss";

export default function Users() {
  const [usersActive, setUsersActive] = useState([]);
  const [usersInactive, setUsersInactive] = useState([]);
  //estado para refrecar componente y me actualice automaticamente
  const [reloadUsers, setReloadUsers] = useState(false);
  const token = getAccessTokenApi();
  //extraer los usuarios del api al frond activos y inactivos
  useEffect(() => {
    getUsersActiveApi(token, true).then((response) => {
      //console.log(response);
      setUsersActive(response.users);
    });
    getUsersActiveApi(token, false).then((response) => {
      //console.log(response);
      setUsersInactive(response.users);
    });
    setReloadUsers(false);
  }, [token, reloadUsers]);
  return (
    <div className="users">
      <ListUsers
        usersActive={usersActive}
        usersInactive={usersInactive}
        setReloadUsers={setReloadUsers}
      />
    </div>
  );
}
