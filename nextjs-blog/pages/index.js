import Head from 'next/head'
import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import { NavBar} from '/components/NavBar';
import {
  Image
} from 'semantic-ui-react'
import { useSession } from 'next-auth/react'

export default function Home() {
  
  const { data: session, status } = useSession()

  return (

    <div className="container" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover' }}>
      <Head style={{ background: '#BEC7E4' }}>
        <title>Veneration Space</title>
        <link rel="icon" href="/cross.ico" />
      </Head>
      <NavBar />
      <div className = "ui equal width middle aligned center aligned grid" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover', paddingTop: '6em'}} >
        <div className="column six wide middle aligned grid" >
        <div className = "ui equal width middle aligned center aligned grid" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover', paddingTop: '6em'}} >
      <div className="ui massive message" style = {{ margin:'2rem', padding:'20px'}}>
        <div className="header">
          About Veneration Space
        </div>
        <p><br/>Veneration Space is a website used to honor the dead by creating a tribute webpage for them. 
        These webpages, called "Venerations", contain lots of information on the deceased, including testimonials from their friends and family, and stories of their life. 
        <br/><br/>Venerations can have their information added, deleted or updated in order to better represent the deceased's life. 
        Additionally, comments can be made on a Veneration, so that loved ones may share what the deceased meant to them. <br/><br/>Moderation is carried out through Guardians. 
        Guardians are relatives or close friends that apply to help ensure there is peace on the Veneration page of the ones they care about.</p>
      </div>
    </div>
        </div>
        <div className="column ten wide">
          <div className="ui large image">
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
