const { eventModel, locationModel, organizationModel } = require('../database');

export const query = {
	eventsByOrganization: async(parent, { organization }, context) => {
		const event = await eventModel.find({
			organization: 
		});
		return event;
	},
	locationsByOrganization: async(parent, { organization }, context) => {
		const locations = await locationModel.find({
			organization,
		});
		return locations;
	},
	organizationByLocation: async(parent, { latitude, longitude }, context) => {
		const organization = await organizationModel.find({
			latitude,
			longitude,
		});
		return organization;
	},
	organizationByEvent: async(parent, { name }, context) => {
		const organization = await organizationModel.find({
			event: name,
		});
		return organization;
	},
};
