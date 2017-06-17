'use strict'
debugger;

var ranNum = ranCxCount();
var table = document.getElementById('generatedTable');
var createTHead = document.createElement('th');
var createTRow = document.createElement('tr');
var createTData = document.createElement('td');

var storeData = {
  name: ['1st and Pike', 'Seatac Airport', 'Seattle Center', 'Capital Hill', 'Alki'],
  cxVisit: ranNum,
  hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']
}
for (var i = 0; i <= storeData.name.length; i++){
  for (var j = 0; j<= storeData.hour.length; j++){
    var storeName = storeData.name(i);
    var ranCxNumber = storeData.cxVisit;
    var storeHour = storeData.hour(j);
    console.log(storeName, ranCxNumber, storeHour);
  }
}


function ranCxCount () {
  var ranCxCountPerHour = Math.floor(Math.random() * 20);
 return ranCxCountPerHour;
}
