import React from 'react';
import _ from 'lodash';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import {markdownify} from "../utils";

export class MapContainer extends React.Component {
  render() {
    let section = _.get(this.props, 'section');

    const style = {
      display: 'flex',
      'justify-content': 'center',
      height: '500px',
      margin: '0 auto',
      maxWidth: '500px',
      position: 'relative',
    };

    return (
      <section id={_.get(this.props, 'section.section_id')} className="block text-block outer">
        <div className="inner flex">
          <div className="block-content inner-small">
            {markdownify(_.get(section, 'content'))}
          </div>
          <div className="block maps">
            <Map
              google={this.props.google}
              zoom={14}
              style={style}
              initialCenter={{
                lat: 51.023577,
                lng: 5.394429
              }}
            >
              <Marker name={'Current location'} />
            </Map>
          </div>
        </div>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCtIA6JeBJsc0QEUBOljVPd2wIshSkAUFU")
})(MapContainer)
