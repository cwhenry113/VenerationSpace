import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import { NavBarOther } from '/components/NavBarOther';

export default function Apply(){
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
          <label style={{fontSize:"3rem"}}>Apply for a Page</label>
            <div class="massive field">
              <br/>
              <label style={{fontSize:"2rem"}}>Your First Name</label>
              <input type="text" name="first-name" style={{fontSize:"2rem"}}/>
            </div>
            <div class="massive field">
              <label style={{fontSize:"2rem"}}>Your Last Name</label>
              <input type="text" name="last-name" style={{fontSize:"2rem"}}/>
            </div>
            <div class="massive field">
              <label style={{fontSize:"2rem"}}>Departed First Name</label>
              <input type="text" name="d-first-name" style={{fontSize:"2rem"}}/>
            </div>
            <div class="massive field">
              <label style={{fontSize:"2rem"}}>Departed Middle Name</label>
              <input type="text" name="d-middle-name" style={{fontSize:"2rem"}}/>
            </div>
            <div class="massive field">
              <label style={{fontSize:"2rem"}}>Departed Last Name</label>
              <input type="text" name="d-last-name" style={{fontSize:"2rem"}}/>
            </div>
            <div class="massive field">
              <label style={{fontSize:"2rem"}}>Your Relation to the Departed</label>
              <input type="text" name="relation" style={{fontSize:"2rem"}}/>
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