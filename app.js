const Countries = document.querySelector('datalist');
const search = document.querySelector('#search');
const date = document.querySelector('#date');
const nameCountries = document.querySelector('#name-contries');
const confirmed = document.querySelector('.confirmed');
const deaths = document.querySelector('.deaths');
const recovered = document.querySelector('.recovered');
const chart = document.querySelector('.chart');

let datachart = [];
const API_URL = 'https://api.covid19api.com/summary ';
async function covid() {
    const resdata = await fetch(API_URL);
    //console.log(resdata);
    const data = await resdata.json();
    console.log(data);
    if (resdata.status === 4 || resdata.status === 200) {

        date.textContent = new Date().toDateString();
        const { TotalConfirmed, TotalDeaths, TotalRecovered, NewConfirmed, NewDeaths, NewRecovered } = data.Global;

        // total and neww confirmed/
        confirmed.children[1].textContent = TotalConfirmed;
        confirmed.children[2].textContent = NewConfirmed;

        // total deaths and new deaths//
        deaths.children[1].textContent = TotalDeaths;
        deaths.children[2].textContent = NewDeaths;

        //total recoever and new recover//
        recovered.children[1].textContent = TotalRecovered;
        recovered.children[2].textContent = NewRecovered;
        // search option all contries//
        data.Countries.forEach(list => {
            const option = document.createElement('option');
            option.value = list.Countries;
            option.textContent = list.Countries;
            Countries.appendChild(option);
        });
    }
    else {
        chart.innerHTML = '<h2>Loading....</h2>';
    }
}
covid();
