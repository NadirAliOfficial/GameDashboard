// server.js
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/timers', (req, res) => {
  // Simulate fetching timers from the database
  const timers = [
    { id: 1, ability: 'Timer 1', timeLeft: '01:30:00' },
    { id: 2, ability: 'Timer 2', timeLeft: '00:45:00' },
    // Add more timers as needed
  ];

  // Render HTML with timers
  const htmlContent = renderHTMLWithTimers(timers);
  res.send(htmlContent);
});

function renderHTMLWithTimers(timers) {
  // Your HTML rendering logic here
  return `
    <html>
      <head>
        <title>Game Dashboard</title>
        <!-- Include any necessary styles and scripts -->
      </head>
      <body>
        <h1>Game Dashboard</h1>
        <div id="dataContainer">
          <h2>Timers</h2>
          <table>
            <tr><th>ID</th><th>Ability</th><th>Time Left</th></tr>
            ${timers.map(timer => `
              <tr>
                <td>${timer.id}</td>
                <td>${timer.ability}</td>
                <td>${timer.timeLeft}</td>
              </tr>
            `).join('')}
          </table>
        </div>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
