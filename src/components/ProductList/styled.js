import styled from "styled-components";

export const StyledProduct = styled.ul`
  display: flex;
  height: 380px;
  width: 100%;
  overflow: auto;
  gap: 20px;
  padding: 10px;
  transition: 0.2s;

  @media (min-width: 768px) {
    min-width: 350px;
    max-width: 970px;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: max-content;
    max-height: 80vh;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      width: 10px;
      background-color: var(--primary);
      border-radius: 5px;
    }
  }
`;
