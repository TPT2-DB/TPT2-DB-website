const mongoose = require("mongoose")
const discordUserSchema = require("./DiscordUser")
const RollerCoasterSchema = require("./RollerCoaster")

const UserSchema = new mongoose.Schema({
	discordId: {
		type: String,
		required: true,
		unique: true
	},
	discordUser: {
		type: discordUserSchema,
		required: true
	},
	rollerCoasters: [RollerCoasterSchema]
})

const PlayerModel = mongoose.models.players || mongoose.model("players", UserSchema)

module.exports = PlayerModel