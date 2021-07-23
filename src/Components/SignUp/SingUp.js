import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
// eslint-disable-next-line 
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../SignIn/SignIn.css';
// eslint-disable-next-line 
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(25),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(5),
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

const SignUp = (props) => {
  const classes = useStyles();

  //Creacion de State de Usuarios
const [user, setUser] = useState({
  name: '',
  lastName: '',
  email: '',
  password:'',
});

//Funcion para actualizar State de usuarios
const handleChange = (e) => {
  setUser({
    ...user,
    [e.target.name]: e.target.value 
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  .then(response => {
    //Se guardan los datos del usuario
    delete user.password;
    firebase.database().ref(`/users/${response.user.uid}`).set(user);
    swal('Se registró correctamente! Inicia sesion para continuar.');
    props.history.push('/Login');
  })
  .catch(error => {
    console.log(error);
    alert(error.message);
  });
};

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Registrarse
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nombre"
                autoFocus
                value={user.name}
                onChange={handleChange}
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
                autoComplete="lname"
                value={user.lastName}
                onChange={handleChange}
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
                value={user.email}
                onChange={handleChange}
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={user.password}
                onChange={handleChange}
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
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="o-btn-form"
          >
            Enviar
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
                <Link
                  to='/Login' className='o-login-link'>
                  ¿Ya tienes una cuenta? Iniciar Sesion
                </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(SignUp);