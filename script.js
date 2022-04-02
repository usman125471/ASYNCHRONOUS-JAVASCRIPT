'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/////////////////////////////   ---> JS <---    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__capital"> capital: ${data.capital[0]}</h4>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 10000000
            ).toFixed(1)}people</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[Object.keys(data.languages)[0]]
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[Object.keys(data.currencies)[0]].name
            }</p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const rederErrorMsg = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);

  // countriesContainer.style.opacity=1
};

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   // console.log(request.responseText);

//   request.addEventListener('load', function () {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//     console.log(data.name);

//     const html = `
//     <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.altSpellings[2]}</h3>
//             <h4 class="country__name">${data.capital[0]}</h4>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//         +data.population / 10000000
//       ).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages.eng} and

//             ${data.languages.urd}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name
//       } </p>
//           </div>
//         </article>
//     `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);

//     countriesContainer.style.opacity = 1;
//   });
// }

// // counrtyData(prompt('your country'))
// getCountryData('pakistan');
// getCountryData('portugal');

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/	${country}`);
//   request.send();
//   // console.log(request.responseText);

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // const lang = Object.getOwnPropertyNames(data.languages);
//     const lang = data.languages[Object.keys(data.languages)[0]];
//     console.log(lang);
//     const curr = data.currencies[Object.keys(data.currencies)[0]];

//     console.log(curr.name);
//     // console.log([data]);

//     const html = `
//   <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__capital">${data.capital[0]}</h4>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//         +data.population / 10000000
//       ).toFixed(1)}people</p>
//             <p class="country__row"><span>🗣️</span>${lang}</p>
//             <p class="country__row"><span>💰</span>${curr.name}</p>
//           </div>
//         </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// }

// getCountryData('North Macedonia')
// getCountryData('North Macedonia')
// getCountryData('North Macedonia')

/*
/////     CALLBACK HELL     \\\\\

const renderCountry = function (data, className = '') {
  // console.log(lang);

  // console.log(data);
  // const lang = Object.getOwnPropertyNames(data.languages);

  // console.log(curr.name);

  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__capital"> capital: ${data.capital[0]}</h4>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 10000000
            ).toFixed(1)}people</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[Object.keys(data.languages)[0]]
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[Object.keys(data.currencies)[0]].name
            }</p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};


const getCountryData = function (country) {
  ///// AJAX CALL NO: 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/	${country}`);
  request.send();
  // console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    renderCountry(data);

    ///// NEIBOURER COUNTRY
    const [neighbour] = data.borders;
    if (!neighbour) return;

    /// AJAX CALL 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/	${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2,'neighbour');
    });
  });
};

getCountryData('pakistan');


setTimeout(() => {
  cons ole.log('1 sec passed');
  setTimeout(() => {
    console.log('2 sec passed');
    setTimeout(() => {
      console.log('3 sec passed');
      setTimeout(() => {
        console.log('4 sec passed');
        setTimeout(() => {
          console.log('5 sec passed');
          setTimeout(() => {
            console.log('6 sec passed');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
},1000)
},1000)


// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/	${country}`);
// request.send();

/////     PROMISES AND FETCH API      \\\\\
// const requestData = fetch('https://restcountries.com/v3.1/name/pakistan');
// console.log(requestData);

/////     CONSUMING PROMISES      \\\\\

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);

//     });
// };

const getJSON = function (url, errorMsg = 'Something Went Wrong ') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country You Searched, Not Found.'
  )
    .then(data => {
      renderCountry(data[0])
      const neighbour = data[0].borders[0]
      if (!neighbour) throw new Error('Country Not Found!')
      return getJSON(
        `https://restcountries.com/v3.1/alpha/	${neighbour}`,
        'Country Not Found.'
      )
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err =>
      rederErrorMsg(`Something Went Wrong ( ${err} ) Please Try Again.`)
    )
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});
*/

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       if(!response.ok)throw new Error(`Country You Searched, Not Found. ${response.status}`)
//       return response.json()
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/	${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => rederErrorMsg(`Something Went Wrong ( ${err} ) Please Try Again.`))
//     .finally(() => {
//     countriesContainer.style.opacity = 1;
//   })
// };

// btn.addEventListener('click', function () {
//   getCountryData('pakistan');
// });

// getCountryData('sdbja')

// const whereAmI = function (lat, long) {
//   fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//     });
// };

// whereAmI(52.508, 13.381);

/////     EVENT LOOP      \\\\\

console.log('Test Starts');
setTimeout(() => console.log('0 Sec Time'), 0);
Promise.resolve('Promise Succeed 1').then(res => console.log(res));
console.log('Test Ends');