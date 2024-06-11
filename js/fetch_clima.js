const apiKey = 'fc9dc374912008281a35eeebef63ce2e'; // Reemplaza en la API la key de OpenWeatherMap
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Mercedes,AR&appid=${apiKey}&units=metric&lang=es`;

async function FuncClima() {
    try {
        const response = await fetch(apiUrl); //await: espera resp
        const dato = await response.json();
        mostrarClima(dato);
    } catch (error) {
        console.error('Error fetching de clima:', error);
    }
}

function mostrarClima(dato) {
    const climaContainer = document.getElementById('climaContainer');
    const { name, main, weather } = dato;
    const climaHtml = `
        Ciudad: ${name}, Bs. As. | Temp.: ${main.temp}°C | Humedad: ${main.humidity}% | ${weather[0].description}
    `;
    climaContainer.innerHTML = climaHtml;
}

// Llamada inicial para obtener y mostrar el clima
FuncClima();
