import { Link } from "react-router-dom";
import styled from "styled-components";
import { isWhiteSpaceLike } from "typescript";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 500px;
  margin: 0 auto;
`;
const Img = styled.img`
  width: 35px;
  height: 35 px;
  margin-right: 10px;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;
const CoinsList = styled.ul``;

const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  a {
    padding: 20px;
    display: flex;
    transition: color 0.2s ease-in;
    align-items: center;
  }
  &: hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 50px;
  color: ${(props) => props.theme.accentColor};
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () =>
      await axios({
        method: "get", // 통신 방식
        url: "https://api.coinpaprika.com/v1/coins/", // 서버
      }).then(function (response) {
        setCoins(response.data.slice(0, 100));
        setLoading(false);
      }))();
  }, []);
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>

      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
