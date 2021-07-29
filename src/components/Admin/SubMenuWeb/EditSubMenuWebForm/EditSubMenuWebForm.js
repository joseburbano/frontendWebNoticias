import React, { useState, useEffect } from "react";
import { Form, Input, Button, notification } from "antd";
import { LinkOutlined, FontSizeOutlined } from "@ant-design/icons";

//importamos conexion api
import { updateSubMenuApi } from "../../../../api/submenu";
//importamos el accestoken para permisos con la api
import { getAccessTokenApi } from "../../../../api/auth";

//importamos el css
import "../../../../scss/EditSubMenuWebForm.scss";

export default function EditSubMenuWebForm(props) {
  const { setIsVisibleModal, setReloadSubMenuWeb, submenu } = props;
  const [subMenuWebData, setSubMenuWebData] = useState(submenu);

  useEffect(() => {
    setSubMenuWebData(submenu);
  }, [submenu]);

  const editSubMenu = (event) => {
    event.preventDefault();

    if (!subMenuWebData.title || !subMenuWebData.url) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      const accesstoken = getAccessTokenApi();

      updateSubMenuApi(accesstoken, subMenuWebData._id, subMenuWebData)
        .then((response) => {
          notification["success"]({
            message: response,
          });
          setIsVisibleModal(false);
          setReloadSubMenuWeb(true);
        })
        .catch(() => {
          notification["error"]({
            message: "Error del servidor, intentelo más tarde.",
          });
        });
    }
  };

  return (
    <div className="edit-submenu-web-form">
      <EditForm
        subMenuWebData={subMenuWebData}
        setSubMenuWebData={setSubMenuWebData}
        editSubMenu={editSubMenu}
      />
    </div>
  );
}

function EditForm(props) {
  const { subMenuWebData, setSubMenuWebData, editSubMenu } = props;

  return (
    <Form className="form-edit" onSubmit={editSubMenu}>
      <Form.Item>
        <Input
          prefix={<FontSizeOutlined />}
          placeholder="Titulo"
          value={subMenuWebData.title}
          onChange={(e) =>
            setSubMenuWebData({ ...subMenuWebData, title: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LinkOutlined />}
          placeholder="URL"
          value={subMenuWebData.url}
          onChange={(e) =>
            setSubMenuWebData({ ...subMenuWebData, url: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          onClick={editSubMenu}
          className="btn-submit"
        >
          Actualizar SubMenú
        </Button>
      </Form.Item>
    </Form>
  );
}
