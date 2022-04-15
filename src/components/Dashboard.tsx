import React, { Component } from 'react';
import { Divider, Grid, Paper, Typography } from '@mui/material';
import TelemetryStatusList from './telemetry/TelemetryStatusList';
import ServiceStatusList from './services/ServiceStatusList';

class Dashboard extends Component {

    render() {
        return (
            <>
              <Typography variant={"h4"}>
                  ComNet
              </Typography>
              <Paper
                  elevation={3}
                  sx={{
                      height: '40%',
                      width: '40%',
                  }}
              >
                  <Grid container>
                      <Grid item sx={{width:'70%'}}>
                          <TelemetryStatusList />
                      </Grid>
                      <Divider orientation={"vertical"} variant={"middle"} flexItem />
                      <Grid item>
                          <ServiceStatusList />
                      </Grid>
                  </Grid>
              </Paper>
            </>
        );
    }
}

export default Dashboard;

