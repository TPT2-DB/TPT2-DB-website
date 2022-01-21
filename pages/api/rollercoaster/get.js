import { getSession } from "next-auth/react"
import { connectToDb } from "../../../lib/mongodb"
import PlayerModel from "../../../lib/schemas/Player"
import RollerCoasterModel from "../../../lib/schemas/RollerCoaster"

export default async (req, res) => {

	connectToDb()

	try {
		const {id} = req.query

		if (!id) {
			res.status(400).json({error: "missing parameters"})
			return
		}

		let rollerCoasterDocByNum = null

		try {
			rollerCoasterDocByNum = await RollerCoasterModel.findOne({ numId: id })
		} catch {

		}

		if (rollerCoasterDocByNum) {
			res.status(200).json(JSON.parse(JSON.stringify(rollerCoasterDocByNum)))
			return
		}

		const rollerCoasterDocById = await RollerCoasterModel.findById(id)
		res.status(500).json(JSON.parse(JSON.stringify(rollerCoasterDocById)) || {})
		return
		
		
	} catch (err) {
		console.error(err)
		res.status(500).json({})
		return
	}
}