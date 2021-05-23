import {
  Button,
  Divider,
  Grid,
  TextField,
  Dialog,
  Paper,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import { useState } from "react";

const AddContact = (props) => {
  const handleAddClick = (e) => {
    e.preventDefault();
    props.onAdd(state);
    props.onCancel();
  };

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });

  const inputChangeHandler = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    setState({ ...state, [nam]: val });
  };

  return (
    <Paper component="form">
      <DialogTitle>Add New Conatct</DialogTitle>
      <DialogContent divider>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <TextField
              name="firstName"
              label="First name"
              autoFocus
              onChange={inputChangeHandler}
            />
          </Grid>
          <Grid item>
            <TextField
              name="lastName"
              label="Last Name"
              required
              fullWidth
              onChange={inputChangeHandler}
            />
          </Grid>
          <Grid item>
            <TextField
              name="mobile"
              label="Mobile"
              fullWidth
              onChange={inputChangeHandler}
            />
          </Grid>
          <Grid item>
            <TextField
              name="email"
              label="Email"
              onChange={inputChangeHandler}
            />
          </Grid>
        </Grid>
        {/* <div></div>
          <Button type="submit" color="primary" onClick={handleAddClick}>
            Add
          </Button>
          <Button color="secondary" onClick={props.onCancel}>
            Cancel
          </Button> */}
      </DialogContent>
      <DialogActions>
        <Button type="submit" onClick={handleAddClick} color="primary">
          Add
        </Button>
        <Button onClick={props.onCancel} color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Paper>
  );
};

export default AddContact;
