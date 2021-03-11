import React from 'react'
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
const useStyles = makeStyles({
    SideBar: {
        '&:Hover': {
            backgroundColor: "red"
            
        }
        
        }
  })
const SideBar = ({toggleDrawer}) => {
    const classes = useStyles();
    return (
        <Hidden mdUp>
            <Grid item container xs={1} sm={1} md={1} lg={1} style={{textAlign: "left", color: "white"}}  >
                <MenuIcon className={classes.SideBar} style={{ borderRight: "2px solid white"}} onClick={toggleDrawer("left", true)} />    
            </Grid>
        </Hidden>
    )
}

export default SideBar
