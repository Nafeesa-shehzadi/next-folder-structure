import React, { useState } from "react";
import { TextField, Button, Box, Snackbar, Alert } from "@mui/material";
import { styled } from "@mui/system";
import { styles } from "./styles";

interface ContactFormProps {
  addContact: (contact: Contact) => void;
  toggleModal: () => void;
  dataToEdit?: Contact | null;
}
interface Contact {
  id?: string;
  name: string;
  phone: string;
}
const StyledBox = styled(Box)(styles.Box);

const ContactForm: React.FC<ContactFormProps> = ({
  addContact,
  toggleModal,
  dataToEdit,
}) => {
  const [contact, setContact] = useState<Contact>(
    dataToEdit || { name: "", phone: "" }
  );
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    addContact(contact);
    toggleModal();
    setContact({ name: "", phone: "" });
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <StyledBox>
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={contact.name}
        onChange={handleInputChange}
        required
      />
      <TextField
        label="Phone"
        variant="outlined"
        name="phone"
        type="phone"
        value={contact.phone}
        onChange={handleInputChange}
        required
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        aria-label={dataToEdit ? "Update Contact" : "Add Contact"}
        disabled={!contact.name || !contact.phone}
      >
        {dataToEdit ? "Update Contact" : "Add Contact"}
      </Button>
      {/* Snackbar for success message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {dataToEdit
            ? "Contact Updated successfully!"
            : "Contact  added successfully"}
        </Alert>
      </Snackbar>
    </StyledBox>
  );
};

export default ContactForm;
