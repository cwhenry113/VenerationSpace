import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import { NavBarOther } from '/components/NavBarOther';

export default function Login(){
    return(
      <div className="container" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover'}}>
      <Head style={{ background: '#BEC7E4'}}>
        <title>Veneration Space</title>
        <link rel="icon" href="/cross.ico" />
      </Head>
      <NavBarOther />
      <div class = "ui equal width middle aligned center aligned grid" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover', paddingTop: '6em'}} >
        <div class="ui massive message" style = {{ margin:'5rem'}}>
          <form class="ui form">
            <div class="massive field">
              <label style={{fontSize:"2rem"}}>Username</label>
              <input type="text" name="username" style={{fontSize:"2rem"}}/>
            </div>
            <div class="massive field">
              <label style={{fontSize:"2rem"}}>Password</label>
              <input type="text" name="password" style={{fontSize:"2rem"}}/>
            </div>
            <button class="ui color1 button" type="submit">Submit</button>
          </form>
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