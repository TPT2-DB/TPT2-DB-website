import { getSession } from "next-auth/react"
import { connectToDb } from "../../../lib/mongodb"
import PlayerModel from "../../../lib/schemas/Player"
import RollerCoasterModel from "../../../lib/schemas/RollerCoaster"

export default async (req, res) => {
	const session = await getSession({ req })

	connectToDb()

	try {
		const {id} = req.query

		if (!id) {
			res.status(400).json({error: "missing parameters"}).end()
			return
		}

		const rollerCoasterDoc = await RollerCoasterModel.find({creator: id})

		res.status(200).json(JSON.parse(JSON.stringify(rollerCoasterDoc)) || [])
		
	} catch (err) {
		console.error(err)
		res.status(500).json([])
	}
	res.end()
}