import { signIn } from 'next-auth/react'
import React from 'react'

export default function ProtectedRoutSignIn() {
	return (
		<div className="h-[calc(100vh-56px)] w-screen flex items-center justify-center">
			<div>
				<h1 className="text-6xl font-bold">Sign in to access this route</h1>
				<div className="flex justify-center items-center pt-8">
					<button onClick={() => signIn()} className="font-bold block py-4 px-6 bg-green-400 text-xl">Sign in</button>
				</div>
			</div>
		</div>
	)
}