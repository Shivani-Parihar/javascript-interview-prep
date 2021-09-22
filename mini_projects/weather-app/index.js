const API = {
	key: "41bcdc494e999350709fd6117132b303",
	base: "api.openweathermap.org/data/2.5/"
}

const searchBox =  document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery)

function setQuery(event) {
	if(event.keyCode == 13) {
		getResults(searchBox.value);
	}
}

function getResults(query) {
	fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
		.then(weather => {
			return weather.json();
		}).then(displayResults);
}

function displayResults(weather) {
	const city = document.querySelector(".location .city");
	city.innerText = `${weather.name}, ${weather.sys.country}`

	const now = new Date();
	let date = document.querySelector(".location .date");
	date.innerText = dateBuilder(now)

	let temp = document.querySelector(".current .temp");
	temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

	let weather_el = document.querySelector(".current .weather");
	weather_el.innerHTML = weather.weather[0].main;


	let high_low = document.querySelector(".current .hi-low");
	high_low.innerHTML = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder(d) {
	let months = ["jan", "feb", "mar", "april", "may", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

	let day = days[d.getDay()];
	let date = d.getDate();
	let month = months[d.getMonth()];
	let year = d.getFullYear();
	
	return `${month} ${day} ${date} ${year}`
}