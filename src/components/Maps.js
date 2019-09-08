import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const mapStyles = {
    overflow: 'hidden',
    width: '200px',
    height: '150px'
}

export class Maps extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div style={{position: 'relative'}}>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: this.props.lat,
                        lng: this.props.lng
                    }}
                >
                    <Marker position={{ lat: this.props.lat, lng: this.props.lng }} />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyC70DmO62ZyxUFMb_jhNx2dOpPUQoaZS5o' })(Maps)