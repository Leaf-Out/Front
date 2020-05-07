import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
    static defaultProps = {
        center: {
            lat: 5.314474,
            lng: -68.611774
            , 
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '65vh', width: '85%', marginLeft: '7.5%', marginBottom: "2.5%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:'' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={5.314474}
                        lng={-68.611774}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;