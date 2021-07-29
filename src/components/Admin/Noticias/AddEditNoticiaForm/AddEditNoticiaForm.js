import React, { useState, useEffect } from "react";
//importamos de la libreria antd
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  DatePicker,
  notification,
  Select,
} from "antd";
//importamos los iconos de la libreria antd
import {
  FontSizeOutlined,
  LinkOutlined,
} from "@ant-design/icons";
//importamos moent
import moment from "moment";
//importamos ela breria de editor tinymce
import { Editor } from "@tinymce/tinymce-react";
//importamos el accestoken
import { getAccessTokenApi } from "../../../../api/auth";
//importamos la peticion para agregar al backend
import { addNoticiaApi } from "../../../../api/noticias";
//importamos lso estilos
import "./AddEditNoticiasForms.scss";
import Noticias from "../../../../pages/Admin/Noticias/Noticias";
//funcion principal
export default function AddEditNoticiaForm(props) {
  //importamos props
  const { setIsVisibleModal, setReloadNoticia, noticias } = props;
  //creamos un estado para noticias
  const [noticiaData, setNoticiaData] = useState({});
  //creamos un useefect para comprobar si hay datos para cargar o nos da datos vacios
  useEffect(() => {
    if (noticias) {
      setNoticiaData(noticias);
    } else {
      setNoticiaData({});
    }
  }, [noticias]);
  //creamos la funcion para comprobar para que es agregar la noticias o editarlas
  const processNoticia = (e) => {
    e.preventDefault();
    //aca miramos  que datoos hay
    const {
      tituloPrincipal,
      description,
      fotografia,
      autor,
      contenidoOne,
      imagenOne,
      contenidoTwo,
      imagenTwo,
      contenidoThree,
      fecha,
      options,
    } = noticiaData;

    //aca comprobemos que el fomulario este completo
    if (
      !tituloPrincipal ||
      !description ||
      fotografia ||
      !autor ||
      !contenidoOne ||
      imagenOne ||
      !contenidoTwo ||
      imagenTwo ||
      !contenidoThree ||
      !fecha ||
      !options
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      if (!noticias) {
        addNoti();
        console.log("Creando Noticias");
        console.log(noticiaData);
      } else {
        console.log("Editando noticias");
        console.log(noticiaData);
      }
    }
  };

  //creamos una nueva funcion para crear noticias
  const addNoti = () => {
    const token = getAccessTokenApi();

    addNoticiaApi(token, noticiaData)
      .then((response) => {
        const typeNotification = response.code === 200 ? "success" : "warning";
        notification[typeNotification]({
          message: response.message,
        });
        setIsVisibleModal(false);
        setReloadNoticia(true);
        setNoticiaData({});
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor.",
        });
      });
  };

  return (
    <div className="add-edit-noticia-form">
      <AddEditForm
        noticiaData={noticiaData}
        setNoticiaData={setNoticiaData}
        noticias={noticias}
        processNoticia={processNoticia}
      />
    </div>
  );
}

function AddEditForm(props) {

  const { Option } = Select;
  //extraemos los props
  const { noticiaData, setNoticiaData, noticias, processNoticia } = props;
  return (
    <Form
      className="add-edit-noticia-form"
      layout="inline"
      onSubmit={processNoticia}
    >
      <Row>
        <Col span={8}>
          <Input
            prefix={<FontSizeOutlined />}
            placeholder="Titulo"
            value={noticiaData.tituloPrincipal}
            onChange={(e) =>
              setNoticiaData({
                ...noticiaData,
                tituloPrincipal: e.target.value,
              })
            }
          />
        </Col>
        <Col span={8}>
          <DatePicker
            style={{ width: "100%" }}
            format="DD/MM/YYYY HH:mm:ss"
            prefix={<LinkOutlined />}
            placeholder="Fecha de publicación"
            showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
            value={noticiaData.date && moment(noticiaData.date)}
            onChange={(e, value) =>
              setNoticiaData({
                ...noticiaData,
                date: moment(value, "DD/MM/YYYY HH:mm:ss").toISOString(),
              })
            }
          />
        </Col>
        <Col span={8}>
          <Select
            placeholder="Selecciona donde es la noticia"
            onChange={(e) =>
              setNoticiaData({
                ...noticiaData,
                options: e.target.value,
              })
            }
            value={noticiaData.options}
          >
            <Option value="Huila">Huila</Option>
            <Option value="Caqueta">Caqueta</Option>
            <Option value="Putumayo">Putumayo</Option>
            <Option value="Tolima">Tolima</Option>
            <Option value="Tendencia">Tendencia</Option>
            <Option value="Agricola">Agricola</Option>
            <Option value="Equina">Equina</Option>
            <Option value="Nacional">Nacional</Option>
            <Option value="Internacional">Internacional</Option>
          </Select>
        </Col>
        <Col span={8}>
          <Input
            prefix={<FontSizeOutlined />}
            placeholder="Autor periodista o autor de foto"
            value={noticiaData.autor}
            onChange={(e) =>
              setNoticiaData({
                ...noticiaData,
                autor: e.target.value,
              })
            }
          />
        </Col>
      </Row>
      <h3>DESCRIBE LA NOTICIA CORTA</h3>
      <Editor
        value={noticiaData.detalle ? noticiaData.detalle : ""}
        init={{
          height: 400,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
        }}
        onBlur={(e) =>
          setNoticiaData({ ...noticiaData, detalle: e.target.getContent() })
        }
      />
      <h3>REDACTAR NOTICIA UNO</h3>
      <Editor
        value={noticiaData.contenidoOne ? noticiaData.contenidoOne : ""}
        init={{
          height: 400,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
        }}
        onBlur={(e) =>
          setNoticiaData({
            ...noticiaData,
            contenidoOne: e.target.getContent(),
          })
        }
      />
      <h3>REDACTAR NOTICIA DOS</h3>
      <Editor
        value={noticiaData.contenidoTwo ? noticiaData.contenidoTwo : ""}
        init={{
          height: 400,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
        }}
        onBlur={(e) =>
          setNoticiaData({
            ...noticiaData,
            contenidoTwo: e.target.getContent(),
          })
        }
      />
      <h3>REDACTAR NOTICIA TRES</h3>
      <Editor
        value={noticiaData.contenidoThree ? noticiaData.contenidoThree : ""}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
        }}
        onBlur={(e) =>
          setNoticiaData({
            ...noticiaData,
            contenidoThree: e.target.getContent(),
          })
        }
      />
      <Button
        type="primary"
        htmlType="submit"
        className="btn-submit"
        onClick={processNoticia}
      >
        {noticias ? "Actualizar Noticia" : "Crear Noticia"}
      </Button>
    </Form>
  );
}
