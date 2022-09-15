import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'

export default function Search(){
    return(
      <div className="container" style={{ background: '#C1C6E4'}}>
      <Head style={{ background: '#BEC7E4'}}>
        <title>Veneration Space</title>
        <link rel="icon" href="/cross.ico" />
      </Head>
      <div class="ui menu" style={{ background: '#547FE8', color: 'white'}}>
        <div class="ui large header item" >
          <Link href="/" class="ui item" style={{ color: 'white'}}>
            Home
          </Link>
          <Link href="/statpages/about" class="ui item" style={{ color: 'white'}}>
            About Us
          </Link>
          <Link href="/statpages/apply" class="ui item" style={{ color: 'white'}}>
            Apply
          </Link>
          <Link href="/statpages/login" class="ui item" style={{ color: 'white'}}>
            Login
          </Link>
          <Link href="/statpages/search" class="ui item" style={{ color: 'white'}}>
            Search
          </Link>
          <Link href="/statpages/example" class="ui item" style={{ color: 'white'}}>
            Create
          </Link>
        </div>
      </div>
      <div class = "ui equal width middle aligned center aligned grid" style={{ background: '#C1C6E4'}} >
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