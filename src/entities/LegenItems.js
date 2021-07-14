import LegendItem from './LegendItem';

const legendItems = [
  new LegendItem('150,000 +', '#47fd56', 'black'),
  new LegendItem('120,000 - 140,999', '#81fd47', 'black'),
  new LegendItem('70.000 - 110,999', '#bafd47', 'black'),
  new LegendItem('40,000 - 60,999', '#d6fd47', 'black'),
  new LegendItem('0 - 30,999', '#FDFC47', 'black'),
  new LegendItem('No Data', '#ffffff', 'black'),
];

export default legendItems;

/*
#FDFC47 // yellow
#d6fd47 
#bafd47
#81fd47
#47fd56 // green
*/
