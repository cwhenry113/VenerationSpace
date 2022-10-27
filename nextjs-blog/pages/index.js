import Head from 'next/head'
import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import { NavBar } from '/components/NavBar';
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
      <div class="ui equal width middle aligned center aligned grid" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover', paddingTop: '6em' }} >
        <div class="column six wide middle aligned grid" >
          <div class="row">
            <a href="/statpages/search">
              <button class="ui color1 button" style={{ fontSize: '4.5rem', margin: '5rem auto' }}>
                Search
              </button>
            </a>
          </div>
          <div class="row">
            <button onMouseDown={createVeneration} class="ui color1 button" style={{ fontSize: '4.5rem', margin: '5rem auto' }}>
              Create
            </button>
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
