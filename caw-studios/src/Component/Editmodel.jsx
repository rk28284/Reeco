import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
export const Editmodel = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button style={{ padding: "10px" }} onClick={onOpen}>
          Edit
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Modal</ModalHeader>
            <ModalCloseButton />
           
  
            <ModalFooter>
              <Button
                style={{ border: "none", color: "green" }}
                colorScheme="blue"
                mr={3}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                style={{
                  fontWeight: "800",
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                Send
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
}



