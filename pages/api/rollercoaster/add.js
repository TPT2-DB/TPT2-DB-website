import { getSession } from "next-auth/react"
import { connectToDb } from "../../../lib/mongodb"
import PlayerModel from "../../../lib/schemas/Player"
import RollerCoasterModel from "../../../lib/schemas/RollerCoaster"

export default async (req, res) => {
	const session = await getSession({ req })

	connectToDb()

	if (session) {
		try {
			const userDoc = await PlayerModel.findById(session.id)

  			const {name, description, content} = req.query

			if (!name || !description || !content) {
				res.status(400).json({error: "missing parameters"}).end()
				return
			}

			const rollerCoasterDoc = new RollerCoasterModel({
				name,
				description,
				content: content,
				created: Date.now(),
				creator: session.id
			})
			rollerCoasterDoc.save()

			userDoc.rollerCoasters.push(rollerCoasterDoc._id)
			userDoc.save()

			res.status(201).json(rollerCoasterDoc)
			
		} catch (err) {
			console.error(err)
			res.status(500)
		}
	} else {
		res.status(401)
	}
	res.end()
}