import styled from "styled-components";
import Flex from "../../styles/Flex";

export const HomeContainer = styled(Flex)`
  flex-direction: column;
`;

export const HomeImg = styled.div`
 margin:2rem;
 display:flex;
 justify-content:center;
width:100vw;
  img{
    max-width: 55vw;
  max-height: 50vh;
  border-radius: 0.7rem;
  opacity:0.6;
  }
`;

export const MainContainer = styled(Flex)`
  flex-direction: row;
`;
