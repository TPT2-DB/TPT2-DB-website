const mongoose = require("mongoose")
const AutoIncrement = require('mongoose-sequence')(mongoose);

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
	},
	_id: {
		type: Number,
		unique: true
	}
})

try {
	RollerCoasterSchema.plugin(AutoIncrement, {start_seq: 100});
} catch {

}

const RollerCoasterModel = mongoose.models.rollerCoasters || mongoose.model("rollerCoasters", RollerCoasterSchema)

module.exports = RollerCoasterModel
