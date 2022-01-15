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
	rollerCoasters: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "rollercoasters",
		default: []
	}],
	numId: {
		type: Number,
		unique: true
	},
	_id: {
		type: mongoose.Schema.Types.ObjectId
	}
})

try {
	UserSchema.plugin(AutoIncrement, {start_seq: 100, inc_field: "numId"});
} catch {

}


const PlayerModel = mongoose.models.players || mongoose.model("players", UserSchema)

module.exports = PlayerModel