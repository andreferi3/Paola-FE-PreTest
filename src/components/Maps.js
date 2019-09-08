import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const mapStyles = {
    overflow: 'hidden',
    width: '200px',
    height: '150px'
}

export class Maps extends Component {
    render() {
        return (
            <div style={{position: 'relative'}}>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: -1.2884,
                        lng: 36.8233
                    }}
                >
                    <Marker position={{ lat: -1.2884, lng: 36.8233 }} />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyC70DmO62ZyxUFMb_jhNx2dOpPUQoaZS5o' })(Maps)