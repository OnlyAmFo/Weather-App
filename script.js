const API_KEY = "7e575c024aa08e675e92a3ee89499ff4";

const cityInput = document.getElementById("city");
const resultDiv = document.getElementById("result");

function display(event) {
    event.preventDefault();
    const city = cityInput.value;
    if (city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        fetch(url)
            .then((Response) => Response.json())
            .then((data) => {
                if (data.cod === 200) {
                    const temp = data.main.temp;
                    const min_temp = data.main.temp_min;
                    const feelsLike = data.main.feels_like;
                    const description = data.weather[0].description;
                    const icon = data.weather[0].icon;
                    const humidity = data.main.humidity;

                    let content = `<p>The weather in <span>${city}</span> is: </p>`;
                    content += `<p><img src="https://openweathermap.org/img/wn/${icon}.png" alt="${description}"></p>`;
                    content += `<p>Temperature: <span>${temp} °C</span></p>`;
                    content += `<p>Minimum Temperature: <span>${min_temp} °C</span></p>`;
                    content += `<p>Feels Like: <span>${feelsLike} °C</span></p>`;
                    content += `<p>Description: <span>${temp} °C</span></p>`;
                    content += `<p>Humidity: <span>${humidity} %</span></p>`;


                    resultDiv.innerHTML = content;
                } else {
                    // If the data is invalid, show an error message
                    resultDiv.innerHTML = `<p>Sorry, no weather data found for <span>${city}</span>.</p>`;
                  }
                })
                .catch((error) => {
                  // If there is an error, show an error message
                  resultDiv.innerHTML = `<p>Sorry, something went wrong.</p>`;
                });
            } else {
              // If the city name is empty, show an error message
              resultDiv.innerHTML = `<p>Please enter a city name.</p>`;
            }
          }