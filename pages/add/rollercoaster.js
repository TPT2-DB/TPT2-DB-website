import { getSession } from 'next-auth/react'
import React from 'react'
import ProtectedRoutSignIn from '../../components/ProtectedRoutSignIn'

export default function rollercoaster({ session }) {

	if (session) {
		return (
			<div>
				<form action={`${process.env.URL}/api/rollercoaster/add?redirectToPost=true`} method="POST" encType="application/json">
					<input type={"text"} name="name" className="border-4" />
					<input type={"text"} name="description" className="border-4"/>
					<textarea name="content" className="border-4"/>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
	return (
		<ProtectedRoutSignIn />
	)
}

export async function getServerSideProps(ctx) {
	return {
	  props: {
		session: await getSession(ctx)
	  }
	}
  }