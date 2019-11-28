import React, { Component } from 'react';
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import gql from 'graphql-tag';
import{Mutation} from 'react-apollo';
import RaisedButton from "material-ui/RaisedButton";
import {GC_USER_ID, RESET_TOKEN, EMAIL, USER_EMAIL} from "../constants";
import Button from "@material-ui/core/Button";
import {withTranslation} from "react-i18next";


class ForgotPassword extends Component{

    constructor(props) {
        super(props);

        this.state = {
            triggerPasswordReset: true,
            email:"",

        }
    }
    render() {
        const FORGOT_PASSWORD = gql `mutation ($email:String!) { triggerPasswordReset(email:$email){ok, resetToken,email}}`;
        const { t } = this.props;
        const { email} = this.state;
        return(
            <div style={{backgroundColor:"white", width:"40%"}}>
                <FormControl >
                    <h3 style={{marginTop:"10%"}}>{t('Your email')}</h3> <br/>

                    < label htmlFor="password">{t('Email')} </label>
                    <TextField type="text"  value={this.state.email} onChange={e => {this.setState({ email: e.target.value })
                    }}
                    /><br/>
                    <Mutation mutation={FORGOT_PASSWORD}  variables={{ email } } onCompleted={() => this._confirm()}>
                        {mutation => (
                            <Button onClick={mutation} style={{marginBottom:"10%"}}>{t('Submit')}
                            </Button>)}
                    </Mutation>
                </FormControl>


            </div>

        )

    }
    _confirm = async data => {
        const { resetToken } = this.state.triggerPasswordReset;
        const { email } = this.state.triggerPasswordReset;
        console.log(resetToken);
        console.log(email);
        this._saveUserData(email,resetToken);

    };

    _saveUserData = (email,resetToken) => {
        console.log(email);
        localStorage.setItem(USER_EMAIL,email);
        localStorage.setItem(RESET_TOKEN, resetToken);
        console.log(resetToken)
    }
}
export default  withTranslation()(ForgotPassword)