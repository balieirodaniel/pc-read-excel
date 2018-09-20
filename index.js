const xlsx = require('xlsx');

var workbook = xlsx.readFile('./demo_vendedores_v2.xlsx');

var result = xlsx.utils.sheet_to_json(workbook.Sheets.Sheet1);


function getLatLong(visit) {
    return {
        lat: visit.Latitud,
        long: visit.Longitud
    };
}

function filterByLoad2(visit){
    return visit['Carga 2'] != undefined;
};

var withLoad2 = result.filter(filterByLoad2);
var latLongs = result.map(getLatLong);

var latLongsWithLoad2 = result
    .filter(filterByLoad2)
    .map(getLatLong);

console.log(latLongsWithLoad2);
