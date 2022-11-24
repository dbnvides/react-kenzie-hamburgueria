import styled from "styled-components";

export const StyledProduct = styled.ul`
  display: flex;
  height: 380px;
  width: 100%;
  overflow: auto;
  gap: 20px;
  padding: 10px;

  @media (min-width: 768px) {
    min-width: 60%;
    max-width: 960px;
    flex-wrap: wrap;
    height: 100%;
    overflow: auto;
    padding: 10px;
  }
`;
