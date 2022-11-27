import Head from 'next/head'
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import { NavBarOther } from '/components/NavBarOther';

export default function About(){
    return(
    <div className="container" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover'}}>
    <Head style={{ background: '#BEC7E4'}}>
      <title>Veneration Space</title>
      <link rel="icon" href="/cross.ico" />
    </Head>
    <NavBarOther />
    <div class = "ui equal width middle aligned center aligned grid" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover', paddingTop: '6em'}} >
      <div class="ui massive message" style = {{ margin:'5rem'}}>
      <a href="./findVenerationByIdTest">FindVenerationById</a> <div/>
      <a href="./getCommentIdsTest">GetCommentIds</a> <div/>
      <a href="./showCommentsTest">ShowComments</a> <div/>
      <a href="./assembleGroupTest">AssembleGroup</a> <div/>
      <a href="./commentBoxTest">CommentBox</a> <div/>
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