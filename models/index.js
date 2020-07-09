import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

const gradeSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        alias: "id"
    },
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    lastModified: {
        type: Date,
        default: Date.now()
    }
});
const Grade = db.mongoose.model("grade", gradeSchema);
db.gradeModel = Grade;
export { db };
