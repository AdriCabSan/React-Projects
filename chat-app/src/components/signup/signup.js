import { Link } from 'react-router-dom';
import React from 'react';
import styles from './styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const firebase = require("firebase");
class SignupComponent extends React.Component {

    render(){
        const {classes} = this.props
        
        return(
        <main className={classes.main}>
            <CssBaseline></CssBaseline>
            <Paper className={classes.paper}>
                <Typography component='h1' variant='h5'>
                    Sign Up!
                </Typography>
                <form onSubmit={(e) =>this.submitSignup(e)}
                      className={classes.form}>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='signup-email-input'>
                            Enter your email
                        </InputLabel>
                        <Input autoComplete='email' onChange={(e) =>this.userTyping('email',e)}></Input>
                    </FormControl>
                </form>
            </Paper>
        </main>)
    }
}
const userTyping =(type,e) =>{
    console.log(type,e)
}
//adding styles as a property to a component
export default withStyles(styles)(SignupComponent)