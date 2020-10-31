const express = require('express');
const companyModel = require('../models/user');
const app = express();

/**
 * @swagger
 * /users:
 *  get:
 *    description: endpoint para listar los schedules
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/users', async(req, res) => {
    const users = await companyModel.find({});

    try {
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
});

/**
 * @swagger
 * /user:
 *  post:
 *    description: endpoint para crear un user
 *    requestBody:
 *      content:
 *        application/json:
 *         schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              user_type:
 *                type: string
 *              document_number:
 *                type: string
 *              document_number_type:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              assigned_company:
 *                type: object
 *              managed_companies:
 *                type: array
 *              today_schedule_id:
 *                type: string
 *              schedules:
 *                type: array
 *            example:
 *               name: gustavo carrillo
 *               user_type: b
 *               document_number: 1231
 *               document_number_type: a
 *               email: asd@hotmail.com
 *               password: password
 *               assigned_company: {id,name}
 *               managed_companies: [{id,name},{id,name}]
 *               today_schedule_id: 12345
 *               schedules: [12345,54321]
 *            required:
 *             - message
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.post('/user', async(req, res) => {
    const user = new companyModel(req.body);
    try {
        await user.save();
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});


/**
 * @swagger
 * /user:
 *  patch:
 *    description: endpoint para crear un user
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
 *              name:
 *                type: string
 *              user_type:
 *                type: string
 *              document_number:
 *                type: string
 *              document_number_type:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              assigned_company:
 *                type: object
 *              managed_companies:
 *                type: array
 *              today_schedule_id:
 *                type: string
 *              schedules:
 *                type: array
 *            example:
 *               name: gustavo carrillo
 *               user_type: b
 *               document_number: 1231
 *               document_number_type: a
 *               email: asd@hotmail.com
 *               password: password
 *               assigned_company: {id,name}
 *               managed_companies: [{id,name},{id,name}]
 *               today_schedule_id: 12345
 *               schedules: [12345,54321]
 *            required:
 *             - message
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.patch('/user/:id', async(req, res) => {
    try {
        await companyModel.findByIdAndUpdate(req.params.id, req.body)
        await companyModel.save()
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = app