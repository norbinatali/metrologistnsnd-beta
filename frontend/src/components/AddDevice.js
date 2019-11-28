import React from "react";
import FormControl from '@material-ui/core/FormControl';
import {withTranslation} from "react-i18next";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import RaisedButton from 'material-ui/RaisedButton';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor:"white"
    },

}));
function AddDevice ({t}) {
const classes = useStyles();


    return(
        <div className={classes.root}>
            <FormControl>
                <label  htmlFor="name">{t('Name')}</label>
                <TextField
                    type="text"
                    value=""

                />

                <label  htmlFor="brand">{t('Brand')}</label>
                <TextField
                    type="text"
                    value=""

                />

                <label  htmlFor="type">{t('Type')}</label>
                <TextField
                    type="text"
                    value=""

                />

                <label  htmlFor="tr">{t('TR')}</label>
                <TextField
                    type="text"
                    value=""

                />

                <label  htmlFor="module">{t('Module')}</label>
                <TextField
                    type="text"
                    value=""

                />

                <label  htmlFor="calibration">{t('Calibration Date')}</label>
                <TextField
                    type="text"
                    value=""

                />

                <Button style={{backgroundColor:"rgba(0,1,47,0.84)", color:"white", marginBottom:"10%"}}>{t('Add')}</Button>
            </FormControl>

        </div>
    )
}
export default withTranslation()(AddDevice)