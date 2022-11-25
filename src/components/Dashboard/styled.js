import styled from "styled-components";

export const MainDashboard = styled.main`
  width: 100vw;
  min-height: 100vh;
`;

export const StyledMenu = styled.header`
  width: 100%;
  display: flex;
  height: 139px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    height: 80px;
  }

  form {
    display: flex;
    position: relative;
    max-width: 365px;
    width: 100%;
  }

  input {
    width: 100%;
    padding: 15px 10px;
    background: var(--white);
    border: 2px solid var(--grey-20);
    border-radius: 8px;
    justify-self: center;
    font-size: var(--body);

    @media (min-width: 768px) {
      font-size: var(--title3);
    }
  }

  .titleLogo {
    font-size: var(--title3);
    color: var(--secundary);
  }

  button {
    position: absolute;
    right: 5px;
    bottom: 8px;

    @media (min-width: 768px) {
      bottom: 6px;
    }
  }
`;

export const Menu = styled.section`
  min-width: 100%;
  background-color: var(--grey-0);
  filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));
`;

export const ResultSearch = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .titleSearch {
    font-size: var(--title2);
  }

  .btnClearList {
    display: none;
  }

  @media (min-width: 768px) {
    display: block;

    .boxItem {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 10px;

      .btnClearList {
        display: block;
        padding: 10px 20px;
        width: max-content;
        font-size: var(--body);
      }

      button:hover {
        background-color: var(--sucess);
        border: 2px solid var(--sucess);
      }
    }
  }
`;

export const InputName = styled.span`
  color: var(--grey-50);
`;

export const SectionDashboard = styled.section`
  max-width: 100%;
  max-height: 90vh;
  padding-top: 40px;
  padding-bottom: 20px;
  gap: 20px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 20px;
  }
`;
