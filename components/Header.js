import React from 'react'
import UserInfo from './UserInfo'
import { useSession } from "next-auth/react"
import Link from 'next/link'

export default function Header() {
	const { data: session } = useSession()

	return (
		<div className="header w-screen h-auto bg-blue-500 drop-shadow-xl fixed flex justify-between pl-4 pr-4 pb-2 pt-2 items-center top-0">
			<div></div>
			<Link href={"/"}>
				<h1 className="font-bold text-4xl text-white m-0">TPT2 DB</h1>
			</Link>
			<UserInfo session={session} />
		</div>
	)
}
