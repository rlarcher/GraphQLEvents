const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const eventSchema = new Schema({
    name: { type: String, required: true, max: 100 },
	date: { type: String, required: true },
	description: { type: String, required: true },
	createdAt: { type: Number, required: true },
	updatedAt: { type: Number, required: true }
});

export const eventModel = mongoose.Model('Event', eventSchema);

export const locationSchema = new Schema({
    name: { type: String, required: true, max: 100 },
	address: { type: String, required: true },
	latitude: { type: String, required: true },
	longitude: { type: String, required: true },
	createdAt: { type: Number, required: true },
	updatedAt: { type: Number, required: true }
});

export const locationModel = mongoose.Model('Location', locationSchema);

export const organizationSchema = new Schema({
    name: { type: String, required: true, max: 100 },
	createdAt: { type: Number, required: true },
	updatedAt: { type: Number, required: true }
});

export const organizationModel = mongoose.Model('Organization', organizationSchema);

const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', () => console.log('MongoDB connection error:'));