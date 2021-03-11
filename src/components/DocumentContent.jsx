import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
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
const DocumentContent = () => {
    const classes = useStyles()
    return (
        <Paper className={classes.root} square  style={{ color: "black", textIndent: "50px",
         letterSpacing: "2px", textAlign: "justify"}} >
         ahhahahehehehe
        </Paper>
    )
}

export default DocumentContent
