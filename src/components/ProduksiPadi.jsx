import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import MyMap from '../components/MyMap';
import Legend from './Legend';
import LoadKabTask from '../tasks/LoadKabTask';
import 'leaflet/dist/leaflet.css';
import './MyMap.css';

const Indramayu = () => {
  const [kabupaten, setKabupaten] = useState([]);
  const legendItems = [...legendItems];

  const load = () => {
    const loadKabTask = new LoadKabTask();
    loadKabTask.load(setKabupaten);
  };

  useEffect(load, []); //page load we tell it that it will track

  return (
    <div>
      {kabupaten.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <MyMap kabupaten={kabupaten} />
          <Legend legenItems={legendItems} />
        </div>
      )}
    </div>
  );
};

export default Indramayu;
