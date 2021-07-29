import { basePath } from "./config";

//consultar la api los menus
export function getSubMenuApi() {
  const url = `${basePath}/get-sub-menus`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}

//funcion para aptualizar menu
export function updateSubMenuApi(token, subMenuId, data) {
  const url = `${basePath}/update-sub-menu/${subMenuId}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(data),
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result.message;
    })
    .catch((err) => {
      return err;
    });
}
//funcionn pzara activar menu
export function activateSubMenuApi(token, subMenuId, status) {
  const url = `${basePath}/activate-sub-menu/${subMenuId}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ active: status }),
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result.message;
    })
    .catch((err) => {
      return err;
    });
}

//funcion para crear nuevo menu
export function addSubMenuApi(token, subMenu) {
  const url = `${basePath}/add-sub-menu`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(subMenu),
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result.message;
    })
    .catch((err) => {
      return err;
    });
}

export function deleteSubMenuApi(token, subMenuId) {
  const url = `${basePath}/delete-sub-menu/${subMenuId}`;

  const params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result.message;
    })
    .catch((err) => {
      return err;
    });
}
