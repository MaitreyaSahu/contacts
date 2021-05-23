import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Drawer,
  Typography,
  List,
  ListItemIcon,
} from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import { useState } from "react";

const Contact = (props) => {
  const [state, setState] = useState({
    isOpen: false,
  });

  const toggleDrawer = () => {
    setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  const img = "";

  const { firstName, lastName } = props.info;

  return (
    <>
      <ListItem button onClick={() => toggleDrawer()}>
        <ListItemAvatar>
          <Avatar alt={firstName} src={img} />
        </ListItemAvatar>
        <ListItemText primary={firstName} secondary={lastName} />
      </ListItem>
      <Divider />

      <Drawer
        anchor="bottom"
        open={state.isOpen}
        onClose={() => toggleDrawer()}
      >
        <Avatar alt={firstName} src={img} />
        <Typography variant="h5" gutterBottom>
          {firstName + " " + lastName}
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
                <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default Contact;
