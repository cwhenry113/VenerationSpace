import Head from 'next/head'
import Link from 'next/link'
import {React, useEffect, useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/test2.css'
import {Container, Image, Grid} from 'semantic-ui-react'
import { NavBarOther } from '/components/NavBarOther';
import { Search } from '/components/Search';
const src1 = 'https://images.unsplash.com/photo-1620506117452-99cd6b6dcd3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
export default function About(){ 
  /*
------- I've tried with this code -------

  const id = "6351d6871586cb9e8425b18c"
  let [name, setName] = useState(null)
  useEffect(() => {findVenerationById();}, [])
  const findVenerationById = async () => {
    fetch('/api/veneration/findById', {_id: `${id}`})
    .then(response => response.json())
    .then(data => setName(data.givenName))
  };*/



  const convertedId = '6351d6871586cb9e8425b18c'
  const [name, setName] = useState('')
  const findVenerationById = async () => {
    const id = "6351d6871586cb9e8425b18c"
    const res = await fetch('/api/veneration/findById', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: `${id}`
      }),
    });
    const data = await res.json();
    console.log(data);
  };


  findVenerationById();
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
      <h1 style={{textAlign: "center", fontSize:"3vw", fontFamily:"MrsEaves-Italic"}}></h1>
      <h3 style={{textAlign: "center", fontSize:"1.5vw"}}>Dates</h3>
      <Image src={src1} size='medium' centered />
        <p text style={{ marginTop: '2em', fontSize:"1.5vw", fontFamily:"MrsEaves-Italic"}}>Bio</p>
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