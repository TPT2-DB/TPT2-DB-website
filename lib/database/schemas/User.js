const mongoose = require("mongoose")
const minimalDiscordUserSchema = require("./minimalDiscordUser")
const RollerCoaster = require("./RollerCoaster")

const UserSchema = new mongoose.Schema({
	discordId: {
		type: String,
		required: true,
		unique: true
	},
	discordUser: {
		type: minimalDiscordUserSchema,
		required: true
	},
	rollerCoasters: [RollerCoaster]
})

const UserModel = mongoose.models.users || mongoose.model("users", UserSchema)

module.exports = UserModel