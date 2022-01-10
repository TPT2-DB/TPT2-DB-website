import Image from 'next/image'
import React from 'react'
import { signIn, signOut } from "next-auth/react"
import Link from 'next/link'

export default function UserInfo({ session }) {
	if (session) {
		return (
			<Link href='/account'>
				<div className="flex justify-center items-center gap-4 text-white cursor-pointer" title="Manage Account">
					<div>
						<p className="font-bold text-xl cursor-pointer">{session.user.name}</p>
					</div>
					<Image src={session.user.image} alt={`profile picture for ${session.user.name}`} width={32} height={32} className="rounded-full cursor-pointer" />
				</div>
			</Link>
		)
	}
	return (
		<div>
			<button onClick={() => signIn()}>Sign in</button>
		</div>
	)
}
