const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

const HTTP_PORT = 3333;

app.listen(HTTP_PORT, () => {
    console.log('Server running on port: ' + HTTP_PORT);
});

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.json({ 'status': 'Alive' });
});

//const calorieRoutes = require('./app/routes/calorie.routes');
//app.use('/api/calories', calorieRoutes);

require('./app/routes/calorie.routes')(app);
app.use((req, res) => {
    res.sendStatus(404);
});
