import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './SignIn.css';
import '../Button/Button.css';
import glogo from './go-logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(25),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1.5, 10, 1.5),
  },
  input: {
    color: 'white !important'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  cssLabel: {
    color : 'white !important'
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `white !important`,
    }
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#00FF68 !important'
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Iniciar Sesión
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
                className: classes.input,
              },
            }}
            InputProps={{
              classes: {
                input: classes.input,
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
                className: classes.input,
              },
            }}
            InputProps={{
              classes: {
                input: classes.input,
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}
          />
          <Grid container>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="o-btn-form"
            >
            Iniciar Sesion
            </Button>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="o-btn-google"
            >
              <img src={glogo} alt="Logo Google" className="o-g-logo"></img>
            Google
            </Button>
            </Grid>
            <Grid item xs={6}>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="o-btn-facebook"
            >
              <FacebookIcon className="o-f-logo"></FacebookIcon>
              Facebook
            </Button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
                <Link
                  to='/Registro' className='o-login-link'>
                  Eres miebro? Registrarse
                </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}