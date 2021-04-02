const express = require('express');
const app = express();
const cors = require('cors');

const { PORT, dbConfigMongo } = require('./config/db');
const LocalPort = PORT || 3000;

const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
    res.json({
        message: "API React - artShare"
    })
});

if(dbConfigMongo) {
    app.listen(LocalPort, () => {
        console.log("server run at ", LocalPort);
    });
} else {
    console.log("Not Connected");
}