import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import { NavBar } from '/components/NavBar';
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react"

export default function Signup(){
  
    return(
      <div className="container" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover'}}>
      <Head style={{ background: '#BEC7E4'}}>
        <title>Veneration Space</title>
        <link rel="icon" href="/cross.ico" />
      </Head>
      <NavBar />
      
      <div className = "ui equal width middle aligned center aligned grid" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover'}} >
        <div className="ui massive message" style = {{ margin:'5rem'}}>
                
                
                
                
                <form className="ui form" action = "/api/account/register" method="post">
                    <div className="massive field">
                    <label style={{fontSize:"2rem"}}>Name</label>
                    <input name="name" id='name' style={{fontSize:"2rem"}}/>
                    </div>
                    <div className="massive field">
                    <label style={{fontSize:"2rem"}}>Email</label>
                    <input name="email" type='email' id='email' style={{fontSize:"2rem"}}/>
                    </div>
                    <div className="massive field">
                    <label style={{fontSize:"2rem"}}>Username</label>
                    <input name="username" id='username' style={{fontSize:"2rem"}}/>
                    </div>
                    <div className="massive field">
                    <label style={{fontSize:"2rem"}}>Password</label>
                    <input name="password" type='password' id='password' style={{fontSize:"2rem"}}/>
                    </div>
                    <button className="ui color1 button" variant='contained'>Sign Up</button>
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