import React, { Component } from 'react';
import ServiceStatusResponse from '../../model/ServicesModel';
import ServicesService from '../../api/services/ServicesService';
import ServiceStatusItem from './ServiceStatusItem';
import { Stack } from '@mui/material';

interface SerivceStatusListState {
    serviceStatus: ServiceStatusResponse;
}

class ServiceStatusList extends Component<any, SerivceStatusListState> {

    constructor(props: any) {
        super(props)
        this.state = {
                serviceStatus: {
                    backend: false,
                    proxy: false,
                    flightComputer: false
                }
        }

    }

    async componentDidMount() {
        this.setState({
            serviceStatus: await ServicesService.getServiceStatus()
        });
        setInterval(async () => {
            this.setState({
                serviceStatus: await ServicesService.getServiceStatus()
            });
        }, 5000);
    }

    render() {
        return (
            <Stack direction={"column"} spacing={1} width={"50%"}>
                <ServiceStatusItem name={'Backend'} online={this.state.serviceStatus.backend} />
                <ServiceStatusItem name={'Proxy'} online={this.state.serviceStatus.proxy} />
                <ServiceStatusItem name={'Flight Computer'} online={this.state.serviceStatus.flightComputer} />
            </Stack>
        );
    }
}

export default ServiceStatusList