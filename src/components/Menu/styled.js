import styled from "styled-components";

export const StyledMenu = styled.header`
  width: 100%;
  height: 139px;
  background-color: var(--grey-0);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;

  form {
    display: flex;
    position: relative;
    max-width: 365px;
    width: 90%;
  }

  input {
    width: 100%;
    padding: 15px 10px;
    background: var(--grey-0);
    border: 2px solid var(--grey-20);
    border-radius: 8px;
  }

  button {
    position: absolute;
    right: 5px;
    bottom: 8px;
    padding: 8px 20px;
    background: var(--primary);
    border: 2px solid var(--primary);
    border-radius: 8px;
    color: var(--white);
  }
`;
