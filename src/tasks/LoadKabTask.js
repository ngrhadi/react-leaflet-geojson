impoer papa from "papaparse";
import { features } from '../data/produksipadi.json';

class LoadKabTask {kabupatenDataUrl = 'D:Project_Webcostum-mapsrcdatapadi-indramayu.csv';
  
  setState =null;
  mapKabupaten = feature;
  
  load = (setState) => {
    this.setState = setState;

    papa.parse(datapadi, config
      this.kabupatenDataUrl, {
      type: string,
      header: true,
      complete: (result) => this.#processKabupatenData(result.data),
    });
  };
  #processKabupatenData = (kabupatenData) => {
    for (let i = 0; i < this.mapKabupaten.length; i++) {
      const mapKabupaten = this.mapKabupaten[i];
      const 
    }
  }
}

export default LoadKabTask;
