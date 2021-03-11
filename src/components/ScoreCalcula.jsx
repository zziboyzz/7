import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TinhDiem from "./TinhDiem";

const useStyles = makeStyles({
    root: (props) =>({
        width: '100%',
        backgroundColor: props[6],
        minHeight: "1000px",
        marginTop: "0",
        // borderLeft: "1px solid" + props[2],
        // borderRight: "1px solid" + props[2]
    }),
  
  })
const ScoreCalcula = ({color}) => {
    const classes = useStyles()
    return (
        <Paper className={classes.root} square style={{backgroundColor: "lightgray", }}  >
            <TinhDiem color = {color}/>
        </Paper>

    )
}

export default ScoreCalcula
