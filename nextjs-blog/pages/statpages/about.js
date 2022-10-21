import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { NavBarOther } from '/components/NavBarOther';

export default function About(){
    return(
    <div className="container" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover'}}>
    <Head style={{ background: '#BEC7E4'}}>
      <title>Veneration Space</title>
      <link rel="icon" href="/cross.ico" />
    </Head>
    <NavBarOther />
    <div class = "ui equal width middle aligned center aligned grid" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover', paddingTop: '6em'}} >
      <div class="ui massive message" style = {{ margin:'5rem'}}>
        <div class="header">
          About Veneration Space
        </div>
        <p><br/>The Veneration Space is a website used to honor the dead by creating a tribute webpage for them. The webpages include anything from information about them, testimonials from their friends and families, and stories about their life. <br/><br/>Pages on our website can have information be requested added, deleted or changed in order to better suit who the memorial is of. Comments can also be made in order to talk about them or with people they knew. <br/><br/>Moderation is carried out through Guardians. Guardians are relatives or close friends that apply to help make sure there is peace on the webpage of the person.</p>
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