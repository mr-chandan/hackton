import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Styles from "../Submit/Submit.module.css"

export default function Submit() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className={Styles.cont}>
                <hr className={Styles.hhr} />
                <div className={Styles.cc}>
                    <button className={Styles.btn} onClick={handleClickOpen}> Submit a app u found</button>
                    <div className={Styles.txt}>If u found a app on any socials that feels to scam sumbiit hear !!</div>
                </div>
            </div>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>App info </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the Details of the app
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Your email"
                        type="email"
                        fullWidth
                        variant="outlined"
                    />
                    <div className={Styles.in}>
                        <label for="img">Upload some image of the app : </label>
                        <input type="file" id="img" name="img" accept="image/*" />
                    </div>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name of the app"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Where you found"
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="What is it related to "
                        type="text"
                        fullWidth
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}