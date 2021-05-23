import logo from "./logo.svg";
import "./App.css";
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  ListItemSecondaryAction,
  Checkbox,
  Toolbar,
  Typography,
  InputBase,
  Grid,
  Divider,
  Dialog,
  Avatar,
  Button,
  Snackbar,
} from "@material-ui/core";
import Contact from "./components/Contact";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import SearchIcon from "@material-ui/icons/Search";
import TableToolBar from "./components/TableToolBar";
import AddContactModal from "./components/AddContactModal";
import { useState } from "react";
import Modal from "./hoc/Modal";
import AddContact from "./components/AddContact";
import DeleteIcon from "@material-ui/icons/Delete";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import ContactListItem from "./components/ContactListItem";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { CheckBox, Delete } from "@material-ui/icons";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

function App() {
  // const contacts = [
  //   {
  //     id: "c1",
  //     firstName: "abc",
  //     lastName: "def",
  //     email: "saassa",
  //     mobile: "8888",
  //     status: "active",
  //   },
  //   {
  //     id: "c2",
  //     firstName: "abc",
  //     lastName: "def",
  //     email: "saassa",
  //     mobile: "8888",
  //     status: "active",
  //   },
  //   {
  //     id: "c3",
  //     firstName: "abc",
  //     lastName: "def",
  //     email: "saassa",
  //     mobile: "8888",
  //     status: "active",
  //   },
  //   {
  //     id: "c4",
  //     firstName: "abc",
  //     lastName: "def",
  //     email: "saassa",
  //     mobile: "8888",
  //     status: "active",
  //   },
  //   {
  //     id: "c5",
  //     firstName: "abc",
  //     lastName: "def",
  //     email: "saassa",
  //     mobile: "8888",
  //     status: "active",
  //   },
  //   {
  //     id: "c6",
  //     firstName: "abc",
  //     lastName: "def",
  //     email: "saassa",
  //     mobile: "8888",
  //     status: "active",
  //   },
  //   {
  //     id: "c7",
  //     firstName: "abc",
  //     lastName: "def",
  //     email: "saassa",
  //     mobile: "8888",
  //     status: "active",
  //   },
  //   {
  //     id: "c8",
  //     firstName: "abc",
  //     lastName: "def",
  //     email: "saassa",
  //     mobile: "8888",
  //     status: "active",
  //   },
  //   {
  //     id: "c9",
  //     firstName: "abc",
  //     lastName: "def",
  //     email: "saassa",
  //     mobile: "8888",
  //     status: "active",
  //   },
  //   {
  //     id: "c10",
  //     firstName: "abc",
  //     lastName: "def",
  //     email: "saassa",
  //     mobile: "8888",
  //     status: "active",
  //   },
  // ];

  const [contacts, setContacts] = useState([
    {
      id: "c1",
      firstName: "abc",
      lastName: "def",
      email: "saassa",
      mobile: "8888",
      status: "active",
    },
  ]);

  const [selectedCount, setSelectedCount] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleAddContact = (e) => {
    setContacts((prevState) => [...prevState, { ...e }]);
    console.log(e);
  };

  const handleDelete = (contact) => {
    setContacts((prevState) =>
      prevState.filter((elem) => !Object.is(elem, contact))
    );
  };

  const handleContactSelect = (isSelected) => {
    console.log(isSelected, selectedCount);
    isSelected
      ? setSelectedCount((prev) => prev + 1)
      : setSelectedCount((prev) => prev - 1);
  };

  const ListHeaderToolBar = () => {
    return (
      // <ListSubheader>
      <Paper className="list-head-toolbar">
        {selectedCount > 0 ? (
          <>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckBox edge="start" />                  
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6" component="span">
                      {selectedCount + " selected"}
                    </Typography>
                  }
                />

                <IconButton edge="end" onClick={handleModalOpen}>
                  <Delete />
                </IconButton>
              </ListItem>
            </List>
            {/* <IconButton edge="end">
              <CheckBox />
            </IconButton>
            <Typography variant="h6" component="span">
              {selectedCount + " selected"}
            </Typography>
            <IconButton edge="end">
              <Delete />
            </IconButton> */}
          </>
        ) : (
          <>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Checkbox edge="start" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6" component="div">
                      Phonebook
                    </Typography>
                  }
                  secondary={
                    <Typography variant="caption" component="div">
                      {contacts.length + " Contacts"}
                    </Typography>
                  }
                />
                <InputBase placeholder="Search Contacts" />
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
                <IconButton edge="end" onClick={handleModalOpen}>
                  <PersonAddIcon />
                </IconButton>
              </ListItem>
            </List>
            {/* <AppBar> */}
            {/* <Toolbar>
                <IconButton edge="start">
                  <CheckBox />
                </IconButton>
                <Typography variant="h6" component="span">
                  Contacts
                </Typography>
                <div>

                <InputBase placeholder="Search Contacts" />
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
                </div>

                <IconButton edge="end" onClick={handleModalOpen}>
                  <PersonAddIcon />
                </IconButton>
              </Toolbar> */}

            {/* </AppBar> */}
            {/* <Typography variant="h6" component="span">
                Contacts
              </Typography>

              <Typography variant="h6" component="span">
                Contacts
              </Typography>
              <InputBase placeholder="Search Contacts" />
              <IconButton edge="end">
                <SearchIcon />
              </IconButton>

              <IconButton edge="end" onClick={handleModalOpen}>
                <PersonAddIcon />
              </IconButton> */}
          </>
        )}
      </Paper>
      // </ListSubheader>
    );
  };

  return (
    <>
      <Grid container direction="row" justify="center">
        <Paper className="contactList">
          <ListHeaderToolBar />
          <List>
            {contacts.map((contact) => {
              const labelId = `checkbox-list-label-${contact.firstName}`;
              const fnInitial = contact.firstName ? contact.firstName[0] : "#";
              const lnInitial = contact.lastName ? contact.lastName[0] : "";
              let avatarName = (fnInitial + lnInitial).toUpperCase();

              return (
                <ContactListItem
                  key={contact.firstName + contact.lastName}
                  contactInfo={contact}
                  onDeleteContact={handleDelete}
                  onAddContact={handleModalOpen}
                  onSelectContact={handleContactSelect}
                />
              );
            })}
          </List>
        </Paper>
      </Grid>

      {/* <Modal isOpen={modalOpen} onClose={handleModalClose} onAction={(e) => handleAddContact(e)}>
        <AddContact
          onAdd={(e) => handleAddContact(e)}
          onCancel={handleModalClose}
        />
      </Modal> */}

      <Dialog open={modalOpen} onClose={handleModalClose}>
        <AddContact
          onAdd={(e) => handleAddContact(e)}
          onCancel={handleModalClose}
        />
      </Dialog>
    </>
  );
}

export default App;
