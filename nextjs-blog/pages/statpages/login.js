import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { signIn } from 'next-auth/react'  
import { NavBarOther } from '/components/NavBarOther';
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
      <NavBarOther />
      
      <div class = "ui equal width middle aligned center aligned grid" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover'}} >
        <div class="ui massive message" style = {{ margin:'5rem'}}>
                {
                  pageState.error !== '' && <p>{simplifyError(pageState.error)}</p>
                }
                <input onChange={handleFieldChange} value={authState.username} label="Username" id='username' />
                <input onChange={handleFieldChange} value={authState.password} label="Password" type='password' id='password' />
                <button disabled={pageState.processing} onClick={handleAuth} variant='contained'>Login</button>
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