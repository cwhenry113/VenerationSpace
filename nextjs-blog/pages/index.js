import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    
    <div className="container">
      <Head>
        <title>VenerationSpace</title>
        <link rel="icon" href="/cross.ico" />
      </Head>

      <header className="topnav">
            <a href="/" className="firstnav">Home</a>
            <a href="/statpages/about">About Us</a>
            <a href="/statpages/apply">Apply</a>
            <a href="/statpages/login" className="lastnav">Login</a>
      </header>
      <main>
        <h1 className="title">
          Veneration Space
        </h1>

        <div className="split">
          <div>
            <ul className="listButtons">
                <li>
                  <a href="/statpages/about" className="card">Search</a>
                </li>
                <li>
                  <a href="/statpages/example" className="card">Create</a>
                </li>
            </ul>
          </div>
          
          <div>
          <img src="https://img3.stockfresh.com/files/s/spectral/m/27/1729712_stock-photo-cartoon-angel.jpg" alt="image placeholder" className="image"/>
          </div>
        </div>
      </main>

      {/* CSS Stuff */}
      {/* Main color:   #736b66 */}
      {/* Light accent: #D39130 */}
      {/* Dark accent:  #9E4943 */}
      {/* Light shade:  #EFF2EC */}
      {/* Dark shade:   ##d3a67a */}
      <style jsx>{`
        .container {
          background-color: #d3a67a;
          height: 800px;
        }

          main {
            font-family: monaco, Consolas, "Lucida Console", monospace;
          }
        
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color:#736b66;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 2.5% 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.6));
          -webkit-text-stroke: 1px black;
          text-align: center;
          color: #f2f2f2;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #d3a67a;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        .listButtons{
          margin-top:-25%;
        }

        .listButtons li {
          display: block;
          margin: 50% 0;

        }
        .split{
          display: flex;
        }
        .split div{
          margin: 0 auto;
        }
        .image{
          filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.4));
          height: 65%;
          margin-right: -10rem;
        }
        .card {
          filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.4));
          margin: 1rem;
          padding: 2rem 20%;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 5px;
          border-color:#2e2c2b;
          background-color: #d1694b;
          color:#2e2c2b;
          font-size: 70px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          background-color:#9E4943;
        }

        .logo {
          height: 1em;
        }
        .topnav {
          filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.7));
          font-family: monaco, Consolas, "Lucida Console", monospace;
          overflow: hidden;
          background-color: #5d534d;
        }
        
        .topnav a {
          width: 25%;
          float: left;
          color: #f2f2f2;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 24px;
        }
        
        .topnav a:hover {
          background-color: #302d2b;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
