import React, {Component} from 'react';

import gql from "graphql-tag";
import {AUTH_TOKEN, GC_USER_ID} from "./constants";
import {Mutation} from 'react-apollo'
import history from './history';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import {withTranslation} from "react-i18next";



class SignUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:'',
            signup:true,
            name:'',
            companyName:"",

        };

    }


    render(){
        const SIGNUP_MUTATION = gql `mutation ($email: String!, $password: String!, $name: String!,$companyName:String){signup(email:$email , password: $password,name:$name,companyName:$companyName  ){token}}`;
        const { email, password,name,companyName } = this.state;
        const userId = localStorage.getItem(GC_USER_ID);
        const { t } = this.props;
        return (
            <div>
                <FormControl >
            <h3>{t("Registration")}</h3><br/>
                <MuiThemeProvider>
       <label  htmlFor="email">{t("Email")} </label>
                    <TextField
                        type="text"
                        value={this.state.email}
                        onChange={e => {
                            this.setState({ email: e.target.value })
                        }}
                        required
                    />
       < label htmlFor="password">{t("Password")} </label>
                    <TextField
                        type="text"
                        value={this.state.password}
                        onChange={e => {
                            this.setState({ password: e.target.value })
                        }} required
                    />
       <label  htmlFor="name">{t("Name")} </label>
                    <TextField
                        type="text"
                        value={this.state.name}
                        onChange={e => {
                            this.setState({ name: e.target.value })
                        }}
                    />
                    <label  htmlFor="companyName">{t("Company Name")} </label>
                    <TextField
                        type="text"
                        value={this.state.companyName}
                        onChange={e => {
                            this.setState({ companyName: e.target.value })
                        }}
                        required
                    /><br/>
                    <Mutation mutation={SIGNUP_MUTATION}  variables={{ email, password, name,companyName } } onCompleted={() => this._confirm()}>
                        {signup => (
                            <RaisedButton onClick={signup}>{t("Submit")} </RaisedButton>)}
                    </Mutation>


                </MuiThemeProvider> </FormControl>
            </div>
        );
    }

    _confirm = async data => {
        const {id, token} = this.state.signup;

        this._saveUserData(id, token);
        this.props.history.push(`/`)
    };

    _saveUserData = (id,token) => {
        localStorage.setItem(AUTH_TOKEN, token);
        localStorage.setItem(GC_USER_ID, id);
    }
}
export default  withTranslation()(SignUp)
