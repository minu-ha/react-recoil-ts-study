import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Theme } from "../theme";

const Container = styled.div`
  padding: 0px 200px;
  margin: 0 auto;
  max-width: 700px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: black;
  color: ${({ theme }) => theme.backgroundColor};
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 15px;
  a {
    display: flex;
    padding: 20px;
    transition: color 0.2s ease-in;
    align-items: center;
  }
  &:hover {
    a {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.accentColor};
  font-size: 50px;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
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

const Coins = () => {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>
      {loading ? (
        "loading"
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={coin}>
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
};

export default Coins;