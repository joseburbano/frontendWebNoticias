import { basePath } from "./config";

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
