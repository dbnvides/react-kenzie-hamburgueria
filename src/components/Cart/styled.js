import styled from "styled-components";

export const StyledMainCart = styled.main`
  width: 365px;
  margin: 0 auto;
  min-height: 200px;
  padding: 10px;
  border-radius: 5px 5px 0 0;

  .boxTitle {
    display: flex;
    background-color: var(--primary);
    color: var(--white);
    height: 65px;
    padding: 0 15px;
    align-items: center;
    border-radius: 5px 5px 0 0;
    font-size: var(--title3);
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    min-height: 160px;
    gap: 15px;
  }
`;
