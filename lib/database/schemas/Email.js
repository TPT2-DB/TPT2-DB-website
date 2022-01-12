const mongoose = require("mongoose")

const EmailSchema = new mongoose.Schema({
	discordId: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true
	},
	emailVerified: {
		type: Boolean,
		required: true
	}
})