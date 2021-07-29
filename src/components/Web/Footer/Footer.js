import React from "react";
import { Layout, Row, Col } from "antd";
import {
  TrademarkCircleOutlined,
} from "@ant-design/icons";

//importamos componentes
import MyInfo from './MyInfo';
import NavigationFooter from './NavegationFooter';
import Newsletter from '../Newsletter';

//importamos css
import "../../../scss/Footer.scss";

export default function Footer() {
  const { Footer } = Layout;

  return (
    <Footer className="footer">
      <Row>
        <Col md={4} />
        <Col md={16}>
          <Row>
            <Col md={8}><MyInfo /></Col>
            <Col md={8}><NavigationFooter /></Col>
            <Col md={8}><Newsletter /></Col>
          </Row>
          <Row className="footer__copyright">
            <Col md={12}>2020 ALL RIGHTS RESERVED <TrademarkCircleOutlined /> </Col>
            <Col md={12}>MINDBUR S.A.S. DESARROLLADOR</Col>
          </Row>
        </Col>
      </Row>
    </Footer>
  );
}
