import { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";

import icon from "../images/cryptocurrency.png";

function getItem(key, icon, label) {
  return { key, icon, label };
}

const items = [
  getItem("home", <HomeOutlined />, <Link to="/">Home</Link>),
  getItem("cryptocurrencies", <FundOutlined />, <Link to="/cryptocurrencies">Cryptocurrencies</Link>),
  getItem("news", <BulbOutlined />, <Link to="/news">News</Link>),
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-container">
          <Avatar src={icon} size="large" />
          <Typography.Title className="logo" level={2}>
            <Link to="/">Cryptoverse</Link>
          </Typography.Title>
          <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
            <MenuOutlined />
          </Button>
        </div>
        {activeMenu && <Menu defaultSelectedKeys={["home"]} defaultOpenKeys={["home"]} items={items} theme="dark" />}
      </div>
    </nav>
  );
};

export default Navbar;
