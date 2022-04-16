import React, { Component } from 'react';
import { Chip } from '@mui/material';

interface ServiceStatusItemProps {
    name: String;
    online: boolean;
}

class ServiceStatusItem extends Component<ServiceStatusItemProps> {

    render() {
        return (
                <>
                    {this.props.online &&
                        <Chip label={this.props.name} color="success" />
                    }
                    {!this.props.online &&
                        <Chip label={this.props.name} color="error" />
                    }
                </>
        );
    }
}

export default ServiceStatusItem;