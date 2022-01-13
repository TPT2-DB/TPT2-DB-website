import { connectToDb } from "../../../lib/mongodb"
import PlayerModel from "../../../lib/schemas/Player"

export default async (req, res) => {
	await connectToDb()

	const { userId } = req.query

	let player

	try {
		player = await PlayerModel.findById(userId)
	} catch {
		res.status(500).json({})
		return
	}

	if (player) {
		res.status(200).json(JSON.parse(JSON.stringify(player)))
		return
	}

	res.status(404).json({})

}