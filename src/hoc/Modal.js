import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from "@material-ui/core";

const Modal = (props) => {
    //const handleActionClick 
  return (
    <Dialog open={props.isOpen} onClose={props.onClose}>
      <DialogTitle>Add New Conatct</DialogTitle>
      <DialogContent dividers>{props.children}</DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={props.onAction} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
