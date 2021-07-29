import React, { useState } from "react";
import { Form, Input, Button, Select, notification } from "antd";
import {
  EditOutlined,
  FontSizeOutlined,
} from "@ant-design/icons";

//importamos el token para la conexion api
import { getAccessTokenApi } from "../../../../api/auth";
//importamos la conexion con la api
import { addSubMenuApi } from "../../../../api/submenu";

//importamos css
import "../../../../scss/AddSubMenuWebForm.scss";

export default function AddSubMenuWebForm(props) {
  const { setIsVisibleModal, setReloadSubMenuWeb } = props;
  const [subMenuWebData, setSubMenuWebData] = useState({});

  const addSubMenu = (event) => {
    event.preventDefault();

    let finalData = {
      title: subMenuWebData.title,
      url: (subMenuWebData.http ? subMenuWebData.http : "http://") + subMenuWebData.url,
    };

    if (!finalData.title || !finalData.url || !subMenuWebData.url) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      const accessToken = getAccessTokenApi();
      finalData.active = false;
      finalData.order = 1000;

      addSubMenuApi(accessToken, finalData)
        .then((response) => {
          notification["success"]({
            message: response,
          });
          setIsVisibleModal(false);
          setReloadSubMenuWeb(true);
          setSubMenuWebData({});
          finalData = {};
        })
        .catch(() => {
          notification["error"]({
            message: "Error en el servidor,"
          });
        });
    }
  };

  return (
    <div className="add-sub-menu-web-form">
      <AddForm
        subMenuWebData={subMenuWebData}
        setSubMenuWebData={setSubMenuWebData}
        addSubMenu={addSubMenu}
      />
    </div>
  );
}

function AddForm(props) {
  const { subMenuWebData, setSubMenuWebData, addSubMenu } = props;
  const { Option } = Select;
  const selectBefore = (
    <Select
      defaultValue="http://"
      style={{ width: 90 }}
      onChange={(e) => setSubMenuWebData({ ...subMenuWebData, http: e })}
    >
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );

  return (
    <Form className="form-add" onSubmit={addSubMenu}>
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
          addonBefore={selectBefore}
          prefix={<EditOutlined />}
          placeholder="URL"
          value={subMenuWebData.url}
          onChange={(e) =>
            setSubMenuWebData({ ...subMenuWebData, url: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primay"
          htmlType="submit"
          className="btn-submit"
          onClick={addSubMenu}
        >
          Crear Menú
        </Button>
      </Form.Item>
    </Form>
  );
}
