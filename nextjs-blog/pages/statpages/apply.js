import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import { NavBar } from '/components/NavBar';
import { useSession } from 'next-auth/react'

export default function Apply(){
  
  const { data: session, status } = useSession()
    return(
      <div className="container" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover'}}>
      <Head style={{ background: '#BEC7E4'}}>
        <title>Veneration Space</title>
        <link rel="icon" href="/cross.ico" />
      </Head>
      <NavBar />
      <div className = "ui equal width middle aligned center aligned grid" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover', paddingTop: '6em'}} >
        <div className="ui massive message" style = {{ margin:'5rem'}}>
          <form className="ui form">
          <label className={{fontSize:"3rem"}}>Apply for a Page</label>
            <div className="massive field">
              <br/>
              <label style={{fontSize:"2rem"}}>Your First Name</label>
              <input type="text" name="first-name" style={{fontSize:"2rem"}}/>
            </div>
            <div className="massive field">
              <label style={{fontSize:"2rem"}}>Your Last Name</label>
              <input type="text" name="last-name" style={{fontSize:"2rem"}}/>
            </div>
            <div className="massive field">
              <label style={{fontSize:"2rem"}}>Departed First Name</label>
              <input type="text" name="d-first-name" style={{fontSize:"2rem"}}/>
            </div>
            <div className="massive field">
              <label style={{fontSize:"2rem"}}>Departed Middle Name</label>
              <input type="text" name="d-middle-name" style={{fontSize:"2rem"}}/>
            </div>
            <div className="massive field">
              <label style={{fontSize:"2rem"}}>Departed Last Name</label>
              <input type="text" name="d-last-name" style={{fontSize:"2rem"}}/>
            </div>
            <div className="massive field">
              <label style={{fontSize:"2rem"}}>Your Relation to the Departed</label>
              <input type="text" name="relation" style={{fontSize:"2rem"}}/>
            </div>
            <button className="ui color1 button" type="submit">Submit</button>
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