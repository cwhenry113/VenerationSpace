import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import 'semantic-ui-css/test2.css'

export default function Home() {
  return (
    
    <div className="container" style={{ background: '#C1C6E4'}}>
      <Head style={{ background: '#BEC7E4'}}>
        <title>Veneration Space</title>
        <link rel="icon" href="/cross.ico" />
      </Head>
      <div class="ui menu" style={{ background: '#547FE8', color: '#FFFFFF'}}>
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
        <div class="column six wide middle aligned grid" >
          <div class="row">
            <Link href="/statpages/search">
              <button class = "ui color1 button" style={{ fontSize: '4.5rem', margin:'5rem auto'}}>
                Search
              </button>
            </Link>
          </div>
          <div class="row">
            <Link href="/statpages/example">
              <button class = "ui color1 button" style={{ fontSize: '4.5rem', margin:'5rem auto'}}>
                Create
              </button>
            </Link>
          </div>
        </div>
        <div class="column ten wide">
          <div class="ui large image">
            <img src="https://img3.stockfresh.com/files/s/spectral/m/27/1729712_stock-photo-cartoon-angel.jpg" alt="image placeholder"/>
          </div>
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
