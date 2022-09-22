import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'

export default function Apply(){
    return(
      <div className="container" style={{ background: '#C1C6E4'}}>
      <Head style={{ background: '#BEC7E4'}}>
        <title>Veneration Space</title>
        <link rel="icon" href="/cross.ico" />
      </Head>
      <div class="ui menu" style={{ background: '#547FE8', color: 'white'}}>
        <div class="ui large header item" >
          <a href="/" class="ui item" style={{ color: 'white'}}>
            Home
          </a>
          <a href="/statpages/about" class="ui item" style={{ color: 'white'}}>
            About Us
          </a>
          <a href="/statpages/apply" class="ui item" style={{ color: 'white'}}>
            Apply
          </a>
          <a href="/statpages/login" class="ui item" style={{ color: 'white'}}>
            Login
          </a>
          <a href="/statpages/search" class="ui item" style={{ color: 'white'}}>
            Search
          </a>
          <a href="/statpages/example" class="ui item" style={{ color: 'white'}}>
            Create
          </a>
        </div>
      </div>
      <div class = "ui equal width middle aligned center aligned grid" style={{ background: '#C1C6E4'}} >
        <div class="ui massive message" style = {{ margin:'5rem'}}>
          <form class="ui form">
            <div class="massive field">
              <label style={{fontSize:"2rem"}}>First Name</label>
              <input type="text" name="first-name" style={{fontSize:"2rem"}}/>
            </div>
            <div class="massive field">
              <label style={{fontSize:"2rem"}}>Last Name</label>
              <input type="text" name="last-name" style={{fontSize:"2rem"}}/>
            </div>
            <div class="massive field">
              <label style={{fontSize:"2rem"}}>Guardian of who</label>
              <input type="text" name="g-name" style={{fontSize:"2rem"}}/>
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