'use strict';

let storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let storeLocations = [];
let grandTotalCookies = 0;
let cookieSection = document.getElementById('cookie-table');

function randomCustomer(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function locationCookiesByHour(index){
  let total = 0;
  for(let i = 0; i < storeLocations.length; i++){
    total += storeLocations[i].cookiesPerHour[index];
  }
  grandTotalCookies += total;
  return total;
}

function Location(name, minCustomers, maxCustomers, avgCookies){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  storeLocations.push(this);
}

Location.prototype.getCustomers = function(){
  for(let i = 0; i < storeHours.length; i++){
    this.customersPerHour.push(randomCustomer(this.minCustomers,this.maxCustomers));
  }
};

Location.prototype.storeCookieData = function(){
  for(let i = 0; i < storeHours.length; i++){
    let cookieSales = Math.floor(this.avgCookies * this.customersPerHour[i]);
    this.cookiesPerHour.push(cookieSales);
    this.totalCookies += cookieSales;
  }
};

Location.prototype.render = function(){
  let tableElem = document.createElement('table');
  cookieSection.appendChild(tableElem);

  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let thElem1 = document.createElement('th');
  thElem1.textContent = this.name;
  row1.appendChild(thElem1);

  for(let i = 0; i < storeHours.length; i++){
    let tdElem = document.createElement('td');
    tdElem.textContent = `${this.cookiesPerHour[i]}`;
    row1.appendChild(tdElem);
  }

  let tdElem = document.createElement('td');
  tdElem.textContent = `${this.totalCookies}`;
  row1.appendChild(tdElem);
};

new Location('Seattle', 23, 65, 6.3);
new Location('Tokyo', 3, 24, 1.2);
new Location('Dubai', 11, 38, 3.7);
new Location('Paris', 20, 38, 2.3);
new Location('Lima', 2, 16, 4.6);

function headerRow(){
  let tableElem = document.createElement('table');
  cookieSection.appendChild(tableElem);

  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let blankCell = document.createElement('td');
  row1.appendChild(blankCell);

  for(let i = 0; i < storeHours.length; i++){
    let timeElem = document.createElement('th');
    timeElem.textContent = `${storeHours[i]}`;
    row1.appendChild(timeElem);
  }

  let totalCell = document.createElement('th');
  totalCell.textContent = 'Daily Location Total';
  row1.appendChild(totalCell);
}

function footerRow(){
  let tableElem = document.createElement('table');
  cookieSection.appendChild(tableElem);

  let row1 = document.createElement('tr');
  tableElem.appendChild(row1);

  let totalElem = document.createElement('th');
  totalElem.textContent = 'Totals';
  row1.appendChild(totalElem);

  for(let i = 0; i < storeHours.length; i++){
    let totalHourElem = document.createElement('td');
    totalHourElem.textContent = `${locationCookiesByHour(i)}`;
    row1.appendChild(totalHourElem);
  }

  let grandTotalElem = document.createElement('td');
  grandTotalElem.textContent = `${grandTotalCookies}`;
  row1.appendChild(grandTotalElem);
}

function renderAllLocations(){
  for(let i = 0; i < storeLocations.length; i++){
    storeLocations[i].getCustomers();
    storeLocations[i].storeCookieData();
    storeLocations[i].render();
  }
}

headerRow();
renderAllLocations();
footerRow();

// let seattle = {
//   name: 'Seattle',
//   minCustomers: 23,
//   maxCustomers: 65,
//   avgCookies: 6.3,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   getCustomers: function(){
//     for(let i = 0; i < storeHours.length; i++){
//       this.customersPerHour.push(randomCustomer(this.minCustomers,this.maxCustomers));
//     }
//   },
//   storeCookieData: function(){
//     for(let i = 0; i < storeHours.length; i++){
//       let cookieSales = Math.floor(this.avgCookies * this.customersPerHour[i]);
//       this.cookiesPerHour.push(cookieSales);
//       this.totalCookies += cookieSales;
//     }
//   },
//   //DOM Manipulation
//   render: function(){
//     let articleElem = document.createElement('article');
//     cookieSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < storeHours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.totalCookies} cookies`;
//     ulElem.appendChild(liElem);
//   }
// };

// seattle.getCustomers();
// seattle.storeCookieData();
// seattle.render();

// let tokyo = {
//   name: 'Tokyo',
//   minCustomers: 3,
//   maxCustomers: 24,
//   avgCookies: 1.2,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   getCustomers: function(){
//     for(let i = 0; i < 14; i++){
//       this.customersPerHour.push(randomCustomer(this.minCustomers,this.maxCustomers));
//     }
//   },
//   storeCookieData: function(){
//     for(let i = 0; i < 14; i++){
//       let cookieSales = Math.floor(this.avgCookies * this.customersPerHour[i]);
//       this.cookiesPerHour.push(cookieSales);
//       this.totalCookies += cookieSales;
//     }
//   },
//   //DOM Manipulation
//   render: function(){
//     let articleElem = document.createElement('article');
//     cookieSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < storeHours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.totalCookies} cookies`;
//     ulElem.appendChild(liElem);
//   }
// };

// tokyo.getCustomers();
// tokyo.storeCookieData();
// tokyo.render();

// let dubai = {
//   name: 'Dubai',
//   minCustomers: 11,
//   maxCustomers: 38,
//   avgCookies: 3.7,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   getCustomers: function(){
//     for(let i = 0; i < 14; i++){
//       this.customersPerHour.push(randomCustomer(this.minCustomers,this.maxCustomers));
//     }
//   },
//   storeCookieData: function(){
//     for(let i = 0; i < 14; i++){
//       let cookieSales = Math.floor(this.avgCookies * this.customersPerHour[i]);
//       this.cookiesPerHour.push(cookieSales);
//       this.totalCookies += cookieSales;
//     }
//   },
//   //DOM Manipulation
//   render: function(){
//     let articleElem = document.createElement('article');
//     cookieSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < storeHours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.totalCookies} cookies`;
//     ulElem.appendChild(liElem);
//   }
// };

// dubai.getCustomers();
// dubai.storeCookieData();
// dubai.render();

// let paris = {
//   name: 'Paris',
//   minCustomers: 20,
//   maxCustomers: 38,
//   avgCookies: 2.3,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   getCustomers: function(){
//     for(let i = 0; i < 14; i++){
//       this.customersPerHour.push(randomCustomer(this.minCustomers,this.maxCustomers));
//     }
//   },
//   storeCookieData: function(){
//     for(let i = 0; i < 14; i++){
//       let cookieSales = Math.floor(this.avgCookies * this.customersPerHour[i]);
//       this.cookiesPerHour.push(cookieSales);
//       this.totalCookies += cookieSales;
//     }
//   },
//   //DOM Manipulation
//   render: function(){
//     let articleElem = document.createElement('article');
//     cookieSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < storeHours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.totalCookies} cookies`;
//     ulElem.appendChild(liElem);
//   }
// };

// paris.getCustomers();
// paris.storeCookieData();
// paris.render();

// let lima = {
//   name: 'Lima',
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookies: 4.6,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,
//   getCustomers: function(){
//     for(let i = 0; i < 14; i++){
//       this.customersPerHour.push(randomCustomer(this.minCustomers,this.maxCustomers));
//     }
//   },
//   storeCookieData: function(){
//     for(let i = 0; i < 14; i++){
//       let cookieSales = Math.floor(this.avgCookies * this.customersPerHour[i]);
//       this.cookiesPerHour.push(cookieSales);
//       this.totalCookies += cookieSales;
//     }
//   },
//   //DOM Manipulation
//   render: function(){
//     let articleElem = document.createElement('article');
//     cookieSection.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < storeHours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${storeHours[i]}: ${this.cookiesPerHour[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.totalCookies} cookies`;
//     ulElem.appendChild(liElem);
//   }
// };

// lima.getCustomers();
// lima.storeCookieData();
// lima.render();
