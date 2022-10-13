import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import { Navbar, Home, Cryptocurrencies, CryptoDetails, News, Footer } from "./components";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <Footer />
      </main>
    </div>
  );
};

export default App;
