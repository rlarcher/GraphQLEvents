const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
	name: { type: String, required: true, max: 100 },
	organization: { type: String, required: true, max: 100 },
	date: { type: String, required: true },
	description: { type: String, required: true },
	createdAt: { type: Number, required: true },
	updatedAt: { type: Number, required: true }
});

const eventModel = mongoose.model('Event', eventSchema);

const locationSchema = new Schema({
	name: { type: String, required: true, max: 100 },
	organization: { type: String, required: true, max: 100 },
	address: { type: String, required: true },
	latitude: { type: String, required: true },
	longitude: { type: String, required: true },
	createdAt: { type: Number, required: true },
	updatedAt: { type: Number, required: true }
});

const locationModel = mongoose.model('Location', locationSchema);

const organizationSchema = new Schema({
    name: { type: String, required: true, max: 100 },
	createdAt: { type: Number, required: true },
	updatedAt: { type: Number, required: true }
});

const organizationModel = mongoose.model('Organization', organizationSchema);

function getDatabaseConnection() {
	// TODO: make these params and store in ENV vars
	const username = 'econify';
	const password = 'econify';
	const mongodbUri = `mongodb://@ds145871.mlab.com:45871/econify`;
	mongoose.connect(mongodbUri, {
		useNewUrlParser: true,
		auth: {
			user: 'econify',
			password: 'econify123',
		}
	})
	mongoose.Promise = global.Promise;
	const db = mongoose.connection;

	db.on('error', (err) => console.log('MongoDB connection error:', err));
	return db;
}

module.exports = {
	eventModel,
	eventSchema,
	getDatabaseConnection,
	locationModel,
	locationSchema,
	organizationModel,
	organizationSchema,
}
