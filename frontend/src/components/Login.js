import React, { Component } from 'react';
import Navbar, { ElementsWrapper } from '../menu/navbar';
import SignUp from '../SignUp';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { withTranslation} from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import history from "../history";
import gql from 'graphql-tag';
import{Mutation} from 'react-apollo';
import { AUTH_TOKEN,GC_USER_ID } from '../constants';
import {PopupboxManager, PopupboxContainer} from 'react-popupbox';
import '../style/login.css';
import ContactUS from "./ContactUS";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import FrontPic from "../menu/style/Screen Shot 2019-11-28 at 9.19.01 PM.png"
import {Typography} from "@material-ui/core";






class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signup: true,
            login: true,
            id: "",
            email: '',
            password: '',
            email_signup: '',
            password_signup: '',
            name_signup: "",
            classes: true,


        };
        this.forgotpassword = this.forgotpassword.bind(this);

    }

    openPopupbox() {
        const content = (
            <div className='popup'>
                <div className='popup-inner'>
                    <SignUp/>
                    <div>
                        <a className="popup-close" onClick={PopupboxManager.close}>X</a></div>
                </div>
            </div>
        );
        PopupboxManager.open({
            content,
            config: {

                fadeIn: true,
                fadeInSpeed: 500
            }
        });

    }

    forgotpassword() {
        let path = '/forgot-password';
        this.props.history.push(path)
    }



    render() {
        const { t } = this.props;

        const navbarItems = [{
            label: <div>{t("Welcome")}</div>,
            target: "item-1"
        }, {
            label:<div>{t("Products")}</div>,
            target: "item-2"
        }, {
            label: <div>{t("About")}</div>,
            target: "item-3"
        }, {
            label: <div>{t("Contacts")}</div>,
            target: "item-4"
        }, {
            label: <div>{t("Login")}</div>,
            target: "item-5"
        } ];
        const containerStyle = {
            width: "100%",
            margin: "100px 0px 100px"
        };
        const useStyles = makeStyles(theme => ({
            root: {
                height: '100vh',
            },
            form: {
                width: '100%', // Fix IE 11 issue.
                marginTop: theme.spacing(1),
            },
            paper: {
                margin: theme.spacing(8, 4),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            submit: {
                margin: theme.spacing(3, 0, 2),
            },
        }));
        const HELLO_QUERY = gql `mutation ($email:String!, $password:String!) { login(email:$email , password: $password){token,user{id, posts{id, title}}}}`;

        const { email, password,id } = this.state;
        return (
            <div>
                <Navbar items={navbarItems} offset={-80} duration={500} delay={0}></Navbar>
                <div style={containerStyle}>
                    <ElementsWrapper items={navbarItems} >
                        <div name="item-1" style={{ width: 800, height: 800}} >
                            <Grid container spacing={6} style={{marginTop:"20%",padding:"40"}}>
                                <Grid item xs={4} sm={5} >
                            <Typography>  <h2 style={{color:"white", marginTop:"5%"}}>{t('New software for metrologist, manufactures and people who wants to know more about measuring technology')}</h2></Typography>
                                </Grid>
                                <Grid item xs={4} sm={5} >
                                <img src={FrontPic}/>
                                </Grid>
                            </Grid>
                        </div>
                        <div name="item-2" style={{ width: 800, height: 800}} >
                            <Typography style={{color:"white"}}><h3>{t('Web application')}</h3></Typography>
                        </div>
                        <div name="item-3" style={{ width: 800, height: 800}} >
                            <Typography style={{color:"white"}}><h3>{t('Metrologists')}</h3></Typography>
                        </div>
                        <div name="item-4" style={{ width: 800, height: 800}}>
                            <div align={"center"} style={{backgroundColor:"white", marginTop:"50px", width:"50%", marginLeft:"30%"}}>
                                <h3>{t("Contact us")}</h3> <br/>
                                <ContactUS/></div>
                        </div>
                        <div name="item-5" style={{ width: 800, height: 800}} >
                            <MuiThemeProvider>

                                <Grid container spacing={6} style={{marginTop:"20%",padding:"40"}}>
                                    <Grid item xs={4} sm={5} style={{backgroundColor:'white'}}>
                                    <FormControl >
                <h3>{t("Login in")}</h3> <br/>

                <label  htmlFor="email">{t('Email')} </label>
                <TextField
                    type="text"
                    value={this.state.email}
                    onChange={e => {
                        this.setState({ email: e.target.value })
                    }}
                />
                < label htmlFor="password">{t('Password')} </label>
                <TextField
                    type="text"
                    value={this.state.password}
                    onChange={e => {
                        this.setState({ password: e.target.value })
                    }}
                /><br/>
                                        <Button link onClick={this.forgotpassword} >{t('Forgot Password')}</Button>
                <Mutation mutation={HELLO_QUERY}  variables={{ email, password,id } } onCompleted={() => this._confirm()}>
                    {mutation => (
                        <RaisedButton onClick={mutation}>{t('Submit')}
                        </RaisedButton>)}
                </Mutation>
                                    </FormControl></Grid>
                                    <Grid item xs={4} sm={1} style={{backgroundColor:'transparent'}}><h5 style={{color:"white"}}>{t("Or")}</h5>
                                    </Grid>
                                    <Grid item xs={4} sm={5} style={{backgroundColor:'white'}}>
                <FormControl >
                    <SignUp />
                </FormControl>

                                    </Grid>
                                </Grid>




                </MuiThemeProvider>

                        </div>



                    </ElementsWrapper></div>


                </div>



        )
    }
    _confirm = async data => {
        const { token } = this.state.login;
        if (this.state.login){
            this._saveUserData(token);
            this.props.history.push(`/user`)}
        else { this.props.history.push('/')}
    };

    _saveUserData = (id,token) => {
        localStorage.setItem(GC_USER_ID, id);
        localStorage.setItem(AUTH_TOKEN, token)
    }
}
export default withTranslation()(Login);

