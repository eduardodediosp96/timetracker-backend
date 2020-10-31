const express = require('express');
const clockmarckModel = require('../models/clockmarck');
const app = express();


/**
 * @swagger
 * /clockmarcks:
 *  get:
 *    description: endpoint para listar los clockmarcks
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/clockmarcks', async(req, res) => {
    const clockmarcks = await clockmarckModel.find({});

    try {
        res.send(clockmarcks);
    } catch (err) {
        res.status(500).send(err);
    }
});

/**
 * @swagger
 * /clockmarck:
 *  post:
 *    description: endpoint para crear un clockmarck
 *    requestBody:
 *      content:
 *        application/json:
 *         schema:
 *            type: object
 *            properties:
 *              marck_type:
 *                type: string
 *              minutes_dif:
 *                type: integer
 *              time_worked:
 *                type: integer
 *              longitude:
 *                type: string
 *              latitude:
 *                type: string
 *            example:
 *               marck_type: asdasdasd
 *               minutes_dif: 123
 *               time_worked: 132
 *               longitude: asdasdasd
 *               latitude: asdasdasd
 *            required:
 *             - message
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.post('/clockmarck', async(req, res) => {
    const clockmarck = new clockmarckModel(req.body);
    try {
        await clockmarck.save();
        res.send(clockmarck);
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
 *              marck_type:
 *                type: string
 *              minutes_dif:
 *                type: integer
 *              time_worked:
 *                type: integer
 *              longitude:
 *                type: string
 *              latitude:
 *                type: string
 *            example:
 *               marck_type: asdasdasd
 *               minutes_dif: 123
 *               time_worked: 132
 *               longitude: asdasdasd
 *               latitude: asdasdasd
 *            required:
 *             - message
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.patch('/clockmarck/:id', async(req, res) => {
    try {
        await clockmarckModel.findByIdAndUpdate(req.params.id, req.body)
        await clockmarckModel.save()
        res.send(clockmarck)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = app