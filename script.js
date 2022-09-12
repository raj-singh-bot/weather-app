const APIKEY = '972f0269048a0ab5b12ff1cee7ddeb4e';
const form = document.querySelector('form');
const search = document.querySelector('#search');
const weather = document.querySelector('#weather');


const getWeather = async (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;
    const response = await fetch(url);
    const data =  await response.json();
    return showWeather(data);
}

const showWeather = (data) => {
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}

form.addEventListener('submit', function(event) {
    getWeather(search.value);
    event.preventDefault();
});


//const list = document.querySelector('list');


