import { SessionProvider } from "next-auth/react"
import Header from "../components/Header"
import "../styles/globals.css"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {  
  pageProps["session"] = session
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} className="mt-[40px]" />
    </SessionProvider>
  )
}