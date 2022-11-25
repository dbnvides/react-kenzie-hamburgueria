import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCartCard = styled(motion.li)`
  width: 100%;
  min-height: 85px;
  display: flex;
  gap: 15px;
  position: relative;
  align-items: center;

  .boxContent {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    width: 140px;
    max-height: 100%;

    h3 {
      width: 140px;
      height: 25px;
      margin-bottom: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  button {
    position: absolute;
    padding: 5px;
    right: 0;
    top: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  button:hover {
    text-decoration: underline;
  }
`;

export const BoxImgCartCard = styled.div`
  width: 70px;
  height: 70px;
  background-color: var(--grey-20);
  border-radius: 5px;

  img {
    object-position: center;
    object-fit: contain;
    max-width: 100%;
  }
`;
