const mongoose = require("mongoose")
const discordUserSchema = require("./DiscordUser")
const RollerCoasterSchema = require("./RollerCoaster")
const AutoIncrement = require('mongoose-sequence')(mongoose);

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
	rollerCoasters: [RollerCoasterSchema],
	_id: {
		type: Number
	}
})

try {
	UserSchema.plugin(AutoIncrement, {start_seq: 100});
} catch {

}


const PlayerModel = mongoose.models.players || mongoose.model("players", UserSchema)

module.exports = PlayerModel