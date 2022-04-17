import React, { Component } from 'react';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import TelemetryStatusTable from './telemetry/TelemetryStatusTable';
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
                  component={Grid}
                  sx={{
                      height: '40%',
                      width: '40%',
                  }}
                  container
              >
                      <Grid item xs={8}>
                          <TelemetryStatusTable />
                      </Grid>
                      <Divider orientation={"vertical"} flexItem />
                      <Grid textAlign={"center"} item xs={3.9}>
                          <Typography marginTop={3} variant={"h5"}>Service Status</Typography>
                          <Box marginTop={3} display={"flex"} justifyContent={"center"}>
                              <ServiceStatusList />
                          </Box>
                      </Grid>
              </Paper>
            </>
        );
    }
}

export default Dashboard;

