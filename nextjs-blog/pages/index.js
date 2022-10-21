import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { NavBar } from '/components/NavBar';
import {
  Image
} from 'semantic-ui-react'
import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()
  return (
    
    <div className="container" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover'}}>
      <Head style={{ background: '#BEC7E4'}}>
        <title>Veneration Space</title>
        <link rel="icon" href="/cross.ico" />
      </Head>
      <NavBar />
      
      {!session && (
          <>
            not signed in<br />
          </>
        )}
      {session && (
          <>
            Signed in as {session.user.name}<br />
          </>
        )}
      <div class = "ui equal width middle aligned center aligned grid" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover', paddingTop: '6em'}} >
        <div class="column six wide middle aligned grid" >
          <div class="row">
            <a href="/statpages/search">
              <button class = "ui color1 button" style={{ fontSize: '4.5rem', margin:'5rem auto'}}>
                Search
              </button>
            </a>
          </div>
          <div class="row">
          <a href="/statpages/example2">
              <button class = "ui color1 button" style={{ fontSize: '4.5rem', margin:'5rem auto'}}>
                Create
              </button>
              </a>
          </div>
        </div>
        <div class="column ten wide">
          <div class="ui large image">
            <Image src="/bioPictures/logo4.png" size='massive' centered />
          </div>
        </div>
      </div>
        <style jsx>{`
            .container{
                min-height: 100vh;
            }
            `}
        </style>
    </div>
  )
}
