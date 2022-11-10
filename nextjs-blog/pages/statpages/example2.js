import Head from 'next/head'
import Link from 'next/link'
import {React, useEffect, useState} from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import {Container, Image, Grid} from 'semantic-ui-react'
import { NavBarOther } from '/components/NavBarOther';
import { Search } from '/components/Search';
import { UserInput } from '/components/UserInput';
const src1 = 'https://images.unsplash.com/photo-1620506117452-99cd6b6dcd3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

export default function About(){
  const [name, setName] = useState('')
  
  
  useEffect(() => {
    getName();
  }, [])


  const getName = () => {
    axios.get('http://localhost:8000/api/getOne/636c7abcc24146f70adb5536')
    .then(res => {
      console.log(res.data.name)
      setName(res.data.name)
    }).catch(err => {
      console.log(err)
    })
  }

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
      <h1 style={{textAlign: "center", fontSize:"3vw", fontFamily:"MrsEaves-Italic"}}>{name}</h1>
      <h3 style={{textAlign: "center", fontSize:"1.5vw"}}>July 4, 1942- January 7, 2022</h3>
      <Image src={src1} size='medium' centered />
        <p text style={{ marginTop: '2em', fontSize:"1.5vw", fontFamily:"MrsEaves-Italic"}}>
        Bob was loved by so many. He had such a significant impact on everyone around him. This page was created to provide a space for all those who were touched by him to share stories, 
        memories, photos and words of comfort. We are all missing him dearly. <br/><br/> Join now to share your stories and memories you had with him.
      </p>
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