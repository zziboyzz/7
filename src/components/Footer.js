import React from 'react'
import Grid from '@material-ui/core/Grid';

const Footer = ({color}) => {
    return (
        <div style={{backgroundColor: "red", position: "sticky",top:"0", 
    }}>
            <Grid container spacing={0}>
                <Grid item xs={false} sm={false} md={false} lg={false} style={{backgroundColor: color[1], color:"white", }}>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} style={{backgroundColor: color[2], color:"white", textAlign: "center"}}>
                    xyaz_team
                </Grid>
                <Grid item xs={false} sm={false} md={false} lg={false} style={{backgroundColor: color[1],color:"white"}}>
                        
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer