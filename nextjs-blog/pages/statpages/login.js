import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import { signIn } from 'next-auth/react'  
import { NavBar } from '/components/NavBar';
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react"

export default function Login(){
  const router =  useRouter()
    const [authState, setAuthState] = useState({
        username: '',
        password: ''
    })
    const [pageState, setPageState] = useState({
        error: '',
        processing: false
    })

    const handleFieldChange = (e) => {
        setAuthState(old => ({ ...old, [e.target.id]: e.target.value }))
    }

    const simplifyError = (error) => {
        const errorMap = {
            "CredentialsSignin": "Invalid username or password"
        }
        return errorMap[error] ?? "Unknown error occurred"
    }

    const handleAuth = async () => {
        setPageState(old => ({...old, processing: true, error: ''}))
        signIn('credentials', {
            ...authState,
            redirect: false
        }).then(response => {
            console.log(response)
            if (response.ok) {
                // Authenticate user
                router.push("/")
            } else {
                setPageState(old => ({ ...old, processing: false, error: response.error }))
            }
        }).catch(error => {
            console.log(error)
            setPageState(old => ({...old, processing: false, error: error.message ?? "Something went wrong!"}))
        })
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
                
                
                
                
                <form className="ui form">
                    <div className="massive field">
                    <label style={{fontSize:"2rem"}}>Username</label>
                    <input onChange={handleFieldChange} value={authState.username} label="Username" id='username' style={{fontSize:"2rem"}}/>
                    </div>
                    <div className="massive field">
                    <label style={{fontSize:"2rem"}}>Password</label>
                    <input onChange={handleFieldChange} value={authState.password} label="Password" type='password' id='password' style={{fontSize:"2rem"}}/>
                    </div>
                        {
                            pageState.error !== '' && <p>{simplifyError(pageState.error)}</p>
                        }
                    <button disabled={pageState.processing} onClick={handleAuth} className="ui color1 button" variant='contained'>Login</button>
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