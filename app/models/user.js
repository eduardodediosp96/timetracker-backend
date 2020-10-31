const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    user_type: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    document_number: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    document_number_type: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    assigned_company: {
        type: Object,
        default: {},
        // validate(value) {
        //     if (value < 0) throw new Error("Negative calories aren't real.");
        // }
    },
    managed_companies: {
        type: Array,
        default: [],
    },
    today_schedule_id: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    schedules: {
        type: Array,
        default: [],
    }
}, { timestamps: { createdAt: 'created_at' } });

const User = mongoose.model("User", userSchema);
module.exports = User;