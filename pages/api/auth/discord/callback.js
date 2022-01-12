import User from "../../../../lib/database/schemas/User";
import oauth from "../../../../lib/discord";
import connectToMongodb from "../../../../lib/mongodb";

connectToMongodb()

export default async function handler(req, res) {
	await connectToMongodb()
	try {
		const tokenData = await oauth.tokenRequest({
			code: req.query.code,
			scope: "identify email",
			grantType: "authorization_code",
		})
	
		const userData = await oauth.getUser(tokenData.access_token)
	
		const findUser = await User.findOneAndUpdate(
			{discordId: userData.id},
			{
				discordUser: {
					username: userData.username,
					discriminator: userData.discriminator,
					bot: userData.bot,
					accent_color: userData.accent_color,
					avatar: {
						url: userData.avatar ? `https://cdn.discordapp.com/avatars${userData.id}/${userData.avatar}.png` : "https://cdn.discordapp.com/embed/avatars/0.png",
						hash: userData.avatar || "no_avatar"
					}
				}
			},
			{ new: true}
		)
	
		if (findUser) {
			res.status(200).json(findUser)
		} else {
			const newUser = await User.create({
				discordId: userData.id,
				discordUser: {
					id: userData.id,
					username: userData.username,
					discriminator: userData.discriminator,
					bot: userData.bot,
					accent_color: userData.accent_color,
					avatar: {
						url: userData.avatar ? `https://cdn.discordapp.com/avatars${userData.id}/${userData.avatar}.png` : "https://cdn.discordapp.com/embed/avatars/0.png",
						hash: userData.avatar || "no_avatar"
					}
				},
				rollerCoasters: []
			})
			res.status(200).json(newUser)
		}
	} catch (err) {
		console.error(err)

		res.status(500).json("Internal Server Error")
	}
}