import React, { Component } from 'react';
import { Stack } from '@mui/material';
import ServiceStatusItem from 'components/services/ServiceStatusItem';
import ServicesService from 'api/services/ServicesService';
import ServiceStatusResponse from 'model/ServicesModel';

interface SerivceStatusListState {
    serviceStatus: ServiceStatusResponse;
    ready: boolean;
}

class ServiceStatusList extends Component<any, SerivceStatusListState> {

    constructor(props: any) {
        super(props)
        this.state = {
            serviceStatus: {
                backend: false,
                proxy: false,
                flightComputer: false
            },
            ready: false
        }
    }

    componentDidMount() {
        ServicesService.getServiceStatus().subscribe(response => {
            this.setState({
                serviceStatus: response,
                ready: true
            })
        });
        setInterval(() => {
            ServicesService.getServiceStatus().subscribe(response => {
                this.setState({
                    serviceStatus: response,
                })
            });
        }, 5000);
    }

    render() {
        return (
            <Stack direction={"column"} spacing={1} width={"50%"}>
                {this.state.ready && (
                    <>
                        <ServiceStatusItem name={'Backend'} online={this.state.serviceStatus.backend} />
                        <ServiceStatusItem name={'Proxy'} online={this.state.serviceStatus.proxy} />
                        <ServiceStatusItem name={'Flight Computer'} online={this.state.serviceStatus.flightComputer} />
                    </>
                )}

            </Stack>
        );
    }
}

export default ServiceStatusList