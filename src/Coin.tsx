import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

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

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 50px;
`;
interface RouteParams {
  coinId: string;
}
interface RouteState {
  state: { name: string };
}
function Coin() {
  const { coinId } = useParams<keyof RouteParams>() as RouteParams;
  const [loading, setLoading] = useState(true);
  const { state } = useLocation() as RouteState;

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading"}</Title>
      </Header>
      {loading ? <Loader>Loading ...</Loader> : null}
    </Container>
  );
}

export default Coin;
