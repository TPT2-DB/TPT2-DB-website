import oauth from "../../../../lib/discord";

export default function handler(req, res) {
	const url = oauth.generateAuthUrl({
		scope: ["identify", "guilds"],
		//state: crypto.randomBytes(16).toString("hex"),
	});
	console.log(url)
	res.redirect(307, url)
}