import React, {useState} from 'react';

import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import Slide from "@material-ui/core/Slide";



export default function CustomizedSnackbar(props) {
    const {message, time, severity} = props
    const [open, setOpen] = useState(true);



    const closeSnackbar = () => {
        setOpen(false);
    };

    if (!severity) {
        return (
            <Snackbar open={open} onClose={closeSnackbar} autoHideDuration={time} message={message}
                      action={
                          <IconButton size="small" aria-label="close" color="inherit" onClick={closeSnackbar}>
                              <CloseIcon fontSize="small"/>
                          </IconButton>
                      }
            />
        )
    } else if (severity === 'info') {
        return (
            <Snackbar open={open} onClose={closeSnackbar} autoHideDuration={time}>
                <MuiAlert elevation={6} variant="filled" onClose={closeSnackbar} severity="info">
                    {message}
                </MuiAlert>
            </Snackbar>
        );
    } else if (severity === 'Error') {
        return (
            <Snackbar open={open} onClose={closeSnackbar} autoHideDuration={time}>
                <MuiAlert elevation={6} variant="filled" onClose={closeSnackbar} severity="info">
                    {message}
                </MuiAlert>
            </Snackbar>)
    }
}
