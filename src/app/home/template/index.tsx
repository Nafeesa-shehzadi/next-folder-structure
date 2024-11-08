"use client";
import React, { useState } from "react";
import { styled } from "@mui/system";
import {
  TextField,
  Button,
  Box,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ContactsRoundedIcon from "@mui/icons-material/ContactsRounded";
import ContactList from "../../components/contactlist/ContactList";
import EditModal from "../../components/editmodal/EditModal";
import { styles } from "./styles";

const HomePageContainer = styled("div")(styles.homePageContainer);
const StyledTypography = styled(Typography)(styles.typography);
const StyledTextField = styled(TextField)(styles.textField);
const StyledButton = styled(Button)(styles.button);

const HomePage = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [dataToEdit, setDataToEdit] = useState<any>(null);

  const handleAddContactClick = () => {
    setSearchTerm("");
    setShowAddModal(true);
    setShowEditModal(false); // Ensure edit modal is closed
    setDataToEdit(null); // Clear edit data when adding new contact
  };

  const handleEdit = (contact: any) => {
    setDataToEdit(contact);
    setShowEditModal(true);
    setShowAddModal(false); // Ensure add modal is closed
  };

  const toggleAddModal = () => {
    setShowAddModal((prev) => !prev);
  };

  const toggleEditModal = () => {
    setShowEditModal((prev) => !prev);
    setDataToEdit(null);
  };

  const addContact = (contact: any) => {
    // Assign a unique ID to each new contact
    const newContact = { ...contact, id: Date.now() };
    setContacts([...contacts, newContact]);
    setShowAddModal(false);
  };

  const editContact = (updatedContact: any) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setShowEditModal(false); // Close modal after editing
  };

  return (
    <HomePageContainer>
      <StyledTypography variant="h4">PhoneBook App☎️</StyledTypography>
      {/* Theme Toggle Button */}

      <StyledTextField
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search here..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon
                onClick={() => {
                  /* handle search */
                }}
                style={{ cursor: "pointer" }}
              />
            </InputAdornment>
          ),
        }}
      />

      <Box display="flex" flexDirection={"column"}>
        <StyledButton
          variant="contained"
          color="success"
          onClick={handleAddContactClick}
        >
          <ContactsRoundedIcon />
          Add to Contacts
        </StyledButton>
      </Box>

      <ContactList contacts={contacts} handleEdit={handleEdit} />

      {/* Add Contact Modal */}
      {showAddModal && (
        <EditModal
          showModal={showAddModal}
          dataToEdit={null}
          toggleModal={toggleAddModal}
          addContact={addContact}
        />
      )}

      {/* Edit Contact Modal */}
      {showEditModal && dataToEdit && (
        <EditModal
          showModal={showEditModal}
          dataToEdit={dataToEdit}
          toggleModal={toggleEditModal}
          addContact={editContact}
        />
      )}
    </HomePageContainer>
  );
};

export default HomePage;
