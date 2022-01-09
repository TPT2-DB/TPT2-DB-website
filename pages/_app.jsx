import { SessionProvider } from "next-auth/react"
import Header from "../components/Header"
import "../styles/globals.css"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  console.log(session)
  
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}