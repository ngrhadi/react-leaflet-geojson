import React, { Component } from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import mapData from './../data/countries.json';
import 'leaflet/dist/leaflet.css';
import './MyMap.css';

class MyMap extends Component {
  state = {};

  componentDidMount() {
    console.log(mapData);
  }
  countryStyle = {
    fillColor: 'white',
    fillOpacity: 1,
    color: '#128383',
    weight: 1,
  };

  render() {
    return (
      <div>
        <MapContainer style={{ height: '100vh' }} className="markercluster-map" center={[-6.90931, 107.607]} zoom={3} maxZoom={18}>
          <GeoJSON style={this.countryStyle} data={mapData.features} />
        </MapContainer>
      </div>
    );
  }
}

export default MyMap;
