import { useSession, getSession } from "next-auth/react"
import ProtectedRoutSignIn from "../../components/ProtectedRoutSignIn"

export default function Page({ session }) {

  console.log(session)

  if (session) {
    return (
      <div>
        <h1>Protected Page</h1>
        <p>You can view this page because you are signed in.</p>
      </div>
    )
  } else {
    return <ProtectedRoutSignIn />
  }
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx)
    }
  }
}