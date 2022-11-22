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
  filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));

  form {
    display: flex;
    position: relative;
    max-width: 365px;
    width: 90%;
  }

  input {
    width: 100%;
    padding: 15px 10px;
    background: var(--white);
    border: 2px solid var(--grey-20);
    border-radius: 8px;
  }

  button {
    position: absolute;
    right: 5px;
    bottom: 8px;
  }
`;
