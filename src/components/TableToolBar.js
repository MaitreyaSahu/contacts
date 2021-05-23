import { Button, Toolbar, Typography } from "@material-ui/core";

const TableToolBar = (props) => {
    return (
        <Toolbar>
            <Typography variant="h5">Contacts..</Typography>
            <Button variant="contained" color="primary" onClick={props.handleModalOpen} >Add Contact</Button>
        </Toolbar>
    )
}

export default TableToolBar;