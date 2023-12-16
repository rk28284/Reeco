import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {actionProductData, actionApprovedData,actionCrossDataMissing,actionCrossDataMissingUrgent} from "../Redux/action";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import cross from "../Asset/cross.png";


export const Crossmark = ({ id, product }) => {
    const dispatch = useDispatch();
    const productData = useSelector((store) => store?.product);
    console.log(productData);
    const { isOpen, onOpen, onClose } = useDisclosure();


    const handleMissing = async (id) => {
      await dispatch(actionCrossDataMissing(id));
      await dispatch(actionProductData());
    };
    const handleMissingUrget = async (id) => {
      await dispatch(actionCrossDataMissingUrgent(id));
      await dispatch(actionProductData());
    };

    return (
      <>
        <Button style={{ padding: "10px" }} onClick={onOpen}>
          <img src={cross} width={"20px"} />
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Missing Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1>Is {product}...Urgent?</h1>
            </ModalBody>

            <ModalFooter>
              <Button
                onClick={() => handleMissingUrget({ id })}
                colorscheme="blue"
                mr={3}
              >
                No
              </Button>
              <Button onClick={() => handleMissing({ id })} variant="ghost">
                Yes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
}

const Button = styled.button`
  color: green;
  border: 1px solid green;
  border-radius: 20px;
  padding: 12px 30px;
  background-color: #fff;
  font-weight: 700;
`;