const mongoose = require('mongoose');
const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    ruc: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    adress_id: {
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
    },
    longitude: {
        type: String,
        default: 0,
        // validate(value) {
        //     if (value < 0) throw new Error("Negative calories aren't real.");
        // }
    },
    employees: {
        type: Array,
        default: [],
    },
    schedules: {
        type: Array,
        default: [],
    }
}, { timestamps: { createdAt: 'created_at' } });

const Company = mongoose.model("Company", companySchema);
module.exports = Company;