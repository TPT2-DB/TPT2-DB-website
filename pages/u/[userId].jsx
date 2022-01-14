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
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam nihil nisi voluptatibus sed similique adipisci omnis assumenda quidem, doloribus molestias voluptas, sunt debitis labore temporibus culpa illum deserunt! Commodi doloribus, placeat sapiente, optio laborum iure ratione, voluptatibus vitae veniam quisquam laudantium temporibus laboriosam in aut explicabo repellat quibusdam soluta possimus.</p>
						<p>Doloremque itaque a quibusdam odio vitae id quaerat nobis ut voluptate dignissimos. Molestias nihil tempore amet voluptates repellendus ab velit, expedita perferendis a rem, illo doloremque est. Esse reiciendis odio numquam explicabo eum deleniti magni voluptatem doloremque, officiis tempore veniam magnam repudiandae maiores recusandae nam atque blanditiis, unde voluptas porro!</p>
						<p>Sint debitis, eaque fugiat blanditiis reprehenderit repellat quam officia optio. Magnam necessitatibus natus iste accusantium, dolore aliquam labore fugiat ipsam eius, tenetur facere quaerat officia animi maiores, itaque velit eos esse! Et doloribus repellat repudiandae, iure, quos corrupti officiis reiciendis quas eveniet cupiditate dignissimos neque, eos necessitatibus tempore facilis quis?</p>
						<p>Numquam similique sit aut impedit! Ratione suscipit non asperiores, fugiat id fugit enim delectus illo pariatur aliquam nam in. Officia atque impedit qui eligendi dicta quos eos voluptate. Debitis fugiat omnis molestiae neque libero porro ex eos esse rem quae accusantium, possimus aspernatur, quos quam minus veniam! Quasi, ad facilis.</p>
						<p>Sit possimus quasi repellat eum non sunt eius fuga! Quis reprehenderit iure rerum voluptas, molestiae illo magni, sequi voluptates, veritatis facilis pariatur doloribus odit consequatur optio culpa debitis quae. Voluptas velit architecto quas aliquam inventore suscipit vitae voluptates vero alias laudantium, voluptate dicta qui perferendis esse fugiat! Necessitatibus, asperiores voluptatum.</p>
						<p>Itaque hic ipsum autem quo facilis assumenda optio minima omnis beatae non, culpa rerum ab possimus voluptates voluptas quod, voluptate inventore laudantium aliquam blanditiis. Nam quisquam temporibus nostrum, saepe sapiente officia dolore ipsam aut doloremque mollitia vero rem quam itaque impedit commodi ut assumenda nesciunt cum in quia vitae eligendi!</p>
						<p>Fugit reprehenderit ex consequatur facere iste illo pariatur eum. Sunt, eos autem quas velit cupiditate voluptatibus doloribus sint officiis omnis reiciendis dignissimos et pariatur aspernatur dolorem porro facilis accusamus adipisci culpa delectus, provident quis! Voluptatibus quas ipsum veritatis debitis quos itaque minima enim maxime a? Rerum quaerat nobis esse dicta.</p>
						<p>Doloribus cupiditate sit sequi ad, ipsum aliquid totam accusantium distinctio, delectus repellat praesentium ex, architecto voluptatem. Veritatis aspernatur temporibus deserunt qui praesentium ducimus cum debitis maxime voluptate et quibusdam vitae quasi aliquid, voluptatem laboriosam earum perspiciatis repellendus magni iure beatae? Natus suscipit officiis odio vitae nihil vero illum distinctio eligendi.</p>
						<p>Nesciunt architecto in ea saepe assumenda eveniet atque reprehenderit, corporis illum minima consequatur nihil exercitationem. Molestiae fuga amet, quod repellendus voluptate dolore odit dolores soluta veniam cumque deserunt accusamus nesciunt explicabo atque ad ducimus ratione temporibus iure? Nihil totam excepturi ipsam, est unde quam voluptatibus. Explicabo quidem similique rerum quae?</p>
						<p>Explicabo, delectus laborum id earum quibusdam porro reiciendis quaerat, officiis dolorum, nam iste ducimus consequatur! Aliquam voluptatum distinctio reprehenderit est dicta. Impedit, excepturi enim reiciendis numquam minima porro provident. Ipsa fugit corporis mollitia labore saepe qui ratione, beatae fugiat ullam iste aut tempore ea cumque assumenda. Quam error similique atque.</p>
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