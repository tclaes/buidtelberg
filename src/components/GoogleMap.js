import React from 'react';
import _ from 'lodash';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    return (
      <section id={_.get(this.props, 'section.section_id')} className="block cta-block bg-accent outer">
        <Map 
          google={this.props.google} zoom={14}
          initialCenter={{ 
            lat: 51.023577, 
            lng: 5.394429
          }}
        >

          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
        </Map>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCtIA6JeBJsc0QEUBOljVPd2wIshSkAUFU")
})(MapContainer)