// popup/popup.js
document.addEventListener('DOMContentLoaded', function () {
  fetchDataAndRenderTimers();
});

function fetchDataAndRenderTimers() {
  fetch('http://157.230.97.71:3000/api/trpc/land.ping')
    .then(response => response.json())
    .then(data => {
      console.log('API Response:', data);

      const jsonData = data.result.data.json;
      const abilityCooldowns = jsonData.abilityCooldowns || [];

      renderTimers(abilityCooldowns);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      renderError('Error fetching data from API.');
    });
}

function renderTimers(abilityCooldowns) {
  const dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = '';

  if (abilityCooldowns.length > 0) {
    dataContainer.innerHTML += `<h2>Timers</h2>`;
    dataContainer.innerHTML += `<table>`;
    dataContainer.innerHTML += `<tr><th>ID</th><th>Ability</th><th>Time Left</th></tr>`;

    abilityCooldowns.forEach(ability => {
      const startDate = new Date(ability.startDate);
      const endDate = new Date(ability.endDate);
      const currentTime = new Date();

      const timeLeft = endDate - currentTime;
      const formattedTimeLeft = formatTimeLeft(timeLeft);
      const isExpired = timeLeft < 0;

      dataContainer.innerHTML += `<tr ${isExpired ? 'class="expired"' : ''}>`;
      dataContainer.innerHTML += `<td>${ability.id}</td>`;
      dataContainer.innerHTML += `<td>${ability.abilityId}</td>`;
      dataContainer.innerHTML += `<td>${formattedTimeLeft}</td>`;
      dataContainer.innerHTML += `</tr>`;
    });

    dataContainer.innerHTML += `</table>`;
  } else {
    dataContainer.innerHTML += `<p>No timers found.</p>`;
  }
}

function formatTimeLeft(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const formattedHours = padNumber(hours);
  const formattedMinutes = padNumber(minutes % 60);
  const formattedSeconds = padNumber(seconds % 60);

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function padNumber(number) {
  return number.toString().padStart(2, '0');
}

function renderError(errorMessage) {
  const dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = `<p>Error: ${errorMessage}</p>`;
}
