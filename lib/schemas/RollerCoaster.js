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
	created: {
		type: Date,
		required: true,
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


module.exports = RollerCoasterSchema