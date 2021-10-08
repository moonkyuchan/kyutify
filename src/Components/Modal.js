import React from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ArtistCard from "./ArtistCard";

const Modal = ({ handleModal, track }) => {
  return (
    <ModalBack onClick={handleModal}>
      <ModalBlock onClick={(e) => e.stopPropagation()}>
        <ModalSection>
          <CloseButton onClick={handleModal}>
            <AiOutlineCloseCircle />
          </CloseButton>
          <CardWrap>
            {track.map((data, idx) => {
              return <ArtistCard key={idx} name={data.name} type={data.type} />;
            })}
          </CardWrap>
        </ModalSection>
      </ModalBlock>
    </ModalBack>
  );
};
const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;
const ModalBlock = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 800px;
  height: 900px;
  padding: 16px;
  background: rgb(40, 40, 40);
  border-radius: 10px;
  overflow: scroll;
`;
const ModalSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;
const CardWrap = styled.div`
  margin-top: 20px;
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  grid-gap: 40px;
  overflow: scroll;
  height: fit-content;
`;

const CloseButton = styled.button`
  svg {
    font-size: 60px;
  }
  color: white;
  transition: all ease 0.5s;
  &:hover {
    transform: rotate(90deg);
    color: red;
  }
`;

export default Modal;
