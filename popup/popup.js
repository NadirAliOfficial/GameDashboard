// popup/popup.js
document.addEventListener('DOMContentLoaded', function () {
  fetchDataAndRenderTimers();
});

function fetchDataAndRenderTimers() {
  fetch('http://157.230.97.71:3000/api/trpc/land.ping') // Update the URL to your server
    .then(response => response.text())
    .then(htmlContent => {
      const dataContainer = document.getElementById('dataContainer');
      dataContainer.innerHTML = htmlContent;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      renderError('Error fetching data from server.');
    });
}

function renderError(errorMessage) {
  const dataContainer = document.getElementById('dataContainer');
  dataContainer.innerHTML = `<p>Error: ${errorMessage}</p>`;
}
