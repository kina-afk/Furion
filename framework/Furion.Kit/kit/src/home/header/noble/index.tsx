import { Space, Tag } from "antd";
import React from "react";
import { styled } from "styled-components";
import IconFont from "../../../components/iconfont";
import TextBox from "../../../components/textbox";

const Container = styled.div`
  cursor: pointer;
`;

const Icon = styled(IconFont)`
  font-size: 16px;
  position: relative;
  top: 1px;
`;

const Category = styled(TextBox)`
  font-weight: 500;
  display: block;
`;

const Noble: React.FC = () => {
  return (
    <Container>
      <Tag color="gold">
        <Space align="center" size={5}>
          <Icon type="icon-noble" />
          <Category>旗舰版</Category>
        </Space>
      </Tag>
    </Container>
  );
};

export default Noble;
