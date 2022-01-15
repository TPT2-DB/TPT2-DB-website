//import { connectToDb } from "../../lib/mongodb"
//import PlayerModel from "../../lib/schemas/Player"

import Image from "next/image";
import Link from "next/link";
import ContentContainer from "../../components/ContentContainer";


export default function user({user}) {

	if (Object.keys(user).length === 0) {
		return (
			<h1>Not Found</h1>
		)
	}

	return (
		<div>
			<ContentContainer>
				<div className="grid grid-cols-[250px_auto_auto_auto] grid-rows-[auto_1fr] gap-8">
					<div className="flex col-span-1 row-span-2 flex-col">
						<div>
							<Image src={user.discordUser.avatar.url} alt="pfp" width={250} height={250} className="rounded-full"/>
						</div>
						<div className="flex gap-3 flex-col mt-4">
							<div className="">
								<h1 className="text-4xl">{user.discordUser.username}</h1>
								<h5 className="text-gray-700">#{user.discordUser.discriminator}</h5>
							</div>
							<div className="flex gap-1 flex-col">
								<h4 className="text-2xl">Bio</h4>
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, dolorem?</p>
								<hr />
							</div>
						</div>
					</div>
					<div className="col-span-3 row-start-1 col-start-2">
						
					</div>
				</div>
			</ContentContainer>
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
}