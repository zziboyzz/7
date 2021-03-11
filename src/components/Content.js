import React from 'react';
import {Switch, Route } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import { makeStyles } from '@material-ui/core/styles';
import NotificationContent from "./NotificationContent";
import LessonContent from './LessonContent';
import DocumentContent from './DocumentContent';
import ScoreCalcula from './ScoreCalcula';

// const useStyles = makeStyles({
//     root: (props) =>({
//         width: '100%',
//         backgroundColor: props[6],
//         minHeight: "1000px",
//         marginTop: "0",
//         // borderLeft: "1px solid" + props[2],
//         // borderRight: "1px solid" + props[2]
//     }),
  
//   })
  
  export default function Content({onClick, color}) {
    
    return (

        <div >
            <Grid container spacing={0} >
            <Grid item xs={false} sm={false} md={false} lg={false} style={{backgroundColor:color[1]}} >                        
                </Grid>
                <Grid item container xs={12} sm={12} md={12} lg={12} style={{paddingLeft: "0px",}} >
                    <Switch>
                        <Route exact path="/" component={NotificationContent}  />
                        <Route  path="/bai_giang" component={LessonContent} />
                        <Route  path="/tai_lieu" component={DocumentContent} />
                        <Route  path="/tinh_diem" component={ScoreCalcula} />
                    </Switch>

                    {/* {switchPage()} */}
                        
                </Grid>
                    <Grid item xs={false} sm={false} md={false} lg={false} style={{backgroundColor:color[1]}}>

                    </Grid>
            </Grid>
        </div>

    )
}

