    // const swaggerUi = require("swagger-ui-express");
    // const swaggerDoc = require('./swaggerDoc');
    // var routes = require('./app/routes');
    // const app = express();
    // const options = {
    //     awaggerDefinition: {
    //         openapi: '3.0.0',
    //         info: {
    //             title: "Swagger Express API",
    //             version: "1.0.0",
    //         }
    //     },
    //     apis: ['./app/routes/userRoutes.js']
    // }



    const express = require("express");
    const app = express();
    const swaggerJsDoc = require("swagger-jsdoc");
    const swaggerUi = require("swagger-ui-express");
    // Extended: https://swagger.io/specification/#infoObject
    const swaggerOptions = {
        swaggerDefinition: {
            info: {
                version: "1.0.0",
                title: "Customer API",
                description: "Customer API Information",
                contact: {
                    name: "Amazing Developer"
                },
                servers: ["http://localhost:5000"]
            }
        },
        // ['.routes/*.js']
        apis: ["app.js"]
    };

    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));