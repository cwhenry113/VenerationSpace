import Head from 'next/head'
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import { NavBarOther } from '/components/NavBarOther';
import FindVenerationById from '../../components/FindVenerationById';

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
      <FindVenerationById id="6351dbf71586cb9e8425b18e"/>
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