import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../Components/Modal";

const Library = () => {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      {showModal && <Modal handleModal={handleModal} />}
      <SHOW onClick={handleModal}>button</SHOW>
    </>
  );
};

const SHOW = styled.button`
  color: white;
`;

export default Library;
