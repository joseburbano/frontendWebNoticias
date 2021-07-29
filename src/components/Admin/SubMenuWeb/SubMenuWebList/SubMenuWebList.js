import React, { useState, useEffect } from "react";
import { Switch, List, Button, Modal as ModalAntd, notification } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Modal from "../../../Modal";
//importamos el sortable para el efecto de cambiar menus con arrastrar el click
import DragSortableList from "react-drag-sortable";
//importamos conexcion a la api en la funcion actualizar menu
import {
  updateSubMenuApi,
  activateSubMenuApi,
  deleteSubMenuApi,
} from "../../../../api/submenu";
//importamos el generador de token para la  api
import { getAccessTokenApi } from "../../../../api/auth";
//importamos el css
import "../../../../scss/SubMenuWebList.scss";

//importamos componente
import AddSubMenuWebForm from "../AddSubMenuWebForm";
import EditSubMenuWebForm from "../EditSubMenuWebForm";

const { confirm } = ModalAntd;

export default function SubMenuWebList(props) {
  const { submenu, setReloadSubMenuWeb } = props;
  const [listItems, setListItems] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const listItemsArray = [];

    submenu.forEach((item) => {
      listItemsArray.push({
        content: (
          <SubMenuItem
            item={item}
            activateSubMenu={activateSubMenu}
            editSubMenuWebModal={editSubMenuWebModal}
            deleteSubMenu={deleteSubMenu}
          />
        ),
      });
    });
    setListItems(listItemsArray);
  }, [submenu]);

  //funcion para activar menu
  const activateSubMenu = (submenu, status) => {
    const accessToken = getAccessTokenApi();
    activateSubMenuApi(accessToken, submenu._id, status).then((response) => {
      notification["success"]({
        message: response,
      });
    });
  };
  //funcion para actualizar posicion del menu
  const onSort = (sortedList, dropEvent) => {
    const accessToken = getAccessTokenApi();

    sortedList.forEach((item) => {
      const { _id } = item.content.props.item;
      const order = item.rank;
      updateSubMenuApi(accessToken, _id, { order });
    });
  };
  //funcion para activar el modal de crear menu y llamamo al componente
  const addSubMenuWebModal = () => {
    setIsVisibleModal(true);
    setModalTitle("Creando nuevo submenú");
    setModalContent(
      <AddSubMenuWebForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadSubMenuWeb={setReloadSubMenuWeb}
      />
    );
  };

  const deleteSubMenu = (submenu) => {
    const accessToken = getAccessTokenApi();

    confirm({
      title: "Eliminando el submenú",
      content: `¿Esta seguro que quiere eliminar el submenú ${submenu.title}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deleteSubMenuApi(accessToken, submenu._id)
          .then((response) => {
            notification["success"]({
              message: response,
            });
            setReloadSubMenuWeb(true);
          })
          .catch(() => {
            notification["error"]({
              message: "Error del servidor, intentelo más tarde.",
            });
          });
      },
    });
  };

  //funcion par editar menu y llamamos el modal el componente
  const editSubMenuWebModal = (submenu) => {
    setIsVisibleModal(true);
    setModalTitle(`Editando Menu: ${submenu.title}`);
    setModalContent(
      <EditSubMenuWebForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadSubMenuWeb={setReloadSubMenuWeb}
        submenu={submenu}
      />
    );
  };

  return (
    <div className="sub-menu-web-list">
      <div className="sub-menu-web-list__header">
        <Button type="primary" onClick={addSubMenuWebModal}>
          Crear SubMenú
        </Button>
      </div>

      <div className="sub-menu-web-list__items">
        <DragSortableList items={listItems} onSort={onSort} type="vertical" />
      </div>

      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
    </div>
  );
}

function SubMenuItem(props) {
  const { item, activateSubMenu, editSubMenuWebModal, deleteSubMenu } = props;

  return (
    <List.Item
      actions={[
        <Switch
          defaultChecked={item.active}
          onChange={(e) => activateSubMenu(item, e)}
        />,
        <Button type="primary" onClick={() => editSubMenuWebModal(item)}>
          <EditOutlined />
        </Button>,
        <Button type="danger" onClick={() => deleteSubMenu(item)}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta title={item.title} description={item.url} />
    </List.Item>
  );
}
