import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import { NavBarOther } from '/components/NavBarOther';

export default function Search(){
    return(
      <div className="container" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover'}}>
      <Head style={{ background: '#BEC7E4'}}>
        <title>Veneration Space</title>
        <link rel="icon" href="/cross.ico" />
      </Head>
      <NavBarOther />
      <div class = "ui equal width middle aligned center aligned grid" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover', paddingTop: '6em'}} >
        <div class="ui massive message" style = {{ margin:'5rem', padding:'3rem'}}>
          <div class="header" style = {{ margin:'2rem auto'}}>
            Search Veneration Space
          </div>
          <form class="ui form">
            <div class="massive field">
              <label style={{fontSize:"2rem"}}>First Name</label>
              <input type="text" name="fname" style={{fontSize:"2rem"}}/>
            </div>
            <div class="massive field">
              <label style={{fontSize:"2rem"}}>Middle Name</label>
              <input type="text" name="mname" style={{fontSize:"2rem"}}/>
            </div>
            <div class="massive field">
              <label style={{fontSize:"2rem"}}>Last Name</label>
              <input type="text" name="lname" style={{fontSize:"2rem"}}/>
            </div>
            <button class="ui color1 button" type="submit">Search</button>
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