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

			let name
			let description
			let content

			if (req.method === "POST") {
				let jsonBody = JSON.parse(JSON.stringify(req.body))

				name = jsonBody.name
				description = jsonBody.description
				content = jsonBody.content

				if (!name || !description || !content) {
					res.status(400).json({error: "missing parameters"})
					return
				}

			} else {
				({name, description, content} = req.query)

				if (!name || !description || !content) {
					res.status(400).json({error: "missing parameters"})
					return
				}
			}

			const rollerCoasterDoc = new RollerCoasterModel({
				name,
				description,
				content,
				created: Date.now(),
				creator: session.id
			})
			rollerCoasterDoc.save()

			userDoc.rollerCoasters.push(rollerCoasterDoc._id)
			userDoc.save()

			console.log(req.query.redirectToPost)
			if (req.query.redirectToPost === "true") {
				console.log("yes")
				res.redirect(`/c/${rollerCoasterDoc._id}/${name}`)
			}

		} catch (err) {
			console.error(err)
			res.status(500)
		}
	} else {
		res.status(401)
	}
	res.end()
}