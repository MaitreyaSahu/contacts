import { useState } from "react";

import {
  IconButton,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  Checkbox,
  Avatar,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { SettingsInputAntennaTwoTone } from "@material-ui/icons";

const ContactListItem = (props) => {
  const [checked, setChecked] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleMouseEnter = (e) => {
    console.log("handleMouseOver");
    if (!checked) {
      setFocused(true);
    }
    // checked ? null : setFocused(true);
  };

  const handleMouseLeave = (e) => {
    console.log("mousehandleMouseOutOver");
    if (!checked) {
      setFocused(false);
    }
    // checked ? null : setFocused(false);
  };

  const handleCheckedChange = () => {
    setChecked((prevState) => !prevState);

    props.onSelectContact(!checked);
  };

  const { firstName, lastName, mobile, email } = { ...props.contactInfo };

  const fnInitial = firstName ? firstName[0] : "#";
  const lnInitial = lastName ? lastName[0] : "";
  let avatarName = (fnInitial + lnInitial).toUpperCase();

  return (
    <ListItem
      button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      selected={checked}
    >
      <ListItemIcon>
        {focused ? (
          <Checkbox
            edge="start"
            checked={checked}
            onClick={handleCheckedChange}
            tabIndex={-1}
            disableRipple
          />
        ) : (
          <Avatar>{avatarName}</Avatar>
        )}
      </ListItemIcon>
      <ListItemText
        primary={`${firstName + " " + lastName}`}
        secondary={
          mobile + (email ? " - " + email : "")
          // <>
          //   <CallIcon /> {contact.mobile}
          //   <MailIcon /> {contact.email}
          // </>
        }
      />

      {/* <ListItemSecondaryAction> */}
      {focused ? (
        <IconButton
          edge="end"
          onClick={() => props.onDeleteContact(props.contactInfo)}
        >
          <DeleteIcon />
        </IconButton>
      ) : null}
      {/* </ListItemSecondaryAction> */}
    </ListItem>
  );
};

export default ContactListItem;
