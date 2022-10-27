import Head from 'next/head'
import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import { NavBar} from '/components/NavBar';
import {
  Image
} from 'semantic-ui-react'

export default function Home() {
  const createVeneration = async () => {
    console.log('CREATING VENERATION');
    //To-do: fill data from a form
    const firstName = "John";
    const lastName = "Doe";
    const res = await fetch('/api/veneration/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        givenName: `${firstName}`,
        familyName: `${lastName}`,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (

    <div className="container" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover' }}>
      <Head style={{ background: '#BEC7E4' }}>
        <title>Veneration Space</title>
        <link rel="icon" href="/cross.ico" />
      </Head>
      <NavBar />
      <div class = "ui equal width middle aligned center aligned grid" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover', paddingTop: '6em'}} >
        <div class="column six wide middle aligned grid" >
        <div class = "ui equal width middle aligned center aligned grid" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover', paddingTop: '6em'}} >
      <div class="ui massive message" style = {{ margin:'2rem', padding:'20px'}}>
        <div class="header">
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
