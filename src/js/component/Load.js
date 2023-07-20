import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Load = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.status}>
        <div style={{ transform: 'translateX(35px)' }}>
          <CircularProgress size={60} color="secondary" />
        </div>
        <div className={classes.gap}>
          <Typography variant="h6" color="textPrimary" align="center">Buscando</Typography>
          <Typography variant="body1" color="textSecondary" align="center">Por favor aguarde</Typography>
        </div>
      </div>
    </div>
  );
};

export default Load;
