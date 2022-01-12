const mongoose = require("mongoose")

const avatarSchema = new mongoose.Schema({
	url: {
		type: String,
		required: true
	},
	hash: {
		type: String,
		required: true
	}
})

const minimalDiscordUserSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		required: true,
	},
	discriminator: {
		type: String,
		required: true
	},
	bot: {
		type: Boolean,
		default: false
	},
	accent_color: {
		type: Number,
		default: 0
	},
	avatar: {
		type: avatarSchema,
		required: true
	}
})

module.exports = minimalDiscordUserSchema