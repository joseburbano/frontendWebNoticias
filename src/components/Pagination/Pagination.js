import React from "react";
//importamos de antd la paginacion
import { Pagination as PaginationAntd } from "antd";
//importamos nuetro scss
import "../../scss/Pagination.scss";

export default function Pagination(props) {
  //props dontraemos noticias y location que es para saber en que paginacion estamos y history para ser un push a la url
  const { noticias, location, history } = props;
  //para sacar la paginacion en la uqe estamos el numero y guardar el currentPage
  const currentPage = parseInt(noticias.page);
  const onChangePage = (newPage) => {
    history.push(`${location.pathname}?page=${newPage}`);
  };
  return (
    <PaginationAntd
      defaultCurrent={currentPage}
      total={noticias.total}
      pageSize={noticias.limit}
      onChange={(newPage) => onChangePage(newPage)}
      className="pagination"
    />
  );
}
