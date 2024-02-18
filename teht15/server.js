const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware käsitelläkseen JSON-pyyntöjä
app.use(bodyParser.json());

// Käsittely POST-pyynnölle osoitteessa "/"
app.post('/', (req, res) => {
  // Tulosta vastaanotetut tiedot konsoliin
  console.log('Vastaanotetut tiedot:', req.body);

  // Lähetä vastaus asiakkaalle
  res.send(`Kiitos! Vastaanotetut tiedot: Nimi: ${req.body.name}, Sähköposti: ${req.body.email}`);
});

// Palvelimen käynnistäminen
app.listen(port, () => {
  console.log(`Palvelin käynnissä osoitteessa http://localhost:${port}`);
});



