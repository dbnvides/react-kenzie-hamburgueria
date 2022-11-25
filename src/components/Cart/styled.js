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

export const StyledCart = styled.div`
  display: flex;
  padding: 0 10px;
  padding-top: 20px;
  flex-direction: column;
  max-height: 70vh;
  gap: 20px;

  ul {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    min-height: 130px;
    gap: 15px;
    border-bottom: 2px solid var(--grey-20);
    overflow: auto;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      width: 5px;
      background-color: var(--primary);
      border-radius: 5px;
    }
  }

  .allValue {
    display: flex;
    justify-content: space-between;
    padding: 10px;

    span {
      font-weight: var(--bold);
    }

    p {
      font-weight: var(--bold);
    }
  }
  .btnRemoveAll {
    width: 100%;
    max-width: 100%;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid var(--grey-20);
    color: var(--grey-50);
    font-weight: var(--bold);
    transition: 0.2s;
    margin-bottom: 20px;
  }
  .btnRemoveAll:hover {
    background-color: var(--secundary);
    color: var(--white);
    cursor: pointer;
  }
`;
