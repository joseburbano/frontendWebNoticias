import React from "react";
import { Card, Col, Row } from "antd";

import "../../../scss/MainScrollCards.scss";

export default function MainScrollCard() {
  return (
    <div className="main-Card">
    <div />
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
}
