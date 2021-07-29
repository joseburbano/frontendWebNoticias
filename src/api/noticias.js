import { basePath } from "./config";

//PETICIONES PARA CONSULTAR

//hacemos peticion de noticias Huila
export function getNoticiasHuilaApi(limit, page) {
  const url = `${basePath}/get-todos-huila?limit=${limit}&page=${page}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//hacemos peticion de noticias Tolima
export function getNoticiasTolimaApi(limit, page) {
  const url = `${basePath}/get-todos-tolima?limit=${limit}&page=${page}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//hacemos peticion de noticias Caqueta
export function getNoticiasCaquetaApi(limit, page) {
  const url = `${basePath}/get-todos-caqueta?limit=${limit}&page=${page}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//hacemos peticion de noticias Putumayo
export function getNoticiasPutumayoApi(limit, page) {
  const url = `${basePath}/get-todos-putumayo?limit=${limit}&page=${page}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//hacemos peticion de noticias Equina
export function getNoticiasEquinaApi(limit, page) {
  const url = `${basePath}/get-todos-equina?limit=${limit}&page=${page}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//hacemos peticion de noticias agricola
export function getNoticiasAgricolaApi(limit, page) {
  const url = `${basePath}/get-todos-agricola?limit=${limit}&page=${page}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//hacemos peticion de noticias Tendencia
export function getNoticiasTendenciaApi(limit, page) {
  const url = `${basePath}/get-todos-tendencia?limit=${limit}&page=${page}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//hacemos peticion de noticias Nacional
export function getNoticiasNacionalApi(limit, page) {
  const url = `${basePath}/get-todos-nacional?limit=${limit}&page=${page}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//hacemos peticion de noticias Internacional
export function getNoticiasInternacionalApi(limit, page) {
  const url = `${basePath}/get-todos-internacional?limit=${limit}&page=${page}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//PETICIONES PARA ELIMINAR

//hacemos peticion para elmiminar en el huila
export function deleteHuilaApi(token, id) {
  const url = `${basePath}/delete-huila/${id}`;
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
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//hacemos peticion para elmiminar en el caqueta
export function deleteCaquetaApi(token, id) {
  const url = `${basePath}/delete-caqueta/${id}`;
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
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//hacemos peticion para elmiminar en el putumayo
export function deletePutumayoApi(token, id) {
  const url = `${basePath}/delete-putumayo/${id}`;
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
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//hacemos peticion para elmiminar en el tolima
export function deleteTolimaApi(token, id) {
  const url = `${basePath}/delete-tolima/${id}`;
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
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//hacemos peticion para elmiminar en el tendencia
export function deleteTendenciaApi(token, id) {
  const url = `${basePath}/delete-tendencia/${id}`;
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
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//hacemos peticion para elmiminar en el equina
export function deleteEquinaApi(token, id) {
  const url = `${basePath}/delete-equina/${id}`;
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
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//hacemos peticion para elmiminar en el agricola
export function deleteAgricolaApi(token, id) {
  const url = `${basePath}/delete-agricola/${id}`;
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
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//hacemos peticion para elmiminar en el internacional
export function deleteInternacionalApi(token, id) {
  const url = `${basePath}/delete-internacional/${id}`;
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
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//hacemos peticion para elmiminar en el nacional
export function deleteNacionalApi(token, id) {
  const url = `${basePath}/delete-nacional/${id}`;
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
      return result;
    })
    .catch((err) => {
      return err;
    });
}

//PETICIONES PARA AGREGAR NOTICIAS

//peticion para agregar noticias al backend
export function addNoticiaApi(token, noticias) {
  const url = `${basePath}/add-noticias`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(noticias),
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err;
    });
}
