import React from 'react';
import {Grid, makeStyles, Typography} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import {withTranslation} from "react-i18next";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',

    },
}));
function AssessmentTheory({t}){
    const posts={
        title: "",
        excerpt:""


    };
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Paper style={{backgroundColor:"white"}}>
                <Typography variant="h5" component="h3" >
                    {t('Terminology')}<br/></Typography>
                <Typography align={"justify"} style={{marginLeft:"40px"}}>
                    {t('Measuring Instrument is')}<br/>
                    {t('Errors')}<br/>
                    {t('Calibration')}<br/>
                    {t('Fault')}<br/>
                    {t('Test')}<br/>
                    {t('Test procedure')}<br/>
                    {t('Test program')}<br/>
                </Typography>

            </Paper>



        </div>



    )


}
export default withTranslation()(AssessmentTheory)
