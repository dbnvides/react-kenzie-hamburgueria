import styled from "styled-components";

export const StyledMainCart = styled.main`
  width: 100%;
  min-width: 300px;
  max-width: 400px;
  margin: 20px auto;
  height: max-content;
  border-radius: 5px 5px 0 0;
  background-color: var(--grey-0);

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
    padding: 20px;
  }

  @media (min-width: 768px) {
    margin: 10px 0;
  }
`;

export const StyledBoxEmpty = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 160px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--grey-0);

  h3 {
    font-size: var(--title3);
    font-weight: var(--bold);
  }

  p {
    font-size: var(--body);
    color: var(--grey-50);
    font-weight: var(--regular);
  }
`;

export const StyledCartTotal = styled.div`
  display: flex;
  padding: 0 10px;
  padding-top: 20px;
  flex-direction: column;
  height: 110px;
  gap: 20px;
  border-top: 2px solid var(--grey-20);

  div {
    display: flex;
    justify-content: space-between;
  }
  button {
    width: 100%;
    max-width: 350px;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid var(--grey-20);
    color: var(--grey-50);
    font-weight: var(--bold);
    transition: 0.2s;
  }
  button:hover {
    background-color: var(--secundary);
    color: var(--white);
    cursor: pointer;
  }
`;
