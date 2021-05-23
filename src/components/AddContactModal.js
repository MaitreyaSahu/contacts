import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import AddContact from "./AddContact";


const AddContactModal = (props) => {
    return (
        <Dialog open={props.modalShow} onClose={props.handleModalClose}>
            <DialogTitle>Add New Conatct</DialogTitle>
            <DialogContent>
                {
                    props.children
                }
                <AddContact />
            </DialogContent>
        </Dialog>
    )
}

export default AddContactModal;