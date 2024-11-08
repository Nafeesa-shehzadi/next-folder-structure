import React from "react";
import { Modal, Typography, Box } from "@mui/material";
import ContactForm from "../contactform/ContactForm";
import { styles } from "./styles";
import { styled } from "@mui/system";
interface EditModalProps {
  showModal: boolean;
  dataToEdit: Contact | null;
  toggleModal: () => void;
  addContact: (contact: Contact) => void;
}

interface Contact {
  id?: string;
  name: string;
  phone: string;
}
const StyledBox = styled(Box)(styles.Box);
const EditModal: React.FC<EditModalProps> = ({
  showModal,
  dataToEdit,
  toggleModal,
  addContact,
}) => {
  return (
    <Modal open={showModal} onClose={toggleModal}>
      <StyledBox>
        <Typography variant="h6" component="h2" gutterBottom>
          {dataToEdit ? "Edit Contact" : "Add New Contact"}
        </Typography>
        <ContactForm
          addContact={addContact}
          toggleModal={toggleModal}
          dataToEdit={dataToEdit}
        />
      </StyledBox>
    </Modal>
  );
};

export default EditModal;
