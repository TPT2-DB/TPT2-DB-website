//import { connectToDb } from "../../lib/mongodb"
//import PlayerModel from "../../lib/schemas/Player"


export default function user({user, errorCode}) {

	return (
		<div>
			{user.discordId}
		</div>
	)
}

export async function getServerSideProps(context) {

	const response = await fetch(`${process.env.URL}/api/user/${context.query.userId}`);
  	const data = await response.json()
	

	return {
		props: {
			user: data,
			status: response.status
		}
	}

	// await connectToDb()

	// const { userId } = context.query

	// let player
	// let errorCode = 0

	// try {
	// 	player = await PlayerModel.findById(userId)
	// } catch {
	// 	return {
	// 		props: {
	// 			errorCode: 500,
	// 			user: {}
	// 		}
	// 	}
	// }

	// if (!player) {
	// 	return {
	// 		props: {
	// 			errorCode: 404,
	// 			user: {}
	// 		}
	// 	}
	// } 

	// console.log(typeof player)

	// await player

	// return {
	// 	props: {
	// 		errorCode: errorCode,
	// 		user: JSON.parse(JSON.stringify(player))
	// 	}
	// }
}