import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "../components";
import Loader from "./Loader";

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Title className="heading" level={2}>
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats?.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={globalStats?.totalExchanges} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStats?.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(globalStats?.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats?.totalMarkets)} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <Title level={3} className="show-more">
        <Link to="/cryptocurrencies">Show more</Link>
      </Title>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
      </div>
      <News simplified />
      <Title level={3} className="show-more">
        <Link to="/news">Show more</Link>
      </Title>
    </>
  );
};

export default Home;
