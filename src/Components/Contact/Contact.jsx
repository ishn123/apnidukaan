import GoogleMapReact from 'google-map-react';
import React from 'react'

const Contact = () => {
    const props = {
        center:{
            lat:30.10639082141688,
            long:78.29367490785201
        },
        zoom:11
    }
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )
}

export default Contact