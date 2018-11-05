const { eventModel, locationModel, organizationModel } = require('../database');

const Query = {
	eventsByOrganization: async(parent, { name }, context) => {
		const event = await eventModel.find({
			organization: name,
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
		const location = await organizationModel.find({
			latitude,
			longitude,
		});
		const organization = location.organization;
		return await organizationModel.findOne({
			name: organization,
		});
	},
	organizationByEvent: async(parent, { event }, context) => {
		const eventObj = await eventModel.findOne({
			name: event,
		});
		const organization = eventObj.organization;
		const organizationObj = await organizationModel.findOne({
			name: organization,
		});
		return organizationObj;
	},
};

module.exports = {
	Query,
}
