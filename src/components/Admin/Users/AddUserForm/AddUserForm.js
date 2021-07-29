import React, { useState } from "react";
import { Form, Input, Select, Button, Row, Col, notification } from "antd";
import {
  UserOutlined,
  EnvironmentOutlined,
  KeyOutlined,
  MailOutlined,
  MobileOutlined,
} from "@ant-design/icons";
//importamos la conexion al servidor
import { signUpAdminApi } from "../../../../api/user";
//importamos token
import { getAccessTokenApi } from "../../../../api/auth";
//importamos el css
import "../../../../scss/AddUserForm.scss";

export default function EditUserForm(props) {
  const { setIsVisibleModal, setReloadUsers } = props;
  const [userData, setUserData] = useState({});

  //funcion para agregar un nuevo usuario y enviar peticion al servidor para agregarlo
  const addUser = (event) => {
    event.preventDefault();
    if (
      !userData.names ||
      !userData.surnames ||
      !userData.address ||
      !userData.phone ||
      !userData.email ||
      !userData.role ||
      !userData.password ||
      !userData.repeatPassword
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else if (userData.password !== userData.repeatPassword) {
      notification["error"]({
        message: "Las contraseñas tiene que ser iguales.",
      });
    } else {
      const accessToken = getAccessTokenApi();

      signUpAdminApi(accessToken, userData)
        .then((response) => {
          notification["success"]({
            message: response,
          });
          setIsVisibleModal(false);
          setReloadUsers(true);
          setUserData({});
        })
        .catch((err) => {
          notification["error"]({
            message: err,
          });
        });
    }
  };
  return (
    <div className="add-user-form">
      <AddForm
        userData={userData}
        setUserData={setUserData}
        addUser={addUser}
      />
    </div>
  );
}

function AddForm(props) {
  
  //le pasamos los dos estados y le pasamos la funcion
  const { userData, setUserData, addUser } = props;
  const { Option } = Select;

  return (
    <Form className="form-add" onSubmit={addUser}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder="Nombres"
              value={userData.names}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  names: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined />}
              placeholder="Apellidos"
              value={userData.surnames}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  surnames: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<EnvironmentOutlined />}
              placeholder="Direccion"
              value={userData.address}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  address: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<MobileOutlined />}
              placeholder="Celular"
              value={userData.phone}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  phone: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<MailOutlined />}
              placeholder="Correo Electronico"
              value={userData.email}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  email: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Selecciona un Rol"
              onChange={(e) => setUserData({ ...userData, role: e })}
              value={userData.role}
            >
              <Option value="admin">Administrador</Option>
              <Option value="editor">Periodista</Option>
              <Option value="review">Revisor</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<KeyOutlined />}
              type="password"
              placeholder="Contraseña"
              value={userData.password}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  password: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<KeyOutlined />}
              type="password"
              placeholder="Repetir Contraseña"
              value={userData.repeatPassword}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  repeatPassword: e.target.value,
                })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button
          type="primary"
          onClick={addUser}
          htmlType="submit"
          className="btn-submit"
        >
          Crear Usuario
        </Button>
      </Form.Item>
    </Form>
  );
}
