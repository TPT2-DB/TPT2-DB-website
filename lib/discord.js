const DiscordOauth2 = require("discord-oauth2")

const oauth = new DiscordOauth2({
	clientId: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	redirectUri: process.env.CALLBACK_URL,
});

module.exports = oauth