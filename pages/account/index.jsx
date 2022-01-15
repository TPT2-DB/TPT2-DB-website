import { useSession, getSession, signOut } from "next-auth/react"
import BigButton from "../../components/BigButton"
import ProtectedRoutSignIn from "../../components/ProtectedRoutSignIn"

export default function Page({ session }) {

  if (session) {
    return (
      <div className="text-center">
        <h1>Sign Out</h1>
        <BigButton onClick={() => signOut()}>Sign Out</BigButton>
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