import React from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import mapData from '../data/countries.json';
import mapData2 from '../data/produksipadi.json';
import 'leaflet/dist/leaflet.css';
import './MyMap.css';

const MyMap = ({ ProduksiPadi }) => {
  console.log(mapData);
  console.log(mapData2);
  const countryStyle = {
    fillColor: 'white',
    fillOpacity: 1,
    color: '#128383',
    weight: 1,
  };

  const onEachKab = (kabupaten, layer) => {
    layer.options.fillOpacity = kabupaten.properties.color;
    const name = kabupaten.properties.WADMKC;
    const luasPanen = kabupaten.properties.LUAS_PANEN;
    layer.bindPopup(name + ' ' + luasPanen + ' Ha');
  };

  return (
    <div>
      <MapContainer style={{ height: '90vh' }} className="markercluster-map" zoom={10} maxZoom={18} center={[-6.42021, 108.167633]}>
        <GeoJSON style={countryStyle} data={mapData.features} />
        <GeoJSON style={legendItems} data={mapData2.features} onEachFeature={onEachKab} />
      </MapContainer>
    </div>
  );
};
export default MyMap;
