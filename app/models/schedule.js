const mongoose = require('mongoose');
const scheduleSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        trim: true,
        lowercase: true
    },
    arrive_time: {
        type: Date,
        required: true,
        trim: true,
        lowercase: true
    },
    leave_time: {
        type: Date,
        required: true,
        trim: true,
        lowercase: true
    },
    break_end: {
        type: Date,
        required: true,
        trim: true,
        lowercase: true
    },
    arrive_tolerance: {
        type: Number,
        required: true,
        trim: true,
        lowercase: true
    },
    total_time_worked: {
        type: Number,
        required: true,
        trim: true,
        lowercase: true
    },
    status: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    late_tolerance: {
        type: Object,
        default: {},
    },
    clock_marcks: {
        type: Array,
        default: [],
    },
    needs__geolocation: {
        type: Boolean,
        default: [],
    }
}, { timestamps: { createdAt: 'created_at' } });

const schedule = mongoose.model("schedule", scheduleSchema);
module.exports = schedule;