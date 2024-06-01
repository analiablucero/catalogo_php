//Código para consumir API de OpenWeatherMap
const apiKey = 'fc9dc374912008281a35eeebef63ce2e'; // Reemplaza en la API la key de OpenWeatherMap
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&appid=${apiKey}&units=metric&lang=es`;

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
    const { main, weather } = dato;
    const climaHtml = `
    <div id="climaContainer">
        <table>
        <tr>
            <th>Aspecto</th>
            <th>Datos</th>
        </tr>
        <tr>
            <td>Temperatura</td>
            <td id="tempValue">8.22°C</td>
        </tr>
        <tr>
            <td>Humedad</td>
            <td id="humidityValue">90%</td>
        </tr>
        <tr>
            <td>Descripción</td>
            <td id="descValue">nubes</td>
        </tr>
        </table>
    </div>
    `;
    climaContainer.innerHTML = climaHtml;
}

// Llamada inicial para obtener y mostrar el clima
FuncClima();
