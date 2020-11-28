const express = require("express");
const mongoConection = require("./app/models/mongo");
const bodyParser = require("body-parser");
// bodyParser = require("body-parser");
swaggerJsdoc = require("swagger-jsdoc");
// swaggerUi = require("swagger-ui-express");







const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/customer.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

mongoConection();

const mongoose = require('mongoose');
const foodRouter = require('./app/routes/foodRoutes');
const companyRouter = require('./app/routes/copanyRoutes');
const scheduleRouter = require('./app/routes/scheduleRoutes');
const clockmarkRouter = require('./app/routes/clockmarkRoutes');

app.use(express.json()); // Make sure it comes back as json

mongoose.connect('mongodb+srv://root:root@cluster0.79uzw.mongodb.net/time_tracker?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(foodRouter);
app.use(companyRouter);
app.use(scheduleRouter);
app.use(clockmarkRouter);
app.listen(8000, () => { console.log('Server is running...') });


const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "LogRocket Express API with Swagger",
            version: "0.1.0",
            description: "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "LogRocket",
                url: "https://logrocket.com",
                email: "info@email.com",
            },
        },
        servers: ["http://localhost:3000", "https://timetrackerupc.herokuapp.com/"]
    },
    // ['.routes/*.js']
    apis: ["./app/routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "LogRocket Express API with Swagger",
            version: "0.1.0",
            description: "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "LogRocket",
                url: "https://logrocket.com",
                email: "info@email.com",
            },
        },
        servers: [{
            url: "https://timetrackerupc.herokuapp.com/"

        }, ],
    },
    apis: ["./app/routes/*.js"],
};
const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))