'use strict'
var ranNum = ranCxCount();
function cxData(store, hour, cxNum) {
  this.store = store;
  this.hour = hour;
  this.cxNum = cxNum;
}

function makeRoe(item) {
  var newRowE1 = document.createElement('tr');

  var itemDataE1 = document.createElement('td');
  itemDataE1.textContent = cxData.store;
  newRowE1.appendChild(itemDataE1);

  var priceDataE1 = document.createElement('td')
  priceDataE1.textContent = cxData.hour;
  newRowE1.appendChild(priceDataE1);

  var colorE1 = document.createElement('td');
  colorE1.textContent = item.color;
  newRowE1.appendChild(colorE1);

  tableBodyE1.appendChild(newRowE1);
}

function ranCxCount () {
  var ranCxCountPerHour = Math.floor(Math.random() * 20);
 return ranCxCountPerHour;
}
