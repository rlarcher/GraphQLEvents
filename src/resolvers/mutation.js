const { eventModel, locationModel, organizationModel } = require('../database');

export const mutation = {
	addEvent: async (parent, { name, organization, date, description }, context) => {
		const createdAt = Date.now();
		const event = await eventModel.create(name, organization, date, description, createdAt, null);
		return {
			name,
			organization,
			date
			description,
			createdAt,
		};
	},
	addLocation: async (parents, { name, organization, address, latitude, longitude }, context) => {
		const createdAt = Date.now();
		const location = await locationModel.create(name, organization, address, latitude, longitude, createdAt, null);
		return {
			name,
			organization,
			address,
			latitude,
			longitude,
			createdAt,
		};
	},
	addOrganization: async (parent, args, context) => {
		const createdAt = Date.now();
		const organization = await organizationModel.create(name, createdAt, null);
		return {
			name,
			createdAt,
		};
	},
};