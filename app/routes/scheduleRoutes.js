const express = require('express');
const scheduleModel = require('../models/schedule');
const app = express();

/**
 * @swagger
 * /schedules:
 *  get:
 *    description: endpoint para listar los schedules
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/schedules', async(req, res) => {
    const schedules = await scheduleModel.find({});

    try {
        res.send(schedules);
    } catch (err) {
        res.status(500).send(err);
    }
});

/**
 * @swagger
 * /schedule:
 *  post:
 *    description: endpoint para crear un schedule
 *    requestBody:
 *      content:
 *        application/json:
 *         schema:
 *            type: object
 *            properties:
 *              date:
 *                type: string
 *              arrive_time:
 *                type: string
 *              leave_time:
 *                type: string
 *              break_starts:
 *                type: string
 *              break_end:
 *                type: string
 *              arrive_tolerance:
 *                type: integer
 *              total_time_worked:
 *                type: integer
 *              status:
 *                type: string
 *              late_tolerance:
 *                type: object
 *              clock_marcks:
 *                type: array
 *              needs__geolocation:
 *                type: boolean
 *            example:
 *               date: 2001-01-01T05:00:00.000+00:00
 *               arrive_time: 2001-01-01T05:00:00.000+00:00
 *               leave_time: 2001-01-01T05:00:00.000+00:00
 *               break_starts: 2001-01-01T05:00:00.000+00:00
 *               break_end: 2001-01-01T05:00:00.000+00:00
 *               arrive_tolerance: 15
 *               total_time_worked: 240
 *               status: LATE
 *               late_tolerance: {id,name}
 *               clock_marcks: [{id,name},{id,name}]
 *               needs__geolocation: false
 *            required:
 *             - message
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.post('/schedule', async(req, res) => {
    const schedule = new scheduleModel(req.body);
    try {
        await schedule.save();
        res.send(schedule);
    } catch (err) {
        res.status(500).send(err);
    }
});


/**
 * @swagger
 * /schedule:
 *  patch:
 *    description: endpoint para crear un schedule
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
 *              date:
 *                type: string
 *              arrive_time:
 *                type: string
 *              leave_time:
 *                type: string
 *              break_starts:
 *                type: string
 *              break_end:
 *                type: string
 *              arrive_tolerance:
 *                type: integer
 *              total_time_worked:
 *                type: integer
 *              status:
 *                type: string
 *              late_tolerance:
 *                type: object
 *              clock_marcks:
 *                type: array
 *              needs__geolocation:
 *                type: boolean
 *            example:
 *               date: 2001-01-01T05:00:00.000+00:00
 *               arrive_time: 2001-01-01T05:00:00.000+00:00
 *               leave_time: 2001-01-01T05:00:00.000+00:00
 *               break_starts: 2001-01-01T05:00:00.000+00:00
 *               break_end: 2001-01-01T05:00:00.000+00:00
 *               arrive_tolerance: 15
 *               total_time_worked: 240
 *               status: LATE
 *               late_tolerance: {id,name}
 *               clock_marcks: [{id,name},{id,name}]
 *               needs__geolocation: false
 *            required:
 *             - message
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.patch('/schedule/:id', async(req, res) => {
    try {
        await scheduleModel.findByIdAndUpdate(req.params.id, req.body)
        await scheduleModel.save()
        res.send(schedule)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = app