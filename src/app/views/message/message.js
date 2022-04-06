import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { HideMessage } from '../../redux/actions/index'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function DisplayMessage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const responses = useSelector(state => state.root.responses)
  const dispatch = useDispatch();
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    dispatch(HideMessage());
  };

  useEffect(() => {
     //alert(JSON.stringify(responses))
  },[responses])

  return (
    <div className={classes.root}>
      {
          responses != null &&
          <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={responses.type}>
            {responses.message}
          </Alert>
         </Snackbar>
      }
     
    </div>
  );
}