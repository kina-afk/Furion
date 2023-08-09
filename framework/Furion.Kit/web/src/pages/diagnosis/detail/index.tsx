import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  IssuesCloseOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import CodeMirror from "@uiw/react-codemirror";
import { Divider, QRCode, Skeleton, Space, Typography } from "antd";
import { useLiveQuery } from "dexie-react-hooks";
import { useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../../assets/logo.png";
import IconFont from "../../../components/iconfont";
import { db } from "../../../db";

const { Title, Text } = Typography;

export default function DiagnosisDetail() {
  let { id } = useParams();
  const [loading, setLoading] = useState(true);

  const diagnosis = useLiveQuery(async () => {
    setLoading(true);
    var data = await db.httpDiagnost.get({ traceIdentifier: id });
    setTimeout(() => {
      setLoading(false);
    }, 100);
    return data;
  }, [id]);

  if (loading || !diagnosis) {
    return (
      <>
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </>
    );
  }

  return (
    <div>
      <Space>
        <IconFont type="icon-tag" style={{ fontSize: 18 }} />
        <Title level={5} style={{ marginTop: 0 }}>
          请求概要
        </Title>
      </Space>

      <div style={{ marginTop: 15 }}>
        <Space direction="vertical" size={10}>
          <Space>
            <Text style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
              地址：
            </Text>
            <Text underline italic copyable style={{ color: "#595959" }}>
              {diagnosis.requestPath}
            </Text>
          </Space>
          <Space>
            <Text style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
              方式：
            </Text>
            <Text style={{ color: "#595959" }}>{diagnosis.requestMethod}</Text>
          </Space>
          <Space>
            <Text style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
              开始：
            </Text>
            <Text style={{ color: "#595959" }}>
              {diagnosis.startTimestamp?.toLocaleString()}
            </Text>
          </Space>
          <Space>
            <Text style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
              结束：
            </Text>
            <Text style={{ color: "#595959" }}>
              {diagnosis.endTimestamp?.toLocaleString()}
            </Text>
          </Space>
          <Space>
            <Text style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
              耗时：
            </Text>
            {diagnosis.startTimestamp && diagnosis.endTimestamp && (
              <Text style={{ color: "#595959" }}>
                {diagnosis.endTimestamp.getTime() -
                  diagnosis.startTimestamp.getTime()}
                ms
              </Text>
            )}
          </Space>
          <Space>
            <Text style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
              状态码：
            </Text>
            <Text type={diagnosis.exception ? "danger" : "success"}>
              {diagnosis.statusCode}
            </Text>
            {diagnosis.statusCode &&
              diagnosis.statusCode >= 200 &&
              diagnosis.statusCode <= 299 && (
                <CheckCircleOutlined style={{ color: "#52c41a" }} />
              )}
            {diagnosis.statusCode &&
              diagnosis.statusCode >= 400 &&
              diagnosis.statusCode <= 499 && (
                <IssuesCloseOutlined style={{ color: "#ff4d4f" }} />
              )}
            {diagnosis.statusCode && diagnosis.statusCode >= 500 && (
              <CloseCircleOutlined style={{ color: "#ff4d4f" }} />
            )}
            {!diagnosis.statusCode && (
              <WarningOutlined style={{ color: "#faad14" }} />
            )}
          </Space>
        </Space>
      </div>
      <Divider />
      <Space>
        <IconFont type="icon-tag" style={{ fontSize: 18 }} />
        <Title level={5} style={{ marginTop: 0 }}>
          类型信息
        </Title>
      </Space>
      <div style={{ marginTop: 15 }}>
        <Space direction="vertical" size={10}>
          <Space>
            <Text style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
              Controller Type：
            </Text>
            <Text style={{ color: "#595959" }}>{diagnosis.controllerType}</Text>
          </Space>
          <Space>
            <Text style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
              Method：
            </Text>
            <Text style={{ color: "#595959" }}>{diagnosis.methodName}</Text>
          </Space>
        </Space>
      </div>
      <Divider />
      <Space>
        <IconFont type="icon-tag" style={{ fontSize: 18 }} />
        <Title level={5} style={{ marginTop: 0 }}>
          堆栈信息
        </Title>
      </Space>
      <div style={{ marginTop: 15 }}>
        <Space direction="vertical" size={10}>
          <Space>
            <CodeMirror editable={false} value={diagnosis.exception} />
          </Space>
        </Space>
      </div>
      <Divider />
      <Space>
        <IconFont type="icon-tag" style={{ fontSize: 18 }} />
        <Title level={5} style={{ marginTop: 0 }}>
          查询参数
        </Title>
      </Space>
      <div style={{ marginTop: 15 }}>
        <Space direction="vertical" size={10}>
          {diagnosis.query?.map((item) => (
            <Space key={item.key}>
              <Text style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
                {item.key}：
              </Text>
              <Text style={{ color: "#595959" }}>{item.value}</Text>
            </Space>
          ))}
        </Space>
      </div>
      <Divider />

      <Space>
        <IconFont type="icon-tag" style={{ fontSize: 18 }} />
        <Title level={5} style={{ marginTop: 0 }}>
          Cookies
        </Title>
      </Space>
      <div style={{ marginTop: 15 }}>
        <Space direction="vertical" size={10}>
          {diagnosis.cookies?.map((item) => (
            <Space key={item.key}>
              <Text style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
                {item.key}：
              </Text>
              <Text style={{ color: "#595959" }}>{item.value}</Text>
            </Space>
          ))}
        </Space>
      </div>
      <Divider />

      <Space>
        <IconFont type="icon-tag" style={{ fontSize: 18 }} />
        <Title level={5} style={{ marginTop: 0 }}>
          请求头
        </Title>
      </Space>
      <div style={{ marginTop: 15 }}>
        <Space direction="vertical" size={10}>
          {diagnosis.headers?.map((item) => (
            <Space key={item.key}>
              <Text style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
                {item.key}：
              </Text>
              <Text style={{ color: "#595959" }}>{item.value}</Text>
            </Space>
          ))}
        </Space>
      </div>
      <Divider />

      <Space>
        <IconFont type="icon-tag" style={{ fontSize: 18 }} />
        <Title level={5} style={{ marginTop: 0 }}>
          路由表
        </Title>
      </Space>
      <div style={{ marginTop: 15 }}>
        <Space direction="vertical" size={10}>
          <Space>
            <Text style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
              Display Name：
            </Text>
            <Text style={{ color: "#595959" }}>
              {diagnosis.endpoint?.displayName}
            </Text>
          </Space>
          <Space>
            <Text style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
              Route Pattern：
            </Text>
            <Text style={{ color: "#595959" }}>
              {diagnosis.endpoint?.routePattern}
            </Text>
          </Space>
          <Space>
            <Text style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
              Route Order：
            </Text>
            <Text style={{ color: "#595959" }}>
              {diagnosis.endpoint?.order}
            </Text>
          </Space>
          <Space>
            <Text style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
              Route HTTP Method：
            </Text>
            <Text style={{ color: "#595959" }}>
              {diagnosis.endpoint?.httpMethods}
            </Text>
          </Space>
        </Space>
      </div>
      <Divider />
      <Space>
        <IconFont type="icon-tag" style={{ fontSize: 18 }} />
        <Title level={5} style={{ marginTop: 0 }}>
          页面二维码
        </Title>
      </Space>
      <div style={{ marginTop: 15 }}>
        <Space direction="vertical" size={15}>
          <QRCode errorLevel="H" value="https://furion.net/" icon={logo} />
        </Space>
      </div>
      <Divider />
    </div>
  );
}
