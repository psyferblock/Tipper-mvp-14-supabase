import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import React from "react";

export function GoogleMaps(props) {
  return (
    <Map google={props.google} zoom={14}>
      <Marker onClick={onMarkerClick} name={"Current location"} />

      <InfoWindow onClose={this.onInfoWindowClose}>
        {/* <div>
          <h1>{this.state.selectedPlace.name}</h1>
        </div> */}
      </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: YOUR_GOOGLE_API_KEY_GOES_HERE,
})(GoogleMaps);
