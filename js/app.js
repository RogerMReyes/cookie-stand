'use strict';

let cookieSection = document.getElementById('cookie-table');

function randomCustomer(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let seattle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  getCustomers: function(){
    for(let i = 0; i < 14; i++){
      this.customersPerHour.push(randomCustomer(this.minCustomers,this.maxCustomers));
    }
  },
  storeCookieData: function(){
    for(let i = 0; i < 14; i++){
      let cookieSales = Math.floor(this.avgCookies * this.customersPerHour[i]);
      this.cookiesPerHour.push(cookieSales);
      this.totalCookies += cookieSales;
    }
  },
  //DOM Manipulation
  render: function(){
    let articleElem = document.createElement('article');
    cookieSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.cookiesPerHour.length-7; i++){
      let time = i+6;
      let liElem = document.createElement('li');
      if(time < 12){
        liElem.textContent = `${time}am: ${this.cookiesPerHour[i]} cookies`;
        ulElem.appendChild(liElem);
      } else {
        liElem.textContent = `${time}pm: ${this.cookiesPerHour[i]} cookies`;
        ulElem.appendChild(liElem);
      }
    }
    for(let i = 7; i < this.cookiesPerHour.length; i++){
      let time = i-6;
      let liElem = document.createElement('li');
      liElem.textContent = `${time}pm: ${this.cookiesPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookies} cookies`;
    ulElem.appendChild(liElem);
  }
};

seattle.getCustomers();
seattle.storeCookieData();
seattle.render();

let tokyo = {
  name: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  getCustomers: function(){
    for(let i = 0; i < 14; i++){
      this.customersPerHour.push(randomCustomer(this.minCustomers,this.maxCustomers));
    }
  },
  storeCookieData: function(){
    for(let i = 0; i < 14; i++){
      let cookieSales = Math.floor(this.avgCookies * this.customersPerHour[i]);
      this.cookiesPerHour.push(cookieSales);
      this.totalCookies += cookieSales;
    }
  },
  //DOM Manipulation
  render: function(){
    let articleElem = document.createElement('article');
    cookieSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.cookiesPerHour.length-7; i++){
      let time = i+6;
      let liElem = document.createElement('li');
      if(time < 12){
        liElem.textContent = `${time}am: ${this.cookiesPerHour[i]} cookies`;
        ulElem.appendChild(liElem);
      } else {
        liElem.textContent = `${time}pm: ${this.cookiesPerHour[i]} cookies`;
        ulElem.appendChild(liElem);
      }
    }
    for(let i = 7; i < this.cookiesPerHour.length; i++){
      let time = i-6;
      let liElem = document.createElement('li');
      liElem.textContent = `${time}pm: ${this.cookiesPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookies} cookies`;
    ulElem.appendChild(liElem);
  }
};

tokyo.getCustomers();
tokyo.storeCookieData();
tokyo.render();

let dubai = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  getCustomers: function(){
    for(let i = 0; i < 14; i++){
      this.customersPerHour.push(randomCustomer(this.minCustomers,this.maxCustomers));
    }
  },
  storeCookieData: function(){
    for(let i = 0; i < 14; i++){
      let cookieSales = Math.floor(this.avgCookies * this.customersPerHour[i]);
      this.cookiesPerHour.push(cookieSales);
      this.totalCookies += cookieSales;
    }
  },
  //DOM Manipulation
  render: function(){
    let articleElem = document.createElement('article');
    cookieSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.cookiesPerHour.length-7; i++){
      let time = i+6;
      let liElem = document.createElement('li');
      if(time < 12){
        liElem.textContent = `${time}am: ${this.cookiesPerHour[i]} cookies`;
        ulElem.appendChild(liElem);
      } else {
        liElem.textContent = `${time}pm: ${this.cookiesPerHour[i]} cookies`;
        ulElem.appendChild(liElem);
      }
    }
    for(let i = 7; i < this.cookiesPerHour.length; i++){
      let time = i-6;
      let liElem = document.createElement('li');
      liElem.textContent = `${time}pm: ${this.cookiesPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookies} cookies`;
    ulElem.appendChild(liElem);
  }
};

dubai.getCustomers();
dubai.storeCookieData();
dubai.render();

let paris = {
  name: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  getCustomers: function(){
    for(let i = 0; i < 14; i++){
      this.customersPerHour.push(randomCustomer(this.minCustomers,this.maxCustomers));
    }
  },
  storeCookieData: function(){
    for(let i = 0; i < 14; i++){
      let cookieSales = Math.floor(this.avgCookies * this.customersPerHour[i]);
      this.cookiesPerHour.push(cookieSales);
      this.totalCookies += cookieSales;
    }
  },
  //DOM Manipulation
  render: function(){
    let articleElem = document.createElement('article');
    cookieSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.cookiesPerHour.length-7; i++){
      let time = i+6;
      let liElem = document.createElement('li');
      if(time < 12){
        liElem.textContent = `${time}am: ${this.cookiesPerHour[i]} cookies`;
        ulElem.appendChild(liElem);
      } else {
        liElem.textContent = `${time}pm: ${this.cookiesPerHour[i]} cookies`;
        ulElem.appendChild(liElem);
      }
    }
    for(let i = 7; i < this.cookiesPerHour.length; i++){
      let time = i-6;
      let liElem = document.createElement('li');
      liElem.textContent = `${time}pm: ${this.cookiesPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookies} cookies`;
    ulElem.appendChild(liElem);
  }
};

paris.getCustomers();
paris.storeCookieData();
paris.render();

let lima = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  getCustomers: function(){
    for(let i = 0; i < 14; i++){
      this.customersPerHour.push(randomCustomer(this.minCustomers,this.maxCustomers));
    }
  },
  storeCookieData: function(){
    for(let i = 0; i < 14; i++){
      let cookieSales = Math.floor(this.avgCookies * this.customersPerHour[i]);
      this.cookiesPerHour.push(cookieSales);
      this.totalCookies += cookieSales;
    }
  },
  //DOM Manipulation
  render: function(){
    let articleElem = document.createElement('article');
    cookieSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.cookiesPerHour.length-7; i++){
      let time = i+6;
      let liElem = document.createElement('li');
      if(time < 12){
        liElem.textContent = `${time}am: ${this.cookiesPerHour[i]} cookies`;
        ulElem.appendChild(liElem);
      } else {
        liElem.textContent = `${time}pm: ${this.cookiesPerHour[i]} cookies`;
        ulElem.appendChild(liElem);
      }
    }
    for(let i = 7; i < this.cookiesPerHour.length; i++){
      let time = i-6;
      let liElem = document.createElement('li');
      liElem.textContent = `${time}pm: ${this.cookiesPerHour[i]} cookies`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalCookies} cookies`;
    ulElem.appendChild(liElem);
  }
};

lima.getCustomers();
lima.storeCookieData();
lima.render();
