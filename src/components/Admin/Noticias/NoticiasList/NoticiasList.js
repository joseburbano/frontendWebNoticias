import React from "react";
//importamos la coenccion al backen primero accestoken
import { getAccessTokenApi } from "../../../../api/auth";
//importamos la funcion para consultar la api
import {
  deleteHuilaApi,
  deleteAgricolaApi,
  deleteCaquetaApi,
  deleteEquinaApi,
  deleteInternacionalApi,
  deleteNacionalApi,
  deletePutumayoApi,
  deleteTendenciaApi,
  deleteTolimaApi,
} from "../../../../api/noticias";
//importamos de la libreria antd
import { List, Button, Modal, notification } from "antd";
//importamos los iconos de la libreria antd
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
//importamos react router dom para volver dinamica la pagina cuando la subamosno se quede con el localhost
import { Link } from "react-router-dom";
//importamos estilos
import "../../../../scss/NoticiasList.scss";
//de la libreria antd que tiene Modal extraemos la funcion confirm para que nos salga notificacion con modal
const { confirm } = Modal;

export default function NoticiasList(props) {
  //traemos por props la listas que vienen del backen con las noticias
  const { noticias, setReloadNoticia } = props;
  //crear funcion que se ocupa de eliminar noticias
  const deleteNoticia = (noticia) => {
    const accessToken = getAccessTokenApi();
    if (noticia.options === "Huila") {
      confirm({
        title: "Eliminando Noticia",
        content: `¿Estas seguro de eliminar la noticia ${noticia.tituloPrincipal}?`,
        okText: "Eliminar",
        okType: "danger",
        cancelText: "Cancelar",
        onOk() {
          deleteHuilaApi(accessToken, noticia._id)
            .then((response) => {
              const typeNotification =
                response.code === 200 ? "success" : "warning";
              notification[typeNotification]({
                message: response.message,
              });
              setReloadNoticia(true);
            })
            .catch(() => {
              notification["error"]({
                message: "Error del servidor.",
              });
            });
        },
      });
    } else {
      if (noticia.options === "Caqueta") {
        confirm({
          title: "Eliminando Noticia",
          content: `¿Estas seguro de eliminar la noticia ${noticia.tituloPrincipal}?`,
          okText: "Eliminar",
          okType: "danger",
          cancelText: "Cancelar",
          onOk() {
            deleteCaquetaApi(accessToken, noticia._id)
              .then((response) => {
                const typeNotification =
                  response.code === 200 ? "success" : "warning";
                notification[typeNotification]({
                  message: response.message,
                });
                setReloadNoticia(true);
              })
              .catch(() => {
                notification["error"]({
                  message: "Error del servidor.",
                });
              });
          },
        });
      } else {
        if (noticia.options === "Putumayo") {
          confirm({
            title: "Eliminando Noticia",
            content: `¿Estas seguro de eliminar la noticia ${noticia.tituloPrincipal}?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk() {
              deletePutumayoApi(accessToken, noticia._id)
                .then((response) => {
                  const typeNotification =
                    response.code === 200 ? "success" : "warning";
                  notification[typeNotification]({
                    message: response.message,
                  });
                  setReloadNoticia(true);
                })
                .catch(() => {
                  notification["error"]({
                    message: "Error del servidor.",
                  });
                });
            },
          });
        } else {
          if (noticia.options === "Tolima") {
            confirm({
              title: "Eliminando Noticia",
              content: `¿Estas seguro de eliminar la noticia ${noticia.tituloPrincipal}?`,
              okText: "Eliminar",
              okType: "danger",
              cancelText: "Cancelar",
              onOk() {
                deleteTolimaApi(accessToken, noticia._id)
                  .then((response) => {
                    const typeNotification =
                      response.code === 200 ? "success" : "warning";
                    notification[typeNotification]({
                      message: response.message,
                    });
                    setReloadNoticia(true);
                  })
                  .catch(() => {
                    notification["error"]({
                      message: "Error del servidor.",
                    });
                  });
              },
            });
          } else {
            if (noticia.options === "Tendencia") {
              confirm({
                title: "Eliminando Noticia",
                content: `¿Estas seguro de eliminar la noticia ${noticia.tituloPrincipal}?`,
                okText: "Eliminar",
                okType: "danger",
                cancelText: "Cancelar",
                onOk() {
                  deleteTendenciaApi(accessToken, noticia._id)
                    .then((response) => {
                      const typeNotification =
                        response.code === 200 ? "success" : "warning";
                      notification[typeNotification]({
                        message: response.message,
                      });
                      setReloadNoticia(true);
                    })
                    .catch(() => {
                      notification["error"]({
                        message: "Error del servidor.",
                      });
                    });
                },
              });
            } else {
              if (noticia.options === "Internacional") {
                confirm({
                  title: "Eliminando Noticia",
                  content: `¿Estas seguro de eliminar la noticia ${noticia.tituloPrincipal}?`,
                  okText: "Eliminar",
                  okType: "danger",
                  cancelText: "Cancelar",
                  onOk() {
                    deleteInternacionalApi(accessToken, noticia._id)
                      .then((response) => {
                        const typeNotification =
                          response.code === 200 ? "success" : "warning";
                        notification[typeNotification]({
                          message: response.message,
                        });
                        setReloadNoticia(true);
                      })
                      .catch(() => {
                        notification["error"]({
                          message: "Error del servidor.",
                        });
                      });
                  },
                });
              } else {
                if (noticia.options === "Nacional") {
                  confirm({
                    title: "Eliminando Noticia",
                    content: `¿Estas seguro de eliminar la noticia ${noticia.tituloPrincipal}?`,
                    okText: "Eliminar",
                    okType: "danger",
                    cancelText: "Cancelar",
                    onOk() {
                      deleteNacionalApi(accessToken, noticia._id)
                        .then((response) => {
                          const typeNotification =
                            response.code === 200 ? "success" : "warning";
                          notification[typeNotification]({
                            message: response.message,
                          });
                          setReloadNoticia(true);
                        })
                        .catch(() => {
                          notification["error"]({
                            message: "Error del servidor.",
                          });
                        });
                    },
                  });
                } else if (noticia.options === "Agricola") {
                  confirm({
                    title: "Eliminando Noticia",
                    content: `¿Estas seguro de eliminar la noticia ${noticia.tituloPrincipal}?`,
                    okText: "Eliminar",
                    okType: "danger",
                    cancelText: "Cancelar",
                    onOk() {
                      deleteAgricolaApi(accessToken, noticia._id)
                        .then((response) => {
                          const typeNotification =
                            response.code === 200 ? "success" : "warning";
                          notification[typeNotification]({
                            message: response.message,
                          });
                          setReloadNoticia(true);
                        })
                        .catch(() => {
                          notification["error"]({
                            message: "Error del servidor.",
                          });
                        });
                    },
                  });
                } else if (noticia.options === "Equina") {
                  confirm({
                    title: "Eliminando Noticia",
                    content: `¿Estas seguro de eliminar la noticia ${noticia.tituloPrincipal}?`,
                    okText: "Eliminar",
                    okType: "danger",
                    cancelText: "Cancelar",
                    onOk() {
                      deleteEquinaApi(accessToken, noticia._id)
                        .then((response) => {
                          const typeNotification =
                            response.code === 200 ? "success" : "warning";
                          notification[typeNotification]({
                            message: response.message,
                          });
                          setReloadNoticia(true);
                        })
                        .catch(() => {
                          notification["error"]({
                            message: "Error del servidor.",
                          });
                        });
                    },
                  });
                } else {
                  confirm({
                    title: "No as seleccional nunguna notica",
                    okText: "Cerrar",
                    okType: "danger",
                    cancelText: "Cerrar",
                  });
                }
              }
            }
          }
        }
      }
    }
  };
  return (
    <div className="noticias-list">
      <List
        dataSource={noticias.docs}
        renderItem={(noticia) => (
          <Noticia noticia={noticia} deleteNoticia={deleteNoticia} />
        )}
      />
    </div>
  );
}

function Noticia(props) {
  const { noticia, deleteNoticia } = props;

  return (
    <List.Item
      actions={[
        <Link to={`/noticias/${noticia.url}`} target="_blank">
          <Button type="primary">
            <EyeOutlined />
          </Button>
        </Link>,
        <Button type="primary">
          <EditOutlined />
        </Button>,
        <Button type="danger" onClick={() => deleteNoticia(noticia)}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta title={noticia.tituloPrincipal} />
    </List.Item>
  );
}
