import React from 'react';
import _ from 'lodash';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import {markdownify} from "../utils";

export class MapContainer extends React.Component {
  render() {
    let section = _.get(this.props, 'section');
    return (
      <section id={_.get(this.props, 'section.section_id')} className="block cta-block bg-accent outer">
        <div className="block-content inner-medium">
          {markdownify(_.get(section, 'content'))}
        </div>
        <Map 
          google={this.props.google} zoom={14}
          initialCenter={{ 
            lat: 51.023577, 
            lng: 5.394429
          }}
        >
          <Marker name={'Current location'} />
        </Map>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCtIA6JeBJsc0QEUBOljVPd2wIshSkAUFU")
})(MapContainer)
