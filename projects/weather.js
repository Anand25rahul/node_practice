import readline from "readline/promises";

const apiKey = 'd50db7469a20336b7e04c127b8e7ddf0';
const base_Url = 'https://api.openweathermap.org/data/2.5/weather';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getWeather = async (city) => {
    try {
        const url = `${base_Url}?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('City not found');
        }

        const weatherData = await response.json();

        console.log(weatherData);

        console.log('\nWeather Report: ');
        console.log(`City: ${weatherData.name}`);
        console.log(`Temperature: ${weatherData.main.temp}°C`);
        console.log(`Description: ${weatherData.weather[0].description}`);
        console.log(`Humidity: ${weatherData.main.humidity}%`);
        console.log(`Wind Speed: ${weatherData.wind.speed}`);
    } catch (error) {
        console.log("Error:", error.message);
    }
};

const city = await rl.question('Enter Your City: ');
await getWeather(city);

rl.close();
