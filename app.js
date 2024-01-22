
const express = require('express');
const helmet = require('helmet'); 

const app = express();
app.use(helmet());


app.use(express.static('public'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


app.post('/form', (req, res) => {
 
  console.log(req.body);

  
  res.sendFile(__dirname+'/public/thanks.html');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

