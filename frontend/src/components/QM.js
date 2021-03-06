import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {Grid, Typography} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

export default function QM (){
    const posts={
        title: "",
        excerpt:""


    };

    return(
        <div style={{display:'flex'}}>

            <div style={{ marginTop: 40, padding: 30 }}>
                <Typography variant="h5" component="h2">History</Typography>
                <div style={{ marginTop: 20, padding: 60 }}>
                    <Grid container spacing={2} justify="center" style={{backgroundColor:"white"}}>
                        <Grid item>
                            <Card>
                    <CardActionArea>
                        <CardMedia component="img" alt="Contemplative Reptile" height="140" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjowhq8-Bzjsv8_i6dtpKUIMX5mK_guaqyAESfc_VyfONcTgNV&s"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">{posts.title}</Typography>
                            <Typography component="p">{posts.excerpt}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                        </Grid>
                    </Grid>
                </div>

            </div>
        </div>

    )
}