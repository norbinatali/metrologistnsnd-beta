import React, {Component} from "react";
import {Grid, Typography} from "@material-ui/core";

export default function Documents() {


    return (
        <div style={{display:'flex'}}>

            <div style={{ marginTop: 40, padding: 30 }}>
                <Typography variant="h5" component="h2">History</Typography>
                <div style={{ marginTop: 20, padding: 60 }}>
                    <Grid container spacing={2} justify="center" style={{backgroundColor:"white"}}>
                    </Grid>
                </div>

        </div>
        </div>
    )


}