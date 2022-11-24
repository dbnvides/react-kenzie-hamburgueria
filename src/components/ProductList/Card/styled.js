import styled from "styled-components";

export const StyledCard = styled.li`
  min-width: 300px;
  max-width: 300px;
  height: 330px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 2px solid var(--grey-20);
  transition: 0.5s;

  &:hover {
    box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.9);
    transition: 0.3s;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    height: 350px;
  }
`;
export const BoxImgCard = styled.div`
  width: 100%;
  max-height: 150px;
  align-items: center;
  justify-content: center;
  background-color: var(--grey-0);
  border-radius: 5px 5px 0 0;

  img {
    object-fit: contain;
    object-position: center;
    max-height: 100%;
  }
`;

export const BoxContentCard = styled.div`
  gap: 14px;
  padding: 20px;

  h2 {
    font-size: var(--title3);
    font-weight: var(--bold);
  }

  p {
    color: var(--grey-50);
    font-size: var(--caption);
  }

  span {
    color: var(--primary);
    font-size: var(--title4);
    font-weight: var(--semibold);
  }

  @media (min-width: 768px) {
    h2 {
      font-size: var(--title2);
    }

    p {
      color: var(--grey-50);
      font-size: var(--body);
    }

    span {
      color: var(--primary);
      font-size: var(--title3);
      font-weight: var(--semibold);
    }
  }
`;
