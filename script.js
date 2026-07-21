const apiKey = "bebc3b43fdbfdcb0ee5348b22d1f7cfc";
const apiURL = "https://api.openweathermap.org/data/2.5/weather";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("city");
const temp = document.getElementById("temp");
const cityName = document.getElementById("cityName");
const desc = document.getElementById("desc");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const icon = document.getElementById("icon");

searchBtn.addEventListener("click", () =>{
    const city = cityInput.value.trim();
    if(city == "") return;
    getWeather(city);
});

async function getWeather(city) {
    try{
        // const response = await fetch(apiURL + `q=${city}` + `&appid=${apiKey}&units=metric`);
        // if(!response.ok) throw new Error("City not found");
        // const data = await response.json();
        const url = `${apiURL}?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        cityName.textContent = data.name + "," + data.sys.country;
        temp.textContent = data.main.temp + "°C";
        desc.textContent = data.weather[0].description;
        humidity.textContent = data.main.humidity + "%";
        wind.textContent = (data.wind.speed * 3.6).toFixed(1) + "km/h";
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    } catch (error) {
        alert(error.message);
    }
}  


// const apiKey = "YOUR_API_KEY";
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?";

// const searchBtn = document.getElementById("searchBtn");
// const cityInput = document.getElementById("city");

// const temp = document.getElementById("temp");
// const cityName = document.getElementById("cityName");
// const desc = document.getElementById("desc");
// const humidity = document.getElementById("humidity");
// const wind = document.getElementById("wind");
// const icon = document.getElementById("icon");

// searchBtn.addEventListener("click", () => {
//     const city = cityInput.value.trim();

//     if (!city) {
//         alert("Please enter a city.");
//         return;
//     }

//     getWeather(city);
// });

// cityInput.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//         searchBtn.click();
//     }
// });

// async function getWeather(city) {
//     try {
//         const response = await fetch(
//             `${apiURL}q=${city}&appid=${apiKey}&units=metric`
//         );

//         if (!response.ok) {
//             throw new Error("City not found.");
//         }

//         const data = await response.json();

//         cityName.textContent = `${data.name}, ${data.sys.country}`;
//         temp.textContent = `${Math.round(data.main.temp)}°C`;
//         desc.textContent = data.weather[0].description;
//         humidity.textContent = `${data.main.humidity}%`;
//         wind.textContent = `${(data.wind.speed * 3.6).toFixed(1)} km/h`;
//         icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//         icon.alt = data.weather[0].description;

//     } catch (error) {
//         alert(error.message);
//     }
// }\


// const apiKey = "c413daaa9562eab30ebb9857b43eb840";
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?";

// const searchBtn = document.getElementById("searchBtn");
// const cityInput = document.getElementById("city");

// const cityName = document.getElementById("cityName");
// const temp = document.getElementById("temp");
// const desc = document.getElementById("desc");
// const humidity = document.getElementById("humidity");
// const wind = document.getElementById("wind");
// const icon = document.getElementById("icon");

// // Optional (only if you have this element in HTML)
// const feelsLike = document.getElementById("feelsLike");

// searchBtn.addEventListener("click", () => {
//     const city = cityInput.value.trim();

//     if (!city) {
//         alert("Please enter a city name.");
//         return;
//     }

//     getWeather(city);
// });

// cityInput.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//         searchBtn.click();
//     }
// });

// async function getWeather(city) {

//     searchBtn.disabled = true;
//     searchBtn.innerText = "Loading...";

//     try {

//         const url = `${apiURL}?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

//         console.log("Request URL:", url);

//         const response = await fetch(url);

//         console.log("Status:", response.status);

//         const data = await response.json();

//         console.log(data);

//         if (!response.ok) {
//             throw new Error(data.message || "Unable to fetch weather.");
//         }

//         cityName.textContent = `${data.name}, ${data.sys.country}`;
//         temp.textContent = `${Math.round(data.main.temp)}°C`;
//         desc.textContent =
//             data.weather[0].description.charAt(0).toUpperCase() +
//             data.weather[0].description.slice(1);

//         humidity.textContent = `${data.main.humidity}%`;

//         wind.textContent = `${(data.wind.speed * 3.6).toFixed(1)} km/h`;

//         if (feelsLike) {
//             feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
//         }

//         icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//         icon.alt = data.weather[0].description;

//     } catch (error) {

//         console.error(error);

//         cityName.textContent = "";
//         temp.textContent = "--";
//         desc.textContent = error.message;
//         humidity.textContent = "--";
//         wind.textContent = "--";
//         icon.src = "";

//     } finally {

//         searchBtn.disabled = false;
//         searchBtn.innerText = "Search";
//     }
// }