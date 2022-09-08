import Head from 'next/head'
import Link from 'next/link'

export default function About(){
    return(
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
        {/* Main grid in center of the page */}
        <div className="grid">
          <div className="about">
            <h3>About Veneration Space</h3>
            <p>The Veneration Space is a website used to honor the dead by creating a tribute webpage for them. The webpages include anything from information about them, testimonials from their friends and families, and stories about their life. <br/><br/>Pages on our website can have information be requested added, deleted or changed in order to better suit who the memorial is of. Comments can also be made in order to talk about them or with people they knew. <br/><br/>Moderation is carried out through Guardians. Guardians are relatives or close friends that apply to help make sure there is peace on the webpage of the person.</p>
          </div>
        </div>
      </main>

      {/* CSS Stuff */}
      {/* Main color:   #959DA3 */}
      {/* Light accent: #D39130 */}
      {/* Dark accent:  #9E4943 */}
      {/* Light shade:  #EFF2EC */}
      {/* Dark shade:   #363843 */}
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
          background-color:#959DA3;
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

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
          color: #D39130;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          width: 100%;
          margin-top: 3rem;
        }

        .about {
          filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.4));
          margin: 1rem;
          flex-basis: 75%;
          padding: 1rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 5px;
          border-color:#2e2c2b;
          background-color:#F2F2F2;
          color:#2e2c2b;
        }

        .about h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .about p {
          margin: 0 5% 1rem 5%;
          font-size: 1.25rem;
          line-height: 1.5;
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