import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles"; // Import useTheme hook
import { styles } from "./styles";
interface Contact {
  id: string;
  name: string;
  phone: string;
}

interface ContactListProps {
  contacts: Contact[];
  handleEdit: (contact: Contact) => void;
}

const StyledList = styled(List)(styles.List);
const ContactList: React.FC<ContactListProps> = ({ contacts, handleEdit }) => {
  const theme = useTheme(); // Access the current theme

  return (
    <StyledList>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <ListItem
            key={contact.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleEdit(contact)}>
                <EditIcon />
              </IconButton>
            }
          >
            <ListItemText primary={contact.name} secondary={contact.phone} />
          </ListItem>
        ))
      ) : (
        <Typography
          variant="h6"
          color={theme.palette.text.primary}
          align="center"
        >
          No contacts available
        </Typography>
      )}
    </StyledList>
  );
};

export default ContactList;
