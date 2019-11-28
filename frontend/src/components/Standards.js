
import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import { withTranslation} from 'react-i18next';
import LinearProgress from '@material-ui/core/LinearProgress';

import i18n from "../menu/translation/i18n";




const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
        color:"linear-gradient(to right,#000222, rgba(23, 20, 61, 0.96),  #252529)"
    },
}));


const GET_Device = gql`query { allDevice {id name_EN name_UA  module category}}`;


function Standards({t}){
    const classes = useStyles();
    const [completed, setCompleted] = React.useState(0);
    React.useEffect(() => {
        function progress() {
            setCompleted(oldCompleted => {
                if (oldCompleted === 100) {
                    return 0;}
                const diff = Math.random() * 10;
                return Math.min(oldCompleted + diff, 100);
            });}
        const timer = setInterval(progress, 500);
        return () => {
            clearInterval(timer);
        };
    }, [1]);
    return (
                    <Query query={GET_Device} >
                            {( {loading, error, data} ) =>  {
                              if (loading) {return<LinearProgress variant="determinate" value={completed} color="secondary"/>}
                                if (error) { return <div>error</div>;}
                                const devicelist = data.allDevice;

                                if (i18n.language === "ua" )  {
                                return(
                                    <div><Table className={classes.table} aria-label="customized table">
                                        <TableHead aria-label="sticky table">
                                            <TableRow >
                                                <StyledTableCell align="right">{t('Device')}</StyledTableCell>
                                                <StyledTableCell align="right">{t('Technical Reglament')}</StyledTableCell>
                                                <StyledTableCell align="right">{t('Category')}</StyledTableCell>
                                                <StyledTableCell align="right">{t('Module')}</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                               {devicelist.map(device =>  <TableCell key={device.id} lign="center">{device.name_UA}</TableCell>)}
                                                {devicelist.map(device =>  <TableCell key={device.id} lign="center">{device.category}</TableCell>)}
                                                {devicelist.map(device =>  <TableCell key={device.id} lign="center">{device.module}</TableCell>)}
                                            </TableRow>   </TableBody>
                                    </Table>
                                    </div>)}




                                if (i18n.language === "en"){
                                   return(
                                       <div><Table className={classes.table} aria-label="customized table">
                                    <TableHead aria-label="sticky table">
                                    <TableRow >
                                    <StyledTableCell align="right">{t('Device')}</StyledTableCell>
                                    <StyledTableCell align="right">{t('Technical Reglament')}</StyledTableCell>
                                    <StyledTableCell align="right">{t('Category')}</StyledTableCell>
                                    <StyledTableCell align="right">{t('Module')}</StyledTableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    <tbody>
                                    <StyledTableRow>
                                    <tr>   <StyledTableCell component="th" scope="row" ></StyledTableCell></tr>{devicelist.map(device => <tr><StyledTableCell key={device.id} lign="right">{device.name_EN}</StyledTableCell></tr>)}</StyledTableRow>
                                    </tbody>
                                    </TableBody>
                                       </Table></div>)}
                            else return null}
                            }
                        </Query>



    );

}

export default withTranslation()(Standards);