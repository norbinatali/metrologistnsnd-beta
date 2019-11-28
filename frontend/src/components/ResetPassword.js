import React, { Component } from 'react';
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import gql from 'graphql-tag';
import{Mutation} from 'react-apollo';
import RaisedButton from "material-ui/RaisedButton";
import {AUTH_TOKEN, GC_USER_ID, RESET_TOKEN, USER_EMAIL} from "../constants";
import Button from "@material-ui/core/Button";
import {withTranslation} from "react-i18next";


class ResetPassword extends Component{
    constructor(props) {
        super(props);
        this.state = {
            passwordReset: true,
            password:"",
            email:"",
            resetToken:"",
        }
    }
    componentDidMount() {
        const urlObj = new URL(window.location.href);
        const email = urlObj.searchParams.get('email');
        const resetToken = urlObj.searchParams.get('resetToken');
        this.setState({email, resetToken});
    }
    render() {
        const RESET_PASSWORD = gql `mutation ($email:String!, $resetToken:String!, $password:String!) { passwordReset(email:$email , password: $password, resetToken: $resetToken){email,name, resetToken}}`;
        const { email, password, resetToken} = this.state;
        const { t } = this.props;
        return(
            <div style={{backgroundColor:"white", width:"40%"}}>
                <FormControl >
                    <h3 style={{marginTop:"10%"}}>{t('Your new password')}</h3> <br/>
                    <label htmlFor="password">{t('Password')} </label>
                    <TextField type="text"  value={this.state.password} onChange={e => {this.setState({ password: e.target.value })
                        }}
                    /><br/>
                    <Mutation mutation={RESET_PASSWORD}  variables={{email, password, resetToken } } onCompleted={() => this._confirm()}>
                        {mutation => (
                            <Button onClick={mutation} style={{marginBottom:"10%"}}>{t('Submit')}
                            </Button>)}
                    </Mutation>
                </FormControl>
            </div>
        )
    }
    _confirm = async () => {
        const {resetToken}= this.state.passwordReset;
        const {email} = this.state.passwordReset;
        console.log(email);
        console.log(resetToken);
            this._saveUserData(email,resetToken);
        };
    _saveUserData = (email,resetToken) => {
        localStorage.getItem(email);
        console.log(email);
        localStorage.getItem(resetToken);
        console.log(resetToken)
    }
}
export default  withTranslation() (ResetPassword)