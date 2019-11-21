import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import CurrentLocation from './CurrentLocation'

class MapContainer extends Component {
    constructor() {
        super()
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }
    onMarkerClick = (props, marker, e) =>
    this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    onClose = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
            showingInfoWindow: false,
            activeMarker: null
            });
        }
    }

    render() {
        return (
            <div className="map">
                <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
                <Marker onClick={this.onMarkerClick} name={'You are here'} />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                    <h6>{this.state.selectedPlace.name}</h6>
                    </div>
                </InfoWindow>
                </CurrentLocation>
                </div>
        )
    }
}



    

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCgUB6I0xiTCmko2n5sDWnIBQebcbJ4tuM')
})(MapContainer);
