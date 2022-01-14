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
	content: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		required: true,
	},
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "players",
		required: true
	}
})

const RollerCoasterModel = mongoose.models.rollerCoasters || mongoose.model("rollerCoasters", RollerCoasterSchema)

module.exports = RollerCoasterModel