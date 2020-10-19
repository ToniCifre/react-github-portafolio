import React, {useState} from 'react';

import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';


export default function CustomizedSnackbar(props) {
    const {message} = props

    const [open, setOpen] = useState(true);

    const closeSnackbar = () => {
        setOpen(false);
    };
    return (
        <div >

            <Snackbar open={open} autoHideDuration={6000} >
                <MuiAlert elevation={6} variant="filled"  onClose={closeSnackbar} severity="info" >
                    {message}
                </MuiAlert>

            </Snackbar>
        </div>
    );
}
