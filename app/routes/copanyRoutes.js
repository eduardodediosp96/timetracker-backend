const express = require('express');
const companyModel = require('../models/company');
const app = express();

/**
 * @swagger
 * /companies:
 *  get:
 *    description: endpoint para listar los companies
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/companies', async(req, res) => {
    const companies = await companyModel.find({});

    try {
        res.send(companies);
    } catch (err) {
        res.status(500).send(err);
    }
});

/**
 * @swagger
 * /company:
 *  post:
 *    description: endpoint para crear un company
 *    requestBody:
 *      content:
 *        application/json:
 *         schema:
 *            type: object
 *            properties:
 *              longitude:
 *                type: string
 *              employees:
 *                type: array
 *              schedules:
 *                type: array
 *              name:
 *                type: string
 *              ruc:
 *                type: string
 *              adress_id:
 *                type: string
 *              latitude:
 *                type: string
 *            example:
 *               longitude: asdasdasd
 *               employees: [{id,name},{id,name}]
 *               schedules: ["12345","54321"]
 *               name: asdasdasd
 *               ruc: asdasdasd
 *               adress_id: 12345
 *               latitude: asdasdasd
 *            required:
 *             - message
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.post('/company', async(req, res) => {
    const company = new companyModel(req.body);
    try {
        await company.save();
        res.send(company);
    } catch (err) {
        res.status(500).send(err);
    }
});

/**
 * @swagger
 * /clockmarck:
 *  patch:
 *    description: endpoint para crear un clockmarck
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        type: string
 *        format: GUID
 *        description: The GUID of a specific user 
 *    requestBody:
 *      content:
 *        application/json:
 *         schema:
 *            type: object
 *            properties:
 *              longitude:
 *                type: string
 *              employees:
 *                type: array
 *              schedules:
 *                type: array
 *              name:
 *                type: string
 *              ruc:
 *                type: string
 *              adress_id:
 *                type: string
 *              latitude:
 *                type: string
 *            example:
 *               longitude: asdasdasd
 *               employees: [{id,name},{id,name}]
 *               schedules: ["12345","54321"]
 *               name: asdasdasd
 *               ruc: asdasdasd
 *               adress_id: 12345
 *               latitude: asdasdasd
 *            required:
 *             - message
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.patch('/company/:id', async(req, res) => {
    try {
        await companyModel.findByIdAndUpdate(req.params.id, req.body)
        await companyModel.save()
        res.send(company)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = app