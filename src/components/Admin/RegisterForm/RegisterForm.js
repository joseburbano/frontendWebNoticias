import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import {
  SmileOutlined, 
  RadiusUprightOutlined,
  PushpinOutlined,
  UserAddOutlined,
  WhatsAppOutlined,
  KeyOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
//importar conexion con al api backend
import { signUpApi } from "../../../api/user";

//importando funciones para validar  vamos a validar que los no esten vacios
import {
  emailValidation,
  minLengthValidation,
} from "../../../utils/formValidation";

import "../../../scss/RegisterForm.scss";

//import FormItem from "antd/lib/form/FormItem";

export default function RegisterForm() {
  //captura los datos en inputs de e = eventos
  const [inputs, setInputs] = useState({
    names: "",
    surnames: "",
    address: "",
    phone: "",
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });
  //validacion para si los campos estan ocupados
  const [formValid, setFormValid] = useState({
    names: false,
    surnames: false,
    address: false,
    phone: false,
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false,
  });

  //condicion para poder diferenciar is es un checkbox o value para extraer datos
  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.checked,
      });
    } else {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
    }
  };
  //funcion  para validar cada uno de los campos
  //target es el input  completo para que cambie colores
  const inputValidation = (e) => {
    const { type, name } = e.target;

    if (type === "email") {
      setFormValid({
        ...formValid,
        [name]: emailValidation(e.target),
      });
    }
    if (type === "password") {
      setFormValid({
        ...formValid,
        [name]: minLengthValidation(e.target, 6),
      });
    }
    if (type === "checkbox") {
      setFormValid({
        ...formValid,
        [name]: e.target.checked,
      });
    }
  };

  const register = async (e) => {
    e.preventDefault();
    const namesVal = inputs.names;
    const surnamesVal = inputs.surnames;
    const addressVal = inputs.address;
    const phoneVal = inputs.phone;
    const emailVal = inputs.email;
    const passwordVal = inputs.password;
    const repeatPasswordVal = inputs.password;
    const privacyPolicyVal = inputs.privacyPolicy;

    //Notificamos que los campos estan vacios
    if (
      !namesVal ||
      !surnamesVal ||
      !addressVal ||
      !phoneVal ||
      !emailVal ||
      !passwordVal ||
      !repeatPasswordVal ||
      !privacyPolicyVal
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
        description:
          "Debes verificar que esten llenos todos los campos del formulario.",
      });
    } else {
      if (passwordVal !== repeatPasswordVal) {
        notification["error"]({
          message: "Las contraseñas tienen que ser iguales.",
          description: "Verifica que esten bien escritas las contraseñas",
          icon: <RadiusUprightOutlined style={{ color: "#00a680" }} />,
        });
      } else {
        // conectar con la api de backend y registrar el usuario
        const result = await signUpApi(inputs);
        if (!result.ok) {
          notification["error"]({
            message: result.message,
            description: "Algo salio mal!",
            icon: <RadiusUprightOutlined style={{ color: "#00a680" }} />,
          });
        } else {
          Notification["success"]({
            message: result.message,
            description: "Bien ahora si queto todo correcto.",
            icon: <SmileOutlined style={{ color: "#00a680" }} />,
          });
          resetForm();
        }
      }
    }
  };

  const resetForm = () => {
    const inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("success");
      inputs[i].classList.remove("error");
    }

    setInputs({
      names: "",
      surnames: "",
      address: "",
      phone: "",
      email: "",
      password: "",
      repeatPassword: "",
      privacyPolicy: false,
    });

    setFormValid({
      names: false,
      surnames: false,
      address: false,
      phone: false,
      email: false,
      password: false,
      repeatPassword: false,
      privacyPolicy: false,
    });
  };

  return (
    <Form className="register-form" onSubmit={register} onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<SolutionOutlined style={{ color: "rgba(0,0,0,.25" }} />}
          type="text"
          name="names"
          placeholder="Nombres"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.names}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<SolutionOutlined style={{ color: "rgba(0,0,0,.25" }} />}
          type="text"
          name="surnames"
          placeholder="Apellidos"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.surnames}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<PushpinOutlined style={{ color: "rgba(0,0,0,.25" }} />}
          type="address"
          name="address"
          placeholder="Dirección"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.address}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<WhatsAppOutlined style={{ color: "rgba(0,0,0,.25" }} />}
          type="tel"
          name="phone"
          placeholder="Celular - Whatsapp"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.phone}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<UserAddOutlined style={{ color: "rgba(0,0,0,.25" }} />}
          type="email"
          name="email"
          placeholder="Correo Electronico"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.email}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<KeyOutlined style={{ color: "rgba(0,0,0,.25" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.password}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<KeyOutlined style={{ color: "rgba(0,0,0,.25" }} />}
          type="Password"
          name="repeatPassword"
          placeholder="Repetir Contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={inputs.repeatPassword}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox
          name="privacyPolicy"
          onChange={inputValidation}
          checked={inputs.privacyPolicy}
        >
          He leído y acepto la política de privacidad.
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          className="register-form__button"
          onClick={register}
          htmlType="submit"
        >
          Crear Cuenta
        </Button>
      </Form.Item>
    </Form>
  );
}
