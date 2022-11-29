import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import { NavBar } from '/components/NavBar';
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react"
import axios from 'axios';

export default function Signup(){
  
  const router = useRouter()
  const { data: session, status } = useSession()
  const [userState, setUserState] = useState({
    username: '',
    password: '',
    name: '',
    email: '',

  })
  const [pageState, setPageState] = useState({
    error: ''
  })
  const handleFieldChange = (e) => {
    setUserState(old => ({ ...old, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await axios.post('http://localhost:8000/api//postUser/' , {
      "username": userState.username,
      "password": userState.password,
      "name": userState.name,
      "email": userState.email
    })
    
    router.push("/statpages/login/")
    }
    catch(error){
      setPageState(old => ({ ...old, error: "Something went wrong! Duplicate or unfilled information." }))
      console.log(error)
    }
}
    return(
      <div className="container" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover'}}>
      <Head style={{ background: '#BEC7E4'}}>
        <title>Veneration Space</title>
        <link rel="icon" href="/cross.ico" />
      </Head>
      <NavBar />
      
      <div className = "ui equal width middle aligned center aligned grid" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover'}} >
        <div className="ui massive message" style = {{ margin:'5rem'}}>
          {!session && (
            <>
              <form className="ui form" method="post">
                    <div className="massive field">
                    <label style={{fontSize:"2rem"}}>Name</label>
                    <input onChange={handleFieldChange} value={userState.name} name="name" id='name' style={{fontSize:"2rem"}}/>
                    </div>
                    <div className="massive field">
                    <label style={{fontSize:"2rem"}}>Email</label>
                    <input onChange={handleFieldChange} value={userState.email} name="email" type='email' id='email' style={{fontSize:"2rem"}}/>
                    </div>
                    <div className="massive field">
                    <label style={{fontSize:"2rem"}}>Username</label>
                    <input onChange={handleFieldChange} value={userState.username} name="username" id='username' style={{fontSize:"2rem"}}/>
                    </div>
                    <div className="massive field">
                    <label style={{fontSize:"2rem"}}>Password</label>
                    <input onChange={handleFieldChange} value={userState.password} name="password" type='password' id='password' style={{fontSize:"2rem"}}/>
                    </div>
                    {
                        pageState.error !== '' && <p>{pageState.error}</p>
                    }
                    <button className="ui color1 button" variant='contained' onClick={handleSubmit} >Sign Up</button>
                </form>
            </>
          )}
          {session && (
            <>
              <p>You are already signed In</p>
            </>
          )}   
                
                
                
                
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