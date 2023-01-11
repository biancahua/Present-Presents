const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const PORT = 3000;
require('dotenv/config');

// connect to database
mongoose.connect(process.env.DB_CONNECTION, {  
  userNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'giftsDB' 
})
	.then(() => console.log('Connected to database!'))
	.catch((err) => console.log(err));
		
    


// parses request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handles static requests
app.use(express.static(path.join(__dirname, '../client/src')));

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!'});
});



// route handler

// catch-all route handler
app.get('/', (req, res) => {
    res.status(400).sendFile(path.resolve(__dirname, '../client/src/index.html'));
});

// global route handler





app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;