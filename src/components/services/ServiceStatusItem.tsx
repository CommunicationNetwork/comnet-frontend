import React, { Component } from 'react';
import { Typography } from '@mui/material';

interface ServiceStatusItemProps {
    name: String;
    online: boolean;
}

class ServiceStatusItem extends Component<ServiceStatusItemProps> {

    render() {
        return (
            <>
                {this.props.online &&
                    <Typography>
                        {this.props.name}: Active
                    </Typography>
                }
                {!this.props.online &&
                    <Typography>
                        {this.props.name}: Inactive
                    </Typography>
                }
            </>
        );
    }
}

export default ServiceStatusItem;