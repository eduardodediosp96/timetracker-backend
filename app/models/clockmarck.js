const mongoose = require('mongoose');
const clockmarckSchema = new mongoose.Schema({
    marck_type: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    minutes_dif: {
        type: Number,
        required: true,
        trim: true,
        lowercase: true
    },
    time_worked: {
        type: Number,
        required: true,
        trim: true,
        lowercase: true
    },
    longitude: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    latitude: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    }
}, { timestamps: { createdAt: 'created_at' } });

const clockmarck = mongoose.model("clockmarck", clockmarckSchema);
module.exports = clockmarck;