import React, { useState, useEffect } from "react";
import { Button, notification, Select } from "antd";
//componente de riact router dom para saber en que pagina estoy en la paginacion que envia elbackend
import { withRouter } from "react-router-dom";
//importamos el modal para ejecutar cuando queramos agregar una nueva noticia
import Modal from "../../../components/Modal";
//nos sirve para resivir las paginaciones del backend
import queryString from "query-string";
//importamos los styles
import "../../../scss/Noticias.scss";
//importamos cconexion con api
import {
  getNoticiasHuilaApi,
  getNoticiasAgricolaApi,
  getNoticiasCaquetaApi,
  getNoticiasEquinaApi,
  getNoticiasInternacionalApi,
  getNoticiasNacionalApi,
  getNoticiasPutumayoApi,
  getNoticiasTendenciaApi,
  getNoticiasTolimaApi,
} from "../../../api/noticias";
//importamos el componente de listar lo consultado en el backend
import NoticiasList from "../../../components/Admin/Noticias/NoticiasList";
import Pagination from "../../../components/Pagination";
import AddEditNoticiasForm from "../../../components/Admin/Noticias/AddEditNoticiaForm";

//funcion inicial
function Noticias(props) {
  //un estado para reload se vuelva ajecutar el useefect
  const [reloadNoticia, setReloadNoticia] = useState(false);
  //estraesmos de props location que contien en que paginacion estoy y history
  const { location, history } = props;
  //creamos estados para el modal aparesca y desaparesca
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  //para guardar el titulo del modal y saber el estado
  const [modalTitle, setModalTitle] = useState("");
  //para el estado del contenido del modal
  const [modalContent, setModalContent] = useState(null);
  //para guardar en un estado el contenido que viene del backend
  const [noticias, setNoticias] = useState(null);
  //estado para conocer que item debemos consultar
  const [items, setItems] = useState("");
  //para estraer la paginacion
  const { page = 1 } = queryString.parse(location.search);
  //creamos la opciones que queremos cargar en una array
  const secciones = [
    { value: "huila", label: "Huila" },
    { value: "tolima", label: "Tolima" },
    { value: "caqueta", label: "Caqueta" },
    { value: "putumayo", label: "Putumayo" },
    { value: "equina", label: "Equina" },
    { value: "agricultura", label: "Agricultura" },
    { value: "nacional", label: "Nacional" },
    { value: "internacional", label: "Internacional" },
  ];

  useEffect(() => {
    if (items === "huila") {
      getNoticiasHuilaApi(6, page)
        .then((response) => {
          if (response?.code !== 200) {
            notification["warning"]({
              message: response.message,
            });
          } else {
            setNoticias(response.noticias);
          }
        })
        .catch(() => {
          notification["error"]({
            message: "Error del servidor.",
          });
        });
    } else {
      if (items === "caqueta") {
        getNoticiasCaquetaApi(6, page)
          .then((response) => {
            if (response?.code !== 200) {
              notification["warning"]({
                message: response.message,
              });
            } else {
              setNoticias(response.noticias);
            }
          })
          .catch(() => {
            notification["error"]({
              message: "Error del servidor.",
            });
          });
      } else {
        if (items === "putumayo") {
          getNoticiasPutumayoApi(6, page)
            .then((response) => {
              if (response?.code !== 200) {
                notification["warning"]({
                  message: response.message,
                });
              } else {
                setNoticias(response.noticias);
              }
            })
            .catch(() => {
              notification["error"]({
                message: "Error del servidor.",
              });
            });
        } else {
          if (items === "tolima") {
            getNoticiasTolimaApi(6, page)
              .then((response) => {
                if (response?.code !== 200) {
                  notification["warning"]({
                    message: response.message,
                  });
                } else {
                  setNoticias(response.noticias);
                }
              })
              .catch(() => {
                notification["error"]({
                  message: "Error del servidor.",
                });
              });
          } else {
            if (items === "tendencia") {
              getNoticiasTendenciaApi(6, page)
                .then((response) => {
                  if (response?.code !== 200) {
                    notification["warning"]({
                      message: response.message,
                    });
                  } else {
                    setNoticias(response.noticias);
                  }
                })
                .catch(() => {
                  notification["error"]({
                    message: "Error del servidor.",
                  });
                });
            } else {
              if (items === "internacional") {
                getNoticiasInternacionalApi(6, page)
                  .then((response) => {
                    if (response?.code !== 200) {
                      notification["warning"]({
                        message: response.message,
                      });
                    } else {
                      setNoticias(response.noticias);
                    }
                  })
                  .catch(() => {
                    notification["error"]({
                      message: "Error del servidor.",
                    });
                  });
              } else {
                if (items === "nacional") {
                  getNoticiasNacionalApi(6, page)
                    .then((response) => {
                      if (response?.code !== 200) {
                        notification["warning"]({
                          message: response.message,
                        });
                      } else {
                        setNoticias(response.noticias);
                      }
                    })
                    .catch(() => {
                      notification["error"]({
                        message: "Error del servidor.",
                      });
                    });
                } else if (items === "agricultura") {
                  getNoticiasAgricolaApi(6, page)
                    .then((response) => {
                      if (response?.code !== 200) {
                        notification["warning"]({
                          message: response.message,
                        });
                      } else {
                        setNoticias(response.noticias);
                      }
                    })
                    .catch(() => {
                      notification["error"]({
                        message: "Error del servidor.",
                      });
                    });
                } else if (items === "equina") {
                  getNoticiasEquinaApi(6, page)
                    .then((response) => {
                      if (response?.code !== 200) {
                        notification["warning"]({
                          message: response.message,
                        });
                      } else {
                        setNoticias(response.noticias);
                      }
                    })
                    .catch(() => {
                      notification["error"]({
                        message: "Error del servidor.",
                      });
                    });
                } else {
                  getNoticiasHuilaApi(6, page)
                    .then((response) => {
                      if (response?.code !== 200) {
                        notification["warning"]({
                          message: response.message,
                        });
                      } else {
                        setNoticias(response.noticias);
                      }
                    })
                    .catch(() => {
                      notification["error"]({
                        message: "Error del servidor.",
                      });
                    });
                }
              }
            }
          }
        }
      }
    }
    setReloadNoticia(false);
  }, [page, reloadNoticia, items]);

  //funcion agregar  noticia
  const addNoticia = () => {
    setIsVisibleModal(true);
    setModalTitle("Creando nueva noticia");
    setModalContent(
      <AddEditNoticiasForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadNoticia={setReloadNoticia}
        noticias={null}
      />
    );
  };

  //hacemos una validacion para comprovar si carga datos
  if (!noticias) {
    return null;
  }
  return (
    <div className="noticias">
      <Select
        style={{ width: 200 }}
        placeholder="Selecciona un Item"
        onChange={(e) => setItems(e)}
        options={secciones}
      />
      <div className="noticias__add-noticia">
        <Button type="primary" onClick={addNoticia}>
          Nueva Noticia
        </Button>
      </div>
      <NoticiasList noticias={noticias} setReloadNoticia={setReloadNoticia} />
      <Pagination noticias={noticias} location={location} history={history} />

      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
        width="75%"
      >
        {modalContent}
      </Modal>
    </div>
  );
}
//funcion inicial lo utilisamos con una funcion de oruter dom para saber en que paginacion estamos
export default withRouter(Noticias);
