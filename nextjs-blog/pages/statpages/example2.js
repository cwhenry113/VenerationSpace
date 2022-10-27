import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import {
  Container,
  Image,
  Grid,
} from 'semantic-ui-react'
import { NavBarOther } from '/components/NavBarOther';
import { Search } from '/components/Search';
import { UserInput } from '/components/UserInput';
const src1 = 'https://images.unsplash.com/photo-1620506117452-99cd6b6dcd3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

export default function About(){
    return(
      <div className="container" style={{ backgroundImage: "url(/bioPictures/background.jpg)", backgroundSize: 'cover'}}>

      <NavBarOther />
      <Container text style={{ paddingTop: '6em' }}>
      <Search />
      <Grid.Column style={{ textAlign: "right" }}>
            <button class="ui right labeled icon button">
              <i class="configure icon"></i>
              Options
            </button>
          </Grid.Column>
      <h2 style={{textAlign: "center"}}>Robert Smith</h2>
      <h2 style={{textAlign: "center"}}>1942-2022</h2>
      
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
      <Image src={src1} size='medium' centered />
      </Grid.Column>
      <Grid.Column>
        <p text style={{ marginTop: '6em' }}>
        Bob was loved by so many. He had such a significant impact on everyone around him. This page was created to provide a space for all those who were touched by him to share stories, 
        memories, photos and words of comfort. We are all missing him dearly. <br/><br/> Join now to share your stories and memories you had with him.
      </p>
     {/* function openInstagram() {
        window.open('https://instagram.com')
      }*/}
      
      <img id="Img" src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fpopular-services-brands%2F512%2Finstagram-512.png&sp=1666899542T5ad8bf28f89a76fd4aa188d0eb4b465dcb1f59fd1357438b1bbde9340c564fc8" width='50' height='50'/>
      <img id="Img" src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fsocial-messaging-ui-color-shapes-2-free%2F128%2Fsocial-facebook-circle-512.png&sp=1666899712T626ff7332553f9424fff6316f5b46a4fb57116617c683995a3f88d76782ae270" width='50' height='50'/>
      <img id="Img" src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fsocial-messaging-ui-color-shapes-2-free%2F128%2Fsocial-youtube-circle-512.png&sp=1666899675T627e79c8512c8236d5d002be21e98f01c219154f3cf6498611a3ee2e3995825f" width='50' height='50'/>
      <img id="Img" src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F145%2F145807.png&sp=1666899480Teb9a0a9b842c9c1054fe9ec106b996a3056ad281ca7e8dbe5cf1dd2e363e0160" width='50' height='50'/>

      </Grid.Column>
      </Grid>
      <h3 style={{textAlign: "center"}}>Add Memory
      <form>
        <input align="right" type="text" id="comment" name="comment"/>
      </form>
      </h3>
      </Container>

      <div class="ui divider"></div>

    </div>
  )
}