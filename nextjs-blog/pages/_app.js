import { SessionProvider } from "next-auth/react"
import { BrowserRouter } from "react-router-dom";

function App({Component,pageProps: {session, ...pageProps} }){
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default App;
