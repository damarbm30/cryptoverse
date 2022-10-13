import { Typography, Space } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Footer = () => {
  return (
    <footer className="footer">
      <Title level={5} style={{ color: "white", textAlign: "center" }}>
        Crpytoverse <br />
        All rights reserved
      </Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </footer>
  );
};

export default Footer;
