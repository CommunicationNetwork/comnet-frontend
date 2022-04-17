import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import TelemetryResponse from '../../model/TelemetryModel';


interface TelemetryStatusTableState {
    telemetryData: TelemetryResponse
}

class TelemetryStatusTable extends Component<any, TelemetryStatusTableState> {

    constructor(props: any) {
        super(props);
        this.state = {
            telemetryData: {
                height: 0,
                velocity: 0,
                temperature: 0,
                pressure: 0
            }
        }
    }

    componentDidMount() {
        const webSocket = new WebSocket('ws://localhost:8080/telemetry');
        webSocket.onmessage = (message) => {
            this.setState({
                telemetryData: message.data as TelemetryResponse
            })
        }
    }

    render() {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontWeight: 600}} align={"center"}>Field</TableCell>
                        <TableCell sx={{fontWeight: 600}} align={"center"}>Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align={"center"}>Height</TableCell>
                        <TableCell align={"center"}>{this.state.telemetryData.height} m</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"}>Velocity</TableCell>
                        <TableCell align={"center"}>{this.state.telemetryData.velocity} m/s</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"}>Temperature</TableCell>
                        <TableCell align={"center"}>{this.state.telemetryData.temperature} °C</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"}>Pressure</TableCell>
                        <TableCell align={"center"}>{this.state.telemetryData.pressure} Bar</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}

export default TelemetryStatusTable;