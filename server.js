const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
  '21 savage': {
    age: 29,
    birthName: 'Shéyaa Bin Abraham-Joseph',
    birthLocation: 'London, England'
  },
  'chance the rapper': {
    age: 29,
    birthName: 'Chancelor Bennett',
    birthLocation: 'Chicago, Illinois'
  },

  unknown: {
    // Age is expecting a number, so we use 0
    age: 0,
    birthName: 'unknown',
    birthLocation: 'unknown'
  }
};

// When we have a network request we do something

// Serving a file
app.get('/', (request, response) => {
  // Serving some HTML
  response.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (request, response) => {
  // I can yoink a part of the URL (name), I need to request it
  const rapperName = request.params.name.toLowerCase();
  // If rapperName is a property of rappers
  if (rappers[rapperName]) {
    response.json(rappers[rapperName]);
  } else {
    response.json(rappers['unknown']);
  }
  // response.json(rappers);
});

app.listen(proccess.env.PORT, () => {
  console.log(`The server is now running on port ${PORT}! Betta Go Catch It`);
});
