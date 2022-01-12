const mongoose = require("mongoose")
const User = require("./User")

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