const { eventModel, locationModel, organizationModel } = require('../database');

const Mutation = {
	addEvent: async (parent, { name, organization, date, description }, context) => {
		const createdAt = Date.now();
		const event = new eventModel({
			name,
			organization,
			date,
			description,
			createdAt,
			updatedAt: createdAt
		});
		event.save().then((document) => console.log(document));
		return {
			name,
			organization,
			date,
			description,
			createdAt,
		};
	},
	addLocation: async (_, { name, organization, address, latitude, longitude }, context) => {
		const createdAt = Date.now();
		const location = await new locationModel({
			name,
			organization,
			address,
			latitude,
			longitude,
			createdAt,
			updatedAt: createdAt
		});
		location.save().then((document) => console.log(document));
		return {
			name,
			organization,
			address,
			latitude,
			longitude,
			createdAt,
		};
	},
	addOrganization: async (_, args, context) => {
		const createdAt = Date.now();
		const organization = new organizationModel({
			name: args.name,
			createdAt,
			updatedAt: createdAt,
		});
		organization.save().then((doc) => console.log(doc));
		return {
			name: args.name,
			createdAt,
		};
	},
};

module.exports = {
	Mutation,
}