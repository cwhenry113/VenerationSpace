import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Example(){
    return(
        <div className="container">
            <div className="navBar">
                <a href="/" className="navItem">
                    Home
                </a>
                <a href="/statpages/about" className="navItem">
                    About
                </a>
                <a href="/statpages/apply" className="navItem">
                    Apply
                </a>
                <a href="/statpages/example" className="navItem">
                    Example
                </a>
                <a href="/statpages/search" className="navItem">
                    Search
                </a>
                <a href="/statpages/login" className="navItem">
                    Log in
                </a>
            </div>
            <div className="bioBox">
                <p className="bioName">Ghassan "Punished" Alkadi</p>
                <Image 
                    src="/bioPictures/punishedGDoc.jpg"
                    height={329}
                    width={229}
                    alt="Ghassan Alkadi"
                className = "bioPic"/>
                <ul className="bio">
                    <li>Also known as: Big Boss, Ahab, V, Big Boss's Phantom, Medic</li>
                    <li>Born: 1932, California, United States</li>
                    <li>Died: 1995, Outer Heavan, South Africa</li>
                    <li>Profession: Combat medic, mercenary commander</li>
                    <li>Affiliations: Militaires Sans Frontieres, Diamond Dogs, Outer Heaven</li>
                </ul>
            </div>
            <div className="venerationsList">
                <ul className="venerationsListHead">
                    <li>
                        RIP meemaw
                    </li>
                    <li>
                        RIP peepaw
                    </li>
                    <li>
                        RIP seesaw
                    </li>                                        
                </ul>
            </div>
            <style jsx>{`
            .container{
                font-family: Verdana, sans-serif;
                background-color: #959DA3;
                min-height: 100vh;
                padding: 0;
                margin: 0;
            }
            .navBar{
                background-color: #363843;
                position: -webkit-sticky;
                display: block;
                padding: 14px 16px;
            }
            .navItem{
                display: inline;
                text-align: center;
                padding: 14px 16px;
                background-color: inherit;
                color: #D39130;
                font-size: 24px;
            }

            .venerationsListHead {
            }
            .venerationsListHead li{
                display: block;
            }

            .bioBox {
                float: right;
                border-radius: 10px;
                border-bottom-style: outset;
                margin-top: 1vh;
                margin-right: 5vh;
                margin-left: 5vh;
                background-color: #9E4943;
                color: #EFF2EC;
                min-width: 35vh;
                min-height: 60vh;
                text-align: center;
            }
            .bioPic {
                border-style: solid;
                border-color: black;
                border-width: 5px;
                align: center;
            }
            .bio li {
                margin-left: 15px;
                margin-right: 15px;
                margin-top: 0px;
                margin-bottom: 0px;
                border-width: 2px;
                border-style: solid;
                border-bottom-style: none;
                font-size: 14px;
                list-style-type: none;
                align: center;
            }
            .bio li:last-child{
                border-bottom-style: solid;
            }

            a:link {
                text-decoration: none;
            }
            a:visited {
                text-decoration: none;
            }
            a:hover {
                text-decoration: none;
            }
            a:active {
                text-decoration: none;
            }
            `}
            </style>
        </div>
    )
}