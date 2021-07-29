import React, { useState, useEffect, useCallback } from "react";
import {
  Input,
  Select,
  Avatar,
  Form,
  Button,
  Col,
  Row,
  notification,
} from "antd";
import {
  UserOutlined,
  KeyOutlined,
  MailOutlined,
  MobileOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { useDropzone } from "react-dropzone";

//importando el css
import "../../../../scss/EditUserForm.scss";

//importando funcion para conectarnos a la api y token
import {
  updateUserApi,
  uploadAvatarApi,
  getAvatarApi,
} from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";

//importar imagen
import NoAvatar from "../../../../assets/img/svg/cuenta.svg";

//fiuncionde formulario de edicion donde podemos ,onstrar el avatar y datos del usuario
export default function EditUserForm(props) {
  const { user, setIsVisibleModal, setReloadUsers } = props;
  const [avatar, setAvatar] = useState(null);
  const [userData, setUserData] = useState({});
  //este useEffect actualiza todos los paremetros de los mismos datos siempre y cuando se actualice
  useEffect(() => {
    setUserData({
      names: user.names,
      surnames: user.surnames,
      address: user.address,
      phone: user.phone,
      email: user.email,
      role: user.Role,
      avatar: user.avatar,
    });
  }, [user]);
  //creamos un use effect para el avatar siempre y cuando el usuario cambie
  useEffect(() => {
    if (user.avatar) {
      getAvatarApi(user.avatar).then((response) => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [user]);

  //funcion para guardar ruta del avatar
  useEffect(() => {
    if (avatar) {
      setUserData({ ...userData, avatar: avatar.file });
    }
  }, [avatar]);

  //funcion p se jecuta cuando queramos actualizar el usuario
  const updateUser = (e) => {
    e.preventDefault();
    const token = getAccessTokenApi();
    let userUpdate = userData;

    if (userUpdate.password || userUpdate.repeatPassword) {
      if (userUpdate.password !== userUpdate.repeatPassword) {
        notification["error"]({
          message: "Las contraseñas tiene que ser iguales",
        });
        return;
      } else {
        delete userUpdate.repeatPassword;
      }
    }
    if (
      !userUpdate.names ||
      !userUpdate.surnames ||
      !userUpdate.address ||
      !userUpdate.phone ||
      !userUpdate.email
    ) {
      notification["error"]({
        message:
          "Los nombres, apellidos, direccion, celular y email son obligatorios",
      });
      return;
    }
    if (typeof userUpdate.avatar === "object") {
      uploadAvatarApi(token, userUpdate.avatar, user._id).then((response) => {
        userUpdate.avatar = response.avatarName;
        updateUserApi(token, userUpdate, user._id).then((result) => {
          notification["success"]({
            message: result.message,
          });
          setIsVisibleModal(false);
          setReloadUsers(true);
        });
      });
    } else {
      updateUserApi(token, userUpdate, user._id).then((result) => {
        notification["success"]({
          message: result.message,
        });
        setIsVisibleModal(false);
        setReloadUsers(true);
      });
    }
  };

  return (
    <div className="edit-user-form">
      <UploadAvatar avatar={avatar} setAvatar={setAvatar} />
      <EditForm
        userData={userData}
        setUserData={setUserData}
        updateUser={updateUser}
      />
    </div>
  );
}

//funcion para cargar el avatar
function UploadAvatar(props) {
  const { avatar, setAvatar } = props;
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    if (avatar) {
      if (avatar.preview) {
        setAvatarUrl(avatar.preview);
      } else {
        setAvatarUrl(avatar);
      }
    } else {
      setAvatarUrl(null);
    }
  }, [avatar]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setAvatar({ file, preview: URL.createObjectURL(file) });
    },
    [setAvatar]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/jpg, image/png",
    noKeyboard: true,
    onDrop,
  });

  return (
    <div className="upload-avatar" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Avatar size={150} src={NoAvatar} />
      ) : (
        <Avatar size={150} src={avatarUrl ? avatarUrl : NoAvatar} />
      )}
    </div>
  );
}

//funcion para contruir todo el formulario de edicion
function EditForm(props) {
  const { userData, setUserData, updateUser } = props;
  const { Option } = Select;

  return (
    <div>
      <form className="form-edit" onSubmit={updateUser}>
          <Col span={12}>
            <Form.Item>
              <Input
                prefix={<UserOutlined />}
                placeholder="Nombres"
                value={userData.names}
                onChange={(e) =>
                  setUserData({ ...userData, names: e.target.value })
                }
              />
            </Form.Item>
          </Col>
          <Col span={12}></Col>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item>
              <Input
                prefix={<UserOutlined />}
                placeholder="Apellidos"
                value={userData.surnames}
                onChange={(e) =>
                  setUserData({ ...userData, surnames: e.target.value })
                }
              />
            </Form.Item>
          </Col>
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
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item>
              <Input
                prefix={<EnvironmentOutlined />}
                placeholder="Direccion"
                value={userData.address}
                onChange={(e) =>
                  setUserData({ ...userData, address: e.target.value })
                }
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
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
          <Col span={12}>
            <Form.Item>
              <Select
                placeholder="Selecciona un rol"
                onChange={(e) => setUserData({ ...userData, role: e })}
                value={userData.role}
              >
                <Option value="admin">Administrador</Option>
                <Option value="periodista">Periodista</Option>
                <Option value="reviewr">Revisor</Option>
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
            onClick={updateUser}
            htmlType="submit"
            className="btn-submit"
          >
            Actualizar Usuario
          </Button>
        </Form.Item>
      </form>
    </div>
  );
}
