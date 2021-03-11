
import React from 'react';
import Grid from '@material-ui/core/Grid';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Hidden from '@material-ui/core/Hidden';
const Header = ({color}) => {
    
    return (
        <Hidden smUp>
            <div >
            <div style={{ backgroundColor:color[1], width:"100%", borderBottom: "1px solid lightgray"}}>
                <Grid container spacing={0}>
                    <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor:color[1]}} ></Grid>
                    <Grid item container xs={12} sm={8} md={8} lg={8} style={{borderTop: "none" + color[2]
                        
                        , borderRadius:"0px 0px 0px 0px ", backgroundColor:"#eaeae3"}}>
                        <Grid item xs={8} sm={9} md={10} lg={10}></Grid>
                        <Grid item xs={4} sm={3} md={2} lg={2} style={{textAlign:"right"}}>
                            Tài khoản
                            <AccountBoxIcon style={{color: "darkred", position:"static", verticalAlign:"bottom", }}/></Grid>
                        </Grid>
                    <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor:color[1]}} >
                    </Grid>
                </Grid>
            </div>
            <Grid container spacing={0} elevation={5}  >

                <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor:color[1]}}></Grid>
                <Grid item xs={12} sm={8} md={8} lg={8} style={{backgroundColor: "#eaeae3", textAlign: "center"
                    }}>
                    <b style={{color: "darkred", fontSize: "40px", marginLeft: "10px", fontFamily: "Akaya Telivigala"}}>Bkow.XY a-{'>'}Z</b><br/>
                    <b style={ {marginLeft:"10px", fontSize: "20px"}}>Be Better at Mechanics</b> 
                </Grid>
                
                <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor: color[1]}}></Grid>
                <Grid item xs={false} sm={2} md={2} lg={2}  style={{backgroundColor: color[1], minHeight:"10px"}}></Grid>
                <Grid item xs={12} sm={8} md={8} lg={8} style={{backgroundColor: "#eaeae3", minHeight:"20px",
                     }}></Grid>
                <Grid item xs={false} sm={2} md={2} lg={2} style={{backgroundColor: color[1], minHeight:"10px"}}></Grid>
            </Grid>
        </div>
        </Hidden>
        
    )
}

export default Header
