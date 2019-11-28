import React, { Component } from 'react';
import {withTranslation} from "react-i18next";
import gql from "graphql-tag";
import FormControl from "@material-ui/core/FormControl";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import RaisedButton from "material-ui/RaisedButton";
import {AUTH_TOKEN} from "../constants";
import {Mutation} from 'react-apollo'

class ContactUS extends Component {
    constructor(props) {
        super(props);

        this.state = {
           sendMail:true,
            from:"",
            subject:"",
            text:"",
            classes: true,

        };

    }
render() {
    const { t } = this.props;
   const LETTER_MUTATION = gql`mutation ($from: String!, $text: String!, $subject: String!){createNewLetter(text:$text , subject: $subject,from:$from){text,subject,from}}`
    const { from, subject,text } = this.state;
    return (
        <div >
            <FormControl  >
                <MuiThemeProvider>
                    <label  htmlFor="from">{t("Email")} </label>
                    <TextField type="text" value={this.state.form} onChange={e => {this.setState({ form: e.target.value })}} required/>
                    < label htmlFor="subject">{t("Subject")} </label>
                    <TextField type="text" value={this.state.subject} onChange={e => {this.setState({ subject: e.target.value })}} required
                    />
                    <label  htmlFor="text">{t("Text")} </label>
                    <TextField  id="outlined-multiline-static" multiline  rows="5" type="text"  margin="normal" variant="outlined" value={this.state.text}  onChange={e => {this.setState({ text: e.target.value })}}
                    /><br/>
                    <Mutation mutation={LETTER_MUTATION}  variables={{ from,subject, text } } onCompleted={() => this._confirm()}>
                        {send => (
                            <RaisedButton style={{marginBottom:"10%"}} onClick={send}>{t("Send")} </RaisedButton>)}
                    </Mutation>


                </MuiThemeProvider>
            </FormControl>
        </div>
    )

}
    _confirm = async data => {
        const { token } = this.state.sendMail;

        this._saveLetterData(token);

    };

    _saveLetterData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}
export default withTranslation()(ContactUS)