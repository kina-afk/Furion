import { Anchor, Divider, Layout, Space, Typography } from "antd";
import { AnchorContainer } from "antd/es/anchor/Anchor";
import { useEffect } from "react";
import IconFont from "../../components/iconfont";
import { HttpDiagnost, db } from "../../db";
import RequestList from "./list";
import { Container, Panel } from "./style";

const { Title, Text } = Typography;
const { Sider, Content } = Layout;

export default function Diagnosis() {
  useEffect(() => {
    var eventSource = new EventSource("https://localhost:7115/furion/http-sse");

    const addData = async (data: HttpDiagnost) => {
      try {
        await db.httpDiagnost.put(data);
      } catch (error) {
        console.log(error);
      }
    };

    eventSource.onmessage = function (event) {
      console.log("Received SSE data:", event.data);
      addData(JSON.parse(event.data) as HttpDiagnost);
    };

    eventSource.onerror = function (event) {
      console.log("SSE error:", event);
    };

    eventSource.onopen = function () {
      console.log("SSE connection opened");
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <Panel>
      <Title level={3}>诊断</Title>
      <div>
        <Title level={4}>请求</Title>
        <RequestList />
        <Title level={4}>诊断</Title>
        <Container id="diagnosis-container">
          <Sider
            theme="light"
            style={{ position: "sticky", overflowY: "auto", top: 0 }}
          >
            <div style={{ marginTop: 20 }}>
              <Anchor
                onClick={(ev) => ev.preventDefault()}
                getContainer={() =>
                  document.getElementById(
                    "diagnosis-container"
                  ) as AnchorContainer
                }
                affix={false}
                items={[
                  {
                    key: "stack",
                    href: "#diagnosis-stack",
                    title: (
                      <Space>
                        <IconFont type="icon-stack" />
                        <Text>堆栈 (Stack)</Text>
                      </Space>
                    ),
                  },
                  {
                    key: "query",
                    href: "#diagnosis-query",
                    title: (
                      <Space>
                        <IconFont type="icon-query" style={{ fontSize: 15 }} />
                        <Text>查询 (Query)</Text>
                      </Space>
                    ),
                  },
                  {
                    key: "cookies",
                    href: "#diagnosis-cookies",
                    title: (
                      <Space>
                        <IconFont
                          type="icon-cookies"
                          style={{ fontSize: 15 }}
                        />
                        <Text>缓存 (Cookies)</Text>
                      </Space>
                    ),
                  },
                  {
                    key: "request",
                    href: "#diagnosis-request",
                    title: (
                      <Space>
                        <IconFont
                          type="icon-request"
                          style={{ fontSize: 15 }}
                        />
                        <Text>请求体 (Request)</Text>
                      </Space>
                    ),
                  },
                  {
                    key: "response",
                    href: "#diagnosis-response",
                    title: (
                      <Space>
                        <IconFont
                          type="icon-response"
                          style={{ fontSize: 15 }}
                        />
                        <Text>响应体 (Response)</Text>
                      </Space>
                    ),
                  },
                  {
                    key: "routing",
                    href: "#diagnosis-routing",
                    title: (
                      <Space>
                        <IconFont
                          type="icon-routing"
                          style={{ fontSize: 15 }}
                        />
                        <Text>路由 (Routing)</Text>
                      </Space>
                    ),
                  },
                ]}
              />
            </div>
          </Sider>
          <Content style={{ marginLeft: 15 }}>
            <Title level={5} style={{ marginTop: 0 }} id="diagnosis-stack">
              Stack
            </Title>
            <div style={{ marginTop: 15 }}>
              <Space direction="vertical" size={15}></Space>
            </div>
            <Divider />
            <Title level={5} id="diagnosis-query">
              Query
            </Title>
            <div style={{ marginTop: 15 }}>
              <Space direction="vertical" size={15}></Space>
            </div>
            <Divider />
            <Title level={5} id="diagnosis-cookies">
              Cookies
            </Title>
            <div style={{ marginTop: 15 }}>
              <Space direction="vertical" size={15}></Space>
            </div>
            <Divider />
            <Title level={5} id="diagnosis-request">
              Request
            </Title>
            <div style={{ marginTop: 15 }}>
              <Space direction="vertical" size={15}></Space>
            </div>
            <Divider />
            <Title level={5} id="diagnosis-response">
              Response
            </Title>
            <div style={{ marginTop: 15 }}>
              <Space direction="vertical" size={15}></Space>
            </div>
            <Divider />
            <Title level={5} id="diagnosis-routing">
              Routing
            </Title>
            <div style={{ marginTop: 15 }}>
              <Space direction="vertical" size={15}></Space>
            </div>
            <Divider />
          </Content>
        </Container>
      </div>
    </Panel>
  );
}
