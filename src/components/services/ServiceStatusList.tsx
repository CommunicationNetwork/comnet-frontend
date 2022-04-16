import React, { Component } from 'react';
import ServiceStatusResponse from '../../api/services/ServiceStatusModels';
import ServicesAPI from '../../api/services/ServicesAPI';
import ServiceStatusItem from './ServiceStatusItem';

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
        setInterval(async () => {
            this.setState({
                serviceStatus: await ServicesAPI.getServiceStatus()
            });
        }, 10000);
    }

    render() {
        return (
            <>
                <ServiceStatusItem name={'Backend'} online={this.state.serviceStatus.backend} />
                <ServiceStatusItem name={'Proxy'} online={this.state.serviceStatus.proxy} />
                <ServiceStatusItem name={'Flight Computer'} online={this.state.serviceStatus.flightComputer} />
            </>
        );
    }
}

export default ServiceStatusList