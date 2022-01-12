const mongoose = require("mongoose")

const RollerCoasterSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	created: {
		type: Date,
		required: true,
	}
})

module.exports = RollerCoasterSchema