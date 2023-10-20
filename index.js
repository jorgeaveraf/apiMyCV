const cors = require('cors')
const express = require('express')
const path = require('path');


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by adsoft');
});


app.get('/header', (req, res, next) => {
  res.sendfile("assets/header.json");
});

app.listen(port,  () => 
	console.log('listening on port ' + port
));

app.get('/work', (req, res, next) => {
	res.sendfile("assets/workE.json");
  });

  app.get('/skills', (req, res, next) => {
	res.sendfile("assets/skills.json");
  });

  app.get('/certificates', (req, res, next) => {
    res.sendfile("assets/certificates.json");
    });

    app.get('/interests', (req, res, next) => {
      res.sendfile("assets/interests.json");
      });

app.get('/1a_dev_hours.json', (req, res, next) => {
  res.sendfile("assets/1a_dev_hours.json");
  });

  app.get('/1a_proxy_size.json', (req, res, next) => {
    res.sendfile("assets/11a_proxy_size.json");
    });
  
    app.get('/3a_test1.json', (req, res) => {
      const jsonPath = path.join(__dirname, 'assets', '3a_test1.json');
      res.sendFile(jsonPath);
    });
