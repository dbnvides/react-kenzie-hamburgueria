import styled from "styled-components";

export const StyledProduct = styled.ul`
  display: flex;
  height: 380px;
  width: 100%;
  margin-top: 20px;
  overflow: auto;
  gap: 20px;

  @media (min-width: 768px) {
    min-width: 60%;
    width: 940px;
    max-width: 940px;
    flex-wrap: wrap;
    height: max-content;
  }
`;
